import { Component } from "solid-js";
import CEO from "../../../assets/images/vanessa.jpeg" 

const MainAbout:Component = () => {
    return (
        <div class="w-full flex justify-center py-16">
            <div class="w-10/12 sm:w-9/12 flex flex-wrap sm:px-4">
                <div class="w-full sm:w-2/3">
                    <h3 class="text-teal-500 text-xl">About us</h3>
                    <h2 class="text-4xl pb-5 pt-5 text-gray-700 font-semibold">We are tender heart organisation</h2>
                    <p class="sm:pr-20 text-lg text-gray-600">
                    Hope for the Future is a <span class="font-bold">NPO</span> founded in 2002 by a mother desperate to understand her child’s learning disability, after he was diagnosed with <span class="font-bold">ADD</span> at the age of six (6) and then <span class="font-bold">ADHD</span> at the age of eight (8) respectively. All of this was very foreign to her ,as she tried to understand and accept the challenges. She educated herself to effectively assist her child and was open to not just learn how to assist him but to also support parents who were going through the same challenges hence the birth of Hope for the Future. 
                    <br></br><br></br>
                    The other component which fueled the birth of <span class="font-bold">HOPE FOR THE FUTURE</span>, as she suffered <span class="font-bold">GENDER BASED VIOLENCE</span> from her husband. In 2002 she became vocal and supported women whether it was talking, encouraging, protection orders and even assisted with divorce applications without even realizing that she was a <span class="font-bold">GBV</span> activist.
                    </p>
                </div>
                <div class="w-full sm:w-1/3 pb-10 sm:pb-0 sm:py-0">
                    <img src={CEO} class="rounded-sm shadow-xl sm:my-16" alt="Image of CEO" />
                </div>
            </div>
        </div>
    )
}

export default MainAbout;
