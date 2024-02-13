import { Component } from "solid-js";
import BOy from "../../../assets/images/boy.jpg"

const HelpHome:Component = () => {
    return (
        <div class="w-full flex flex-wrap sm:py-16">
            <div class="flex flex-wrap w-10/12 sm:w-10/12 m-auto py-16 sm:py-0">
                <div class="w-full sm:w-1/2 flex">
                    <div class="w-full sm:w-9/12 bg-gray-200 h-[45vh] sm:h-[60vh] mx-auto shadow-xl overflow-hidden" style={{"background-image":`url(${BOy})`,"background-size":"cover"}}>
                        
                    </div>
                </div>
                <div class="w-full sm:w-1/2 pt-5">
                    <h3 class="text-teal-500 text-xl">Helping Today</h3>
                    <h2 class="text-4xl py-10 text-blue-900 font-semibold">What we are doing</h2>
                    <p class="sm:pr-40 pb-10 text-lg text-gray-600">
                    Hope for the Future is a NPO founded in 2002 by a mother desperate to understand her child’s learning disability, after he was diagnosed with ADD at the age of six (6) and then ADHD at the age of eight (8) respectively.
                    </p>
                    <a href="/become_a_member">
                        <button class="border-2 border-blue-500 text-blue-500 font-semibold px-16 py-3 rounded movement">
                            Join Us Today
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HelpHome;