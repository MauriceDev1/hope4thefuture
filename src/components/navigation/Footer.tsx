import { Component, For } from "solid-js";
import Logo from "../../assets/images/download.jpeg"
import { BsFacebook, BsInstagram, BsTwitter } from "solid-icons/bs";

const Footer:Component = () => {

    const HomeLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Who Are We',
            link: '/who_are_we'
        },
        {
            id: 3,
            name: 'Programs',
            link: '/programs'
        },
        {
            id: 4,
            name: 'About',
            link: '/about'
        },
        {
            id: 5,
            name: 'Contact',
            link: '/contact'
        },
    ]
    
    const MoreLinks = [
        {
            id: 1,
            name: 'Afilliation',
            link: '/affiliation'
        },
        // {
        //     id: 2,
        //     name: 'Blog',
        //     link: '/blog'
        // },
        {
            id: 3,
            name: 'Become A Members',
            link: '/become_a_member'
        },
        {
            id: 4,
            name: 'Careers',
            link: '/careers'
        },
        {
            id: 4,
            name: 'Recruiter',
            link: '/recruiter'
        },
    ]
    
    const SocialLinks = [
        {
            id: 1,
            icon: <BsFacebook />,
            link: '/blog'
        },
        {
            id: 2,
            icon: <BsTwitter />,
            link: '/careers'
        },
        {
            id: 3,
            icon: <BsInstagram />,
            link: '/afiliation'
        },
    ]
    return (
        <footer class="w-full bg-purple-300 relative pt-10 pb-16">
            <div class="w-10/12 m-auto py-5 flex flex-wrap text-sm">
                <div class="w-full sm:w-1/4 flex flex-wrap justify-center">
                    <img src={Logo} class="w-28 h-28" alt="Hope for the future logo" />
                    <div class="w-full flex justify-center mt-5 sm:-mt-5">
                        <p class="text-xs">2021/763936/08</p>
                    </div>
                </div>
                <div class="w-1/2 sm:w-1/4 pt-10 sm:pt-0">
                    <h3 class="font-bold pb-3">Organization</h3>
                    <ul>
                        <For each={HomeLinks}>{
                            (h) => <a href={h.link}><li class="py-1">{h.name}</li></a>
                        }</For>
                    </ul>
                </div>
                <div class="w-1/2 sm:w-1/4 pt-10 sm:pt-0">
                    <h3 class="font-bold pb-3">More</h3>
                    <ul>
                        <For each={MoreLinks}>{
                            (m) => <a href={m.link}><li class="py-1">{m.name}</li></a>
                        }</For>
                    </ul>
                </div>
                <div class="w-full sm:w-1/4 pt-10 sm:pt-0">
                    <h3 class="font-bold pb-3">Social Media</h3>
                    <ul class="flex gap-14">
                        <For each={SocialLinks}>{
                            (s) => <a href={s.link} target="_blank"><li class="py-1 text-xl text-gray-600">{s.icon}</li></a>
                        }</For>
                    </ul>
                    <h3 class="font-bold py-3">App</h3>
                    <p class="text-teal-500 font-semibold">Coming soon...</p>
                </div>
            </div>
            <div class="absolute w-full bottom-0 bg-purple-400 py-3">
                <div class="w-9/12 m-auto flex justify-between text-xs">
                    <div class="text-white">
                        Hope For The Future &copy; 2023
                    </div>
                    <div class="text-white">
                        Powered by Mo & Co (PTY) Ltd.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;