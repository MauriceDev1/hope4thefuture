import { Component } from "solid-js";
import Hero from "../components/Hero";
import ProgramHome from "../components/pagesComponents/home/ProgramHome";
import AboutHome from "../components/pagesComponents/home/AboutHome";
import ProgramsHome from "../components/pagesComponents/home/ProgramsHome";
import HelpHome from "../components/pagesComponents/home/HelpHome";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <ProgramHome />
            <AboutHome />
            <ProgramsHome />
            <HelpHome />
        </>
    )
}

export default Home;