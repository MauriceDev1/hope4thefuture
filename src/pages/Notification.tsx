import { Component, onMount } from "solid-js";
import { IoCheckmarkOutline } from "solid-icons/io";
import { useNavigate } from "@solidjs/router";
import { useDonationContext } from "../globalContext/DonationsContext";
import axios from "axios";
import HomeBackground from "../assets/images/home.jpg";
import Hero from "../components/Hero";

const Notification: Component = () => {
    const {
        program,
        amount,
        name,
        surname,
        email,
        cellphone
    } = useDonationContext();
    const navigate = useNavigate();
    onMount(() => {
        axios.post('https://us-central1-vanessa-7e09c.cloudfunctions.net/api/payment_notification', {
            program: program(),
            amount: amount(),
            name: name(),
            surname: surname(),
            email: email(),
            cellphone: cellphone()
            })
            .then(function (response) {
            console.log(response);
            if(response.status === 200){
                setTimeout(() => {
                    navigate('/')
                }, 7000);
            } else {
                alert("try again! something went wrong!")
            }
            })
            .catch(function (error) {
            console.log(error);
        });
    })

    return (
        <>
            <Hero image={HomeBackground}/>
            <div class="w-full py-10 flex">
                <div class="w-11/12 sm:w-8/12 lg:w-5/12 m-auto bg-green-100 border border-green-400 p-5 rounded-sm shadow-lg">
                    <h3 class="text-center text-3xl font-semibold text-green-600">
                        Payment successfully recieved!
                    </h3>
                    <div class="text-green-600 py-10">
                        <IoCheckmarkOutline class="text-7xl m-auto rounded-full border-4 border-green-600"/>
                    </div>
                    <p class="text-center text-green-500 px-10">
                        We at <span class="font-semibold text-green-700">Hope To The Future</span> would like to thank you 
                        for your generous contribution, It is your contributions that help us to continue our programs. 
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notification;