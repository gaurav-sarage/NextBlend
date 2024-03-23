import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const PricingPage = () => {
    const pricingPlans = [
        {
            title: "Basic Plan",
            description: "All the components available on the website. Choose from a plethora of components built using Tailwind CSS.",
            price: "0",
            isMostPopular: false,
            plansFeatures: [
                "A growing library of awesome components",
                "Next.js / Tailwind CSS code",
                "Serves a wide variety of audience",
                "MIT License. Personal or commerical projects.",
                "Contact over chat for support"
            ],
        },
        {
            title: "Custom Components",
            description: "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
            price: 599,
            isMostPopular: true,
            plansFeatures: [
                "One component at a time",
                "Next.js / Tailwind CSS code",
                "Design + Development",
                "Unlimited Revisions",
                "24-hour support response time",
                "Private communication channel",
                "6-8 days turnaround time",
            ],
        },
        {
            title: "Pages",
            description: "Best for early stage startups & businesses that need a marketing site and ongoing developmental work",
            price: 999,
            isMostPopular: false,
            plansFeatures: [
                "One request / page at a time",
                "Next.js / Tailwind CSS code",
                "Design + Development",
                "Unlimited Revisions",
                "CMS Integration",
                "Search Engine Optimization",
                "24-hour support response time",
                "Private communication channel",
                "10-12 days turnaround time",
                "Pause or cancel anytime",
            ],
        },
    ];

    return (
        <>
            <Navbar />
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
                    <div className="relative max-w-xl mx-auto sm:text-center">
                        <h3 className="text-black text-3xl font-semibold sm:text-4xl bg-gradient-to-r from-indigo-600 from-10% via-red-500 via-100% to-violet-600 to-100% inline-block text-transparent bg-clip-text">
                            Need custom components or websites?
                            We've got your back
                        </h3>
                        <div className="mt-3 max-w-xl">
                            <p>
                                From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
                        {
                            pricingPlans.map((item, idx) => (
                                <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPopular ? "mt-10" : ""}`}>
                                    {
                                        item.isMostPopular ? (
                                            <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-black text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        ) : ""
                                    }
                                    <div className="p-8 space-y-4 border-b">
                                        <span className="text-black font-semibold">
                                            {item.title}
                                        </span>
                                        <div className="text-black text-3xl font-semibold">
                                            ${item.price} <span className="text-xl text-black font-normal">
                                                /mo
                                            </span>
                                        </div>
                                        <p>
                                            {item.description}
                                        </p>
                                        <Link href="/stripe-checkout">
                                            <button className="px-3 py-3 mt-2 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                                                Yet to integrate payment gateway
                                            </button>
                                        </Link>
                                    </div>
                                    <ul className="p-8 space-y-3">
                                        <li className="pb-2 text-black font-medium">
                                            <p>Features</p>
                                        </li>
                                        {
                                            item.plansFeatures.map((featureItem, idx) => (
                                                <li key={idx} className="flex items-center gap-5">
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PricingPage;