import { Component } from "solid-js";

interface HeroProps {
    image: string
}

const Hero:Component<HeroProps> = ({image}) => {
    return(
        <div class="hidden md:flex h-96 w-full bg-gray-100" style={{"background-image":`url(${image})`, "background-size":'cover'}}>

        </div>
    )
}

export default Hero;