import { Component, createSignal } from "solid-js";
import Logo from "../../assets/images/download.jpeg"
import { CgMenuLeft } from 'solid-icons/cg'
import { useNavigate } from "@solidjs/router";

const Nav:Component = () => {

    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false);
    const navigate = useNavigate();

    const handleMobileLink = (e:any) => {
        navigate(`/${e}`)
        setToggleMobileMenu(false);
    }

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
        <>
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
                    <CgMenuLeft class="text-3xl" onClick={() => setToggleMobileMenu(!toggleMobileMenu())}/>
                </div>
            </div>    
        </nav>
        <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen bg-purple-400 flex overflow-hidden duration-300 ease-in-out z-50 top-0 right-0 2xl:hidden`}>
            <div class="w-10/12 relative mx-auto text-white">
                <ul class="">
                    <button
                        onClick={() => handleMobileLink('home')}
                        class="w-full"
                    >
                        <li class="w-full py-4 border-b">Home</li>
                    </button>
                    <button
                        onClick={() => handleMobileLink('about')}
                        class="w-full"
                    >
                        <li class="w-full py-4 border-b">About us</li>
                    </button>
                    <button
                        onClick={() => handleMobileLink('services')}
                        class="w-full"
                    >
                        <li class="w-full py-4 border-b">Services</li>
                    </button>
                    <button
                        onClick={() => handleMobileLink('contact')}
                        class="w-full"
                    >
                        <li class="w-full py-4">Contact us</li>
                    </button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav;