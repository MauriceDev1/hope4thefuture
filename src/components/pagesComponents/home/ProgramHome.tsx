import { Component } from "solid-js";
import { BsBalloonHeartFill } from "solid-icons/bs";

const ProgramHome:Component = () => {
    return (
        <div class="w-full py-16 flex">
            <div class="w-11/12 sm:w-10/12 py-5 flex flex-wrap m-auto">
                <div class="w-full sm:w-1/2 px-5 sm:px-5">
                    <div class="bg-red-300 h-64 xl:h-[55.5vh] shadow-lg rounded-sm" style={{'background-image': 'url(https://images.pexels.com/photos/5699775/pexels-photo-5699775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', "background-size":"cover"}}>

                    </div>
                </div>
                <div class="w-full sm:w-1/2 px-8">
                    <h3 class="text-teal-500 pt-2 text-xl">Upcoming</h3>
                    <h2 class="text-4xl py-5 text-blue-900 font-semibold capitalize">gender based violance</h2>
                    <p class="sm:pr-20 pb-10 text-lg text-gray-600">
                        Gender Based Violence. The Cape flats is rife with domestic violence, rape, child neglect and abuse. Psycho-social support is where the focus should be shifted to. Something that is near and dear to Vanessa’s heart.
                    </p>
                    <div class="flex">
                        <a href="/donation">
                            <button class="border-2 items-center flex border-blue-500 bg-blue-500 hover:bg-blue-600 rounded text-white px-11 sm:px-14 py-3">
                                <BsBalloonHeartFill class="mr-2"/>Donate Now
                            </button>
                        </a>
                        <a href="/programs">
                            <button class="border-2 border-blue-500 px-11 sm:px-16 ml-5 py-3 text-blue-500 movement rounded">
                                View Program
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramHome;