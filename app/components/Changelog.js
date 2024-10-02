"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clipboard, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

const CopyLinkButton = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`ml-2 p-2 rounded-full transition-all duration-200 ease-in-out shadow-md ${
        copied ? 'bg-green-500 text-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
      }`}
      title="Copy link"
    >
      {copied ? (
        <Check size={16} className="animate-scale-check" />
      ) : (
        <Clipboard size={16} className={copied ? 'animate-ping' : ''} />
      )}
    </button>
  );
};

const ChangelogItem = ({ date, changes, link }) => (
  <motion.div 
    className="flex w-full"
    initial={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    exit={{ opacity: 0, translateY: 20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center mr-4">
      <div className="w-px h-full bg-gray-300"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
    </div>
    <div className="pb-8 w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="p-6">
          <p className="mb-2 text-xl font-semibold text-gray-900">{date}</p>
          <ul className="list-disc pl-5 mb-4">
            {changes.map((change, index) => (
              <li key={index} className="text-gray-700 mb-2">{change}</li>
            ))}
          </ul>
          <div className="flex items-center">
            <a 
              href={link} 
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              View detailed changes
            </a>
            <CopyLinkButton link={link} />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ArrowIcon = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`feather feather-arrow-${direction === 'left' ? 'left' : 'right'}`}
  >
    {direction === 'left' ? (
      <path d="M19 12H5M12 19l-7-7 7-7" />
    ) : (
      <path d="M5 12h14M12 5l7 7-7 7" />
    )}
  </svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-12 space-x-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 rounded-full bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <ArrowIcon direction="left" />
    </button>
    <span className="text-lg font-semibold">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 rounded-full bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <ArrowIcon direction="right" />
    </button>
  </div>
);

const Changelog = ({ changes, itemsPerPage = 25 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(changes.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return changes.slice(startIndex, endIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-black hover:text-blue-600">Changelog</h2>
      <div className="space-y-8">
        {getCurrentPageItems().map((item, index) => (
          <ChangelogItem 
            key={index} 
            date={item.date} 
            changes={item.changes} 
            link={item.link}
          />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

const ErrorMessage = ({ error }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="text-red-500 bg-red-100 border border-red-400 p-4 rounded-lg shadow-md mt-6 max-w-lg mx-auto text-center"
  >
    {error}
  </motion.div>
);

export default function ChangelogPage() {
  const [changelogData, setChangelogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/gaurav-sarage/NextBlend/commits', {
          headers: {
            Authorization: process.env.GITHUB_TOKEN, // Ensure proper token format
          },
        });
        const formattedCommits = response.data.map(commit => ({
          date: new Date(commit.commit.committer.date).toLocaleDateString(),
          changes: [commit.commit.message],
          link: commit.html_url,
        }));
        setChangelogData(formattedCommits);
      } catch (err) {
        console.error(err); // Log error for debugging
        setError("Yikes! We hit a snag fetching the data. Give it a sec and try again. 🔄");
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Changelog changes={changelogData} itemsPerPage={25} />
    </div>
  );
}
