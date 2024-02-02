import { Component } from "solid-js";
import Logo from "../../assets/images/download.jpeg"
import { CgMenuLeft } from 'solid-icons/cg'

const Nav:Component = () => {
    const Links = [
        {
            id:1,
            text: 'About',
            link: '/about',
        },
        {
            id:2,
            text: 'Programs',
            link: '/programs',
        },
        {
            id:3,
            text: 'Who Are We',
            link: '/who_are_we',
        },
        {
            id:4,
            text: 'Contact',
            link: '/contact',
        },
    ]

    const Buttons = [
        {
            id:1,
            text: 'Donate',
            link: '/donate'
        }
    ]
    return (
        <nav class="sticky top-0 bg-white py-1 shadow-sm z-50">
            <div class="w-11/12 md:w-10/12 m-auto flex justify-between items-center">
                <div>
                    <a href="/">
                        <img 
                            src={Logo} 
                            class="h-14"
                            alt="hope for the future logo" 
                        />
                    </a>
                </div>
                <div>
                    <ul class="hidden md:flex gap-16">
                        {Links.map((l) => (
                            <a href={l.link}>
                                <li>
                                    {l.text}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul class="hidden md:flex gap-16">
                        {Buttons.map((b) => (
                            <button class="w-24 bg-black text-white h-9 rounded">
                                {b.text}
                            </button>
                        ))}
                    </ul>
                </div>
                <div class="md:hidden">
                    <CgMenuLeft class="text-3xl"/>
                </div>
            </div>    
        </nav>
    )
}

export default Nav;