import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import wordpress from "../../public/wordpress.svg";
import nextjs from "../../public/nextjs.svg";
import tailwind from "../../public/tailwind.svg"
import nodejs from "../../public/nodejs.svg";
import vercel from "../../public/vercel.svg";
import figma from "../../public/figma.svg";

const Toolkit = () => {
    const features = [
        {
            icon: wordpress,
            title: "Wordpress",
            description: "Wordpress is an open-source content management system (CMS)."
        },
        {
            icon: nextjs,
            title: "Next.js",
            description: "Next.js is a React framework that gives you building blocks to create web apps."
        },
        {
            icon: tailwind,
            title: "Tailwind CSS",
            description: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UI's"
        },
        {
            icon: nodejs,
            title: "Node.js",
            description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
        },
        {
            icon: vercel,
            title: "Vercel",
            description: "Vercel is a cloud platform that enables developers to host web apps."
        },
        {
            icon: figma,
            title: "Figma",
            description: "Figma is a web-based graphics editing and user interface design app."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-black text-4xl font-extrabold sm:text-4xl">
                        Work with the best toolkit
                    </h2>
                    <p className="text-md font-semibold">
                        These are a few of our favourite things
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-6 h-6 rounded-full flex items-center justify-center">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-black font-semibold hover:text-indigo-600 cursor-pointer">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-md font-semibold">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Toolkit;