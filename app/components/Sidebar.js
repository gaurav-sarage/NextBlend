"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavLink = ({ ...props }) => {
    const {
        children,
        href = "",
        className = "",
        active = "",
    } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname == href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <Link href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </Link>
    );
};

// Title component
const Title = ({ children }) => (
    <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
        {children}
    </h3>
);

// Sections List
const SectionsList = ({ items }) => (
    <div className='text-gray-600 px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        active='text-gray-900 border-indigo-600'
                        className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

// Search Box component
const SearchBox = ({ ...props }) => (
    <div className='relative w-full'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
            <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
            />
        </svg>

        <input
            {...props}
            type='email'
            className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
        />
    </div>
);


const Sidebar = () => {
    const componentType = {
        marketingUIComponent: [
            { name: "Banners", href: "/components/banners" },
            { name: "CTA Sections", href: "/components/ctas" },
            { name: "Team Sections", href: "/components/team-sections" },
            { name: "Contact Sections", href: "/components/contact-sections" }, { name: "Footers", href: "/components/footers" },
            { name: "Logo Grid", href: "/components/logo-grid" },
            { name: "Hero Sections", href: "/components/heroes" },
            { name: "Feature Sections", href: "/components/feature-sections" },
            { name: "Pricing Sections", href: "/components/pricing-sections" },
            { name: "Testimonials", href: "/components/testimonials" },
            { name: "Stats", href: "/components/stats" },
            { name: "Newsletter Sections", href: "/components/newsletter-sections" },
        ],

        applicationUIComponent: [
            { name: "Inputs", href: "/components/inputs" },
            { name: "Tables", href: "/components/tables" },
            { name: "Paginations", href: "/components/paginations" },
            { name: "Cards", href: "/components/cards" },
            { name: "Alerts", href: "/components/alerts" },
            { name: "Section Headers", href: "/components/section-headers" },
            { name: "Buttons", href: "/components/buttons" },
            { name: "Navbars", href: "/components/navbars" },
            { name: "Select Menus", href: "/components/select-menus" },
            { name: "Modals", href: "/components/modals" },
            { name: "Avatars", href: "/components/avatars" },
            { name: "Authentication", href: "/components/auth" },
            { name: "Radio Groups", href: "/components/radio-groups" },
            { name: "Context Menu", href: "/components/context-menu" },
        ],
    };

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const handler = (e) => {
            setSidebarOpen(e.matches);
        };
        mediaQuery.addListener(handler);
        handler(mediaQuery);
        return () => {
            mediaQuery.removeListener(handler);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed z-40 top-0 left-0 w-full h-full border-r bg-white space-y-8 overflow-auto sm:w-80 ${sidebarOpen ? 'block' : 'hidden'}`}>
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <Link href='/' className='flex-none'>
                            <img src="/nextblend.png" width={200} className="mx-auto" />
                        </Link>
                    </div>
                    <div className='px-4 md:px-8'>
                        <SearchBox placeholder='Search...' />
                    </div>
                </div>
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div>
                            <Title>Marketing UI</Title>
                            <SectionsList items={componentType.marketingUIComponent} />
                        </div>
                        <div>
                            <Title>Application UI</Title>
                            <SectionsList items={componentType.applicationUIComponent} />
                        </div>
                    </>
                </div>
                <button
                    className={`absolute top-4 right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg focus:outline-none sm:hidden ${!sidebarOpen ? 'block' : 'hidden'}`}
                    onClick={toggleSidebar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </nav>
            <button
                className={`hidden sm:block fixed z-50 top-4 right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg focus:outline-none ${!sidebarOpen ? 'block' : 'hidden'}`}
                onClick={toggleSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </>
    );
};

export default Sidebar;