import Link from "next/link"

const Banner = () => {
    return (
        <div className="bg-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
                <p className="font-medium">
                    NextBlend is still under development! Stay tuned
                    <Link
                        href="/"
                        className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center xs:items-center gap-x-1"
                    >
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Banner;