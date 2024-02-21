import { IoBusinessSharp, IoCallSharp, IoLogoWhatsapp, IoMailSharp } from "solid-icons/io";
import { Component } from "solid-js";

const Address:Component = () => {
    return (
        <div class="w-full flex pb-16">
            <div class="w-10/12 sm:w-8/12 m-auto flex flex-wrap">
                <div class="w-full pb-5">
                    <h3 class="text-teal-500 text-xl">Our location / contact numbers</h3>
                    <h2 class="text-5xl text-blue-900 font-semibold py-5">Where to find us</h2>
                </div>
                <div class="w-full flex flex-wrap items-center">
                    <div class="w-full sm:w-1/2 text-gray-500">
                        
                        <div class="flex items-center py-5">
                            <p class="font-semibold text-xl w-10"><IoLogoWhatsapp /></p>
                            <p>+1(702)276-6496</p>
                        </div>
                        <div class="flex items-center py-5">
                            <p class="font-semibold text-xl w-10"><IoMailSharp /></p>
                            <p>info@hopeforthefuture.org.za</p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 flex pt-5 sm:pt-0">
                        <div class="text-gray-500">
                            <p class="font-semibold text-xl w-10"><IoBusinessSharp /></p>
                        </div>
                        <a href="https://goo.gl/maps/h1oMmxeneYLQZnL26">
                            <div>
                                1st Floor
                                Heideveld Centre
                                <br></br>
                                Ascension Road
                                <br></br>
                                HEIDEVELD
                                <br></br>
                                7764
                                <br></br>
                                CAPE TOWN
                                <br></br>
                                8000
                                <br></br>
                                SOUTH AFRICA
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address;
