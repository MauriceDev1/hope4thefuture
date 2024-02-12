import { Component, For } from "solid-js";
import Hero from "../components/Hero";
import HomeBackground from "../assets/images/home.jpg";

const Programs:Component = () => {

    const ProgramPosts = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/5723194/pexels-photo-5723194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gender Based Violence",
            text: "Our Gender-Based Violence program is committed to ending violence against women and children and providing support for survivors.",
            link: "/donation",
            raised: "10000",
            goal: "4000000"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Children With Learning Disabilities",
            text: "Our Children with Learning Disabilities and Support for Parents program is dedicated to providing resources and support for families facing learning challenges.",
            link: "/donation",
            raised: "5000",
            goal: "30000"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/7213361/pexels-photo-7213361.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Youth Development",
            text: "Our Youth Development and Upskilling program is committed to empowering young people with the skills and resources they need to succeed.",
            link: "/donation",
            raised: "20000",
            goal: "80000"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/10252682/pexels-photo-10252682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Beyond The Blaze",
            text: "Beyond the Blaze is dedicated to helping victims of fires by providing necessary household goods and support during their time of need.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1547226706-af7e2c20bcea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            title: "Back To School Adopt A Child",
            text: "BACK 2 SCHOOL is committed to providing school uniforms, stationary, and other resources to support children in their education journey.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/196648/pexels-photo-196648.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Holiday Programs",
            text: "Our Holiday Programs provide public holiday events for the community to enjoy and come together to celebrate.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Pensioner Market",
            text: "Our Pensioners Market is committed to giving back to the elderly community by providing fresh vegetables and food supplies.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        },
        {
            id: 8,
            image: "https://images.pexels.com/photos/7114755/pexels-photo-7114755.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Flourish",
            text: "FLOURISH is dedicated to addressing teen pregnancy by providing support, education, and resources to young parents in need.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1639696318296-2079d8a9216b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Feeding Scheme",
            text: "Our Feeding Scheme provides food to the communities of Heideveld and Bonteheuwel through our dedicated kitchens and volunteers.",
            link: "/donation",
            raised: "1000",
            goal: "80000"
        }
    ];

    return (
        <>
            <Hero image={HomeBackground}/>
            
        <div class="w-full py-10 flex">
            <div class="w-11/12 sm:w-10/12 m-auto sm:px-4 flex flex-wrap">
                <div class="pl-3 w-full">
                    <h3 class="text-teal-500 text-xl">Our Programs</h3>
                    <h2 class="text-4xl text-blue-900 font-semibold py-5">We run various programs</h2>
                </div>
                <For each={ProgramPosts}>{
                    (p) => 
                    <div class="sm:w-1/3 h-[73vh] p-3">
                        <div class="w-full bg-stone-100 h-full relative rounded-sm overflow-hidden">
                            <div class="w-full bg-gray-300 h-60 shadow-lg" style={{"background-image":`url(${p.image})`,"background-size":"cover"}}></div>
                            <div class="w-full">
                            <h2 class="text-center pt-5 pb-3 text-xl font-semibold text-blue-900">{p.title}</h2>
                            <p class="px-4">{p.text}</p>
                            <div class="absolute w-full flex bottom-0 border-t py-1">
                                <div class="w-full p-2">
                                    <a href={p.link + '/' + p.id}>
                                        <button class="w-full py-3 text-white flex items-center justify-center hover:bg-blue-600 bg-blue-500 rounded">
                                        Donate
                                        </button>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                }</For>
            </div>
        </div>
        </>
    )
}

export default Programs;