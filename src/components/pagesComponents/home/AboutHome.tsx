import { Component } from "solid-js";

const AboutHome:Component = () => {
    return (
        <div class="w-full flex flex-wrap sm:pt-50 pb-16 sm:pb-0">
            <div class="flex flex-wrap w-10/12 m-auto">
                <div class="w-full sm:w-1/2 py-10 px-10 mb-24">
                    <h3 class="text-teal-500 text-xl">About us</h3>
                    <h2 class="text-4xl py-8 text-blue-900 font-semibold">We are tender heart charity foundation.</h2>
                    <p class="sm:pr-10 pb-10 text-lg text-gray-600">
                    Hope for the Future is a NPO founded in 2002 by a mother desperate to understand her child’s learning disability, after he was diagnosed with ADD at the age of six (6) and then ADHD at the age of eight (8) respectively.
                    </p>
                    <a href="/about">
                        <button class="border-2 hover:bg-blue-600 border-blue-500 bg-blue-500 text-white px-16 py-3 rounded">
                            Discover More
                        </button>
                    </a>
                </div>
                <div class="w-full sm:w-1/2 flex pt-5 pb-20 sm:pb-0">
                    <div class="w-6/12 sm:w-6/12 bg-purple-300 h-[35vh] m-auto flex flex-wrap relative">
                        <div class="absolute shadow -top-28 -left-24 w-72 sm:w-80 bg-gray-300 h-80">

                        </div>
                        <div class="absolute shadow-lg -bottom-28 -right-24 w-72 sm:w-80 bg-gray-400 h-80">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHome;