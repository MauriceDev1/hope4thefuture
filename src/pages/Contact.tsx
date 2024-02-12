import { Component } from "solid-js";
import Hero from "../components/Hero";
import ContactForm from "../components/pagesComponents/contact/ContactForm";
import Address from "../components/pagesComponents/contact/Address";
import HomeBackground from "../assets/images/home.jpg";

const Contact:Component = () => {
    return (
        <>
            <Hero image={HomeBackground}/>
            <ContactForm />
            <Address />
        </>
    )
}

export default Contact;