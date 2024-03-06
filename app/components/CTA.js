import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Make your ideas come to life <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">with no time</span>
                    </h2>
                    <p className="mt-3 text-black text-lg">
                        Copy and paste our ready to use components into your apps, and save time!
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <Link href="/components" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                        Get Started
                    </Link>
                    <Link href="/" className="block py-2 px-4 text-gray-700 hover:text-white font-medium duration-150 hover:bg-black active:bg-gray-100 border rounded-lg">
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;