import { Component } from "solid-js"
import SelectDonation from "../components/donation/SelectDonation";
import Hero from "../components/Hero";
import HomeBackground from "../assets/images/home.jpg";

const Donate:Component = () => {
    return (
        <>
            <Hero image={HomeBackground}/>
            <SelectDonation />
        </>
    )
}

export default Donate;