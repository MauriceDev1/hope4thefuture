import { Component } from "solid-js";
import Hero from "../components/Hero";
import TeamSection from "../components/pagesComponents/whoAReWe/TeamSection";
import HomeBackground from "../assets/images/home.jpg";

const WhoAreWe:Component = () => {
    return (
        <>
            <Hero image={HomeBackground}/>
            <TeamSection />
        </>
    )
}

export default WhoAreWe;