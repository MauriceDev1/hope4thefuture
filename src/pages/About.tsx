import { Component } from "solid-js";
import Hero from "../components/Hero";
import MainAbout from "../components/pagesComponents/about/MainAbout";

const About:Component = () => {
    return (
        <>
            <Hero />
            <MainAbout />
        </>
    )
}

export default About;