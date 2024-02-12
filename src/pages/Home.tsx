import { Component } from "solid-js";
import Hero from "../components/Hero";
import ProgramHome from "../components/pagesComponents/home/ProgramHome";
import AboutHome from "../components/pagesComponents/home/AboutHome";
import ProgramsHome from "../components/pagesComponents/home/ProgramsHome";
import HelpHome from "../components/pagesComponents/home/HelpHome";
import HomeBackground from "../assets/images/home.jpg";

const Home:Component = () => {
    return (
        <>
            <Hero image={HomeBackground}/>
            <ProgramHome />
            <AboutHome />
            <ProgramsHome />
            <HelpHome />
        </>
    )
}

export default Home;