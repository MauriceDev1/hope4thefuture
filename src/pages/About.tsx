import { Component } from "solid-js";
import Hero from "../components/Hero";
import MainAbout from "../components/pagesComponents/about/MainAbout";
import HomeBackground from "../assets/images/home.jpg";

const About:Component = () => {
    return (
        <>
            <Hero image={HomeBackground}/>
            <MainAbout />
        </>
    )
}

export default About;