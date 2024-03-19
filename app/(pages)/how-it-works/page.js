import Navbar from "@/app/components/Navbar";

const HowitWorksPage = () => {
    return (
        <>
            <Navbar />
            <section class="py-5 bg-white sm:py-12 lg:py-20">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                        <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-900 hover:text-indigo-600">NextBlend simplifies the process of creating stylish and responsive websites with its seamless integration of Next.js and Tailwind CSS. Here's how it works:

</p>
                    </div>

                    <div class="relative mt-12 lg:mt-20">
                        <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                        </div>

                        <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Simply Copy & Paste</h3>
                                <p class="mt-4 text-base text-gray-900 hover:text-indigo-600">NextBlend allows you to effortlessly integrate pre-designed components into your project with a simple copy-and-paste approach.</p>
                            </div>

                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <svg class="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Easy to Customize</h3>
                                <p class="mt-4 text-base text-gray-900 hover:text-indigo-600">Tailwind CSS powers NextBlend, offering easy customization through its extensive utility classes, giving you full control over design elements.</p>
                            </div>

                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <svg class="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Made with TailwindCSS</h3>
                                <p class="mt-4 text-base text-gray-900 hover:text-indigo-600">NextBlend leverages Tailwind CSS, ensuring sleek designs and streamlined development with its utility-first approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};

export default HowitWorksPage;