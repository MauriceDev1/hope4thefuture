import { Component } from "solid-js";
import Hero from "../components/Hero";
import ContactForm from "../components/pagesComponents/contact/ContactForm";
import Address from "../components/pagesComponents/contact/Address";

const Contact:Component = () => {
    return (
        <>
            <Hero />
            <ContactForm />
            <Address />
        </>
    )
}

export default Contact;