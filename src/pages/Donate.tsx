import { Component } from "solid-js"
import SelectDonation from "../components/donation/SelectDonation";
import Hero from "../components/Hero";

const Donate:Component = () => {
    return (
        <>
            <Hero />
            <SelectDonation />
        </>
    )
}

export default Donate;