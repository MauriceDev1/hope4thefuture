import { Component, For, createSignal, onMount } from "solid-js";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import Payment from "./Payment";
import { IoCheckmarkOutline, IoChevronBackOutline, IoChevronForwardOutline, IoWarningOutline } from 'solid-icons/io'
import { useDonationContext } from "../../globalContext/DonationsContext";
import { useParams } from "@solidjs/router";

const amountList:{
    id: number;
    amount: string;
    checked: boolean;
}[] = ([
    {
        id: 1,
        amount: '50',
        checked: false,
    },
    {
        id: 2,
        amount: '100',
        checked: false,
    },
    {
        id: 3,
        amount: '300',
        checked: false,
    },
    {
        id: 4,
        amount: '500',
        checked: false,
    },
    {
        id: 5,
        amount: '800',
        checked: false,
    },
    {
        id: 6,
        amount: '1000',
        checked: false,
    },
    {
        id: 7,
        amount: '2 ',
        checked: false,
    },
]);

const programPost: {
    id: number;
    image: string;
    title: string;
    text: string;
    link: string;
    raised: string;
    goal: string;
}[] = ([
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
]);

const SelectDonation: Component = () => {
    const {id} = useParams();
    const {
        setProgram,
        setAmount,
        setName,
        setSurname,
        setEmail,
        setCellphone
    } = useDonationContext()

    const [formData, setFormData] = createSignal({
        program: '',
        amount: '',
        name: '',
        surname: '',
        email: '',
        cellphone: ''
    });

    const [formDataError, setFormDataError] = createSignal({
        program: '',
        amount: '',
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        personal: ''
    });

    const [buttonSelect, setButtonSelect] = createSignal(false);

    const [buttonAmountSelect, setButtonAmountSelect] = createSignal(false);

    const [detailsCompleted, setDetailsCompleted] = createSignal(false);

    onMount(() => {
        if(id){
            const radioButton = document.getElementById(`program${id}`);
            radioButton?.click()
            const divBox = document.getElementById(`programBox${id}`);
            divBox?.classList.add("absolute");
            const iconRite = document.getElementById(`checkProgram${id}`);
            iconRite?.classList.remove("hidden");
            setButtonSelect(true);
            const programSelected = programPost.filter(p  => p.id === parseInt(id));
            setFormData((prv) => ({...prv, program: programSelected[0].title}))
        }
    })

    const options = { 
        duration: 1000,
        loop: true,
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 1, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 4, spacing: 20 },
          },
        },
    };

    const options2 = { 
        duration: 1000,
        loop: true,
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 3, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 6, spacing: 20 },
          },
        },
    };

    const handleProgram = (e: number) => {
        const radioButton = document.getElementById(`program${e}`);
        radioButton?.click()
        const divBox = document.getElementById(`programBox${e}`);
        divBox?.classList.add("absolute");
        const iconRite = document.getElementById(`checkProgram${e}`);
        iconRite?.classList.remove("hidden");
        setButtonSelect(true);
        const programSelected = programPost.filter(p  => p.id === e);
        setFormData((prv) => ({...prv, program: programSelected[0].title}))
        setFormDataError((prv) => ({...prv,program: ""}))
    }

    const handleAmount = (e: number) => {
        const radioButton = document.getElementById(`amount${e}`);
        radioButton?.click()
        const divBox = document.getElementById(`amountBox${e}`);
        divBox?.classList.add("absolute");
        const divBox2 = document.getElementById(`amountBox${e}`);
        divBox2?.classList.remove("hidden");
        const iconRite = document.getElementById(`checkAmount${e}`);
        iconRite?.classList.remove("hidden");
        const amountSelected = amountList.filter(p  => p.id === e);
        setFormData((prv) => ({...prv, amount: amountSelected[0].amount}))
        setButtonAmountSelect(true);
        setFormDataError((prv) => ({...prv,amount: ""}))
    }

    const handlePersonal = (e: any) => {
        const {name, value} = e.currentTarget;
        setFormData((prv) => ({...prv, [name]: value}));
    }

    const handlePersonalErrors = (e: any) => {
        const { name } = e.currentTarget;
        setFormDataError((prv) => ({...prv, [name]: ""}));
    }

    const handleSubmit = () => {
        const {
            program,
            amount,
            name,
            surname,
            email,
            cellphone
        } = formData();
        if(program === '' || amount === "" || name === "" || surname === "" || email === "" || cellphone === ""){
            if(program === ""){
                setFormDataError((prv) => ({...prv,program: "Please select program you would like pledge towards!"}))
            }
            if(amount === ""){
                setFormDataError((prv) => ({...prv,amount: "Please specify the amount you would like to pledge!"}))
            }
            if(name === ""){
                setFormDataError((prv) => ({...prv,name: "Please enter  your name!"}))
            }
            if(surname === ""){
                setFormDataError((prv) => ({...prv,surname: "Please enter  your surname!"}))
            }
            if(email === ""){
                setFormDataError((prv) => ({...prv,email: "Please enter  your email!"}))
            }
            if(cellphone === ""){
                setFormDataError((prv) => ({...prv,cellphone: "Please enter  your cellphone!"}))
            }
            return
        }
        setDetailsCompleted(true)
        setProgram(program);
        setAmount(amount);
        setName(name);
        setSurname(surname);
        setEmail(email);
        setCellphone(cellphone);
        var link = document.getElementById('checkout-button');
        link?.click()
    }

    return (
        <div class="w-full py-10 -z-1">
            <div class="w-10/12 m-auto">
                <div class="w-full relative">
                    <div class="w-full">
                        <h3 class="text-teal-500 pb-5">
                            Select an program 
                            {formDataError().program && 
                                <span class="text-red-500 ml-5">
                                    {formDataError().program}
                                </span>
                            }
                        </h3>
                    </div>
                    <SliderProvider>
                            <Slider options={options}>
                                <For each={programPost}>{
                                    (p) => 
                                    <div class="w-1/3 bg-stone-100 relative  rounded-sm overflow-hidden shadow-xl">
                                        <div class="bg-gray-200 h-48 shadow" style={{"background-image":`url(${p.image})`,"background-size":"cover"}}>
                        
                                        </div>
                                        <div class="w-full">
                                            <h2 class="text-center pt-3 font-semibold text-blue-900">{p.title}</h2>
                                            <div class="w-full p-3">
                                                <button 
                                                    class={buttonSelect() ? "w-full h-10 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-not-allowed" : "w-full h-10 bg-blue-500 hover:bg-blue-600 text-white rounded"}
                                                    onClick={() => handleProgram(p.id)}
                                                    disabled={buttonSelect()}
                                                >
                                                    Donate
                                                </button>
                                            </div>
                                        </div>
                                        <div id={'programBox' + p.id.toString()} class="bg-green-600 flex bg-opacity-60 text-white rounded-sm h-full w-full top-0">
                                            <IoCheckmarkOutline id={'checkProgram'+ p.id.toString()} class="text-9xl hidden rounded-full  border-4 m-auto"/>
                                            <input type="radio" class="hidden" id={'program' + p.id.toString()} name="program"/>
                                        </div>
                                    </div>
                                }</For>
                            </Slider>
                        <SliderButton prev class="w-12 absolute left-0 top-0 mt-11 h-72 flex z-10 text-5xl text-teal-600 bg-black bg-opacity-0 hover:bg-opacity-50">
                            <IoChevronBackOutline class="m-auto"/>
                        </SliderButton>
                        <SliderButton next class="w-12 absolute top-0 mt-11 z-10 right-0  h-72 flex text-5xl text-teal-600 bg-black bg-opacity-0 hover:bg-opacity-50">
                            <IoChevronForwardOutline class="m-auto"/>
                        </SliderButton>
                    </SliderProvider>
                </div>
                <div class="w-full py-10 relative">
                    <div class="w-full py-5">
                        <div class="w-full">
                            <h3 class="text-teal-500 pb-5">
                                Select an amount    
                                {formDataError().amount && 
                                    <span class="text-red-500 ml-5">
                                        {formDataError().amount}
                                    </span>
                                } 
                            </h3>
                        </div>
                        <SliderProvider>
                            <Slider options={options2}>
                                <For each={amountList}>{
                                    (a) => 
                                    <button 
                                        onClick={() => handleAmount(a.id)} 
                                        class={buttonAmountSelect() ? "w-1/3 relative text-gray-600 border border-gray-300 rounded-full py-5 text-center cursor-not-allowed" :  "w-1/3 relative text-gray-600 border border-gray-300 rounded-full py-5 text-center" }
                                        disabled={buttonAmountSelect()}
                                    >
                                        R {a.amount}
                                        
                                        <div id={'amountBox' + a.id.toString()} class="bg-green-600 flex bg-opacity-60 text-white hidden rounded-full h-full w-full top-0">
                                            <IoCheckmarkOutline id={'checkAmount'+ a.id.toString()} class="text-3xl m-auto border-2 hidden rounded-full  border-white"/>
                                            <input type="radio" class="hidden" id={'amount' + a.id.toString()} name="program"/>
                                        </div>
                                    </button>
                                }</For>
                            </Slider>
                            <SliderButton prev class="w-12 absolute left-0 top-0 mt-24 h-20 flex z-10 text-5xl text-teal-600 bg-black bg-opacity-0 hover:bg-opacity-50">
                                <IoChevronBackOutline class="m-auto"/>
                            </SliderButton>
                            <SliderButton next class="w-12 absolute top-0 mt-24 z-10 right-0  h-20 flex text-5xl text-teal-600 bg-black bg-opacity-0 hover:bg-opacity-50">
                                <IoChevronForwardOutline class="m-auto"/>
                            </SliderButton>
                        </SliderProvider>
                    </div>
                </div>
                <div class="w-full flex flex-wrap text-gray-600">
                    <div class="w-full">
                        <h3 class="text-teal-500 pb-5">Enter your details</h3>
                    </div>
                    <div class="w-full sm:w-1/4">
                        <div class="py-2">Name</div>
                        <input 
                            type="text" 
                            name="name"
                            autocomplete="name" 
                            value={formData().name}
                            onInput={handlePersonal}
                            onClick={handlePersonalErrors}
                            placeholder={formDataError().name ? formDataError().name : "Name"}
                            class={formDataError().name ? "w-11/12 pl-2 border outline-none h-9 border-red-400 bg-red-50 placeholder:text-red-500 rounded-sm" : "w-11/12 pl-2 border outline-none h-9 border-gray-300 rounded-sm"}
                        />
                    </div>
                    <div class="w-full sm:w-1/4">
                        <div class="py-2">Surname</div>
                        <input 
                            type="text" 
                            name="surname"
                            autocomplete="surname" 
                            value={formData().surname}
                            onInput={handlePersonal}
                            onClick={handlePersonalErrors}
                            placeholder={formDataError().surname ? formDataError().surname : "Surname"}
                            class={formDataError().surname ? "w-11/12 pl-2 border outline-none h-9 border-red-400 bg-red-50 placeholder:text-red-500 rounded-sm" : "w-11/12 pl-2 border outline-none h-9 border-gray-300 rounded-sm"}
                        />
                    </div>
                    <div class="w-full sm:w-1/4">
                        <div class="py-2">Email</div>
                        <input 
                            type="email" 
                            name="email"
                            autocomplete="email" 
                            value={formData().email}
                            onInput={handlePersonal}
                            onClick={handlePersonalErrors}
                            placeholder={formDataError().email ? formDataError().email : "Email"}
                            class={formDataError().email ? "w-11/12 pl-2 border outline-none h-9 border-red-400 bg-red-50 placeholder:text-red-500 rounded-sm" : "w-11/12 pl-2 border outline-none h-9 border-gray-300 rounded-sm"}
                        />
                    </div>
                    <div class="w-full sm:w-1/4">
                        <div class="py-2">Cellphone</div>
                        <input 
                            type="tel"
                            name="cellphone"
                            autocomplete="tel" 
                            value={formData().cellphone}
                            onInput={handlePersonal}
                            onClick={handlePersonalErrors}
                            placeholder={formDataError().cellphone ? formDataError().cellphone : "Cellphone"}
                            class={formDataError().cellphone ? "w-11/12 pl-2 border outline-none h-9 border-red-400 bg-red-50 placeholder:text-red-500 rounded-sm" : "w-11/12 pl-2 border outline-none h-9 border-gray-300 rounded-sm"}
                        />
                        <p id="checkout-button"></p>
                    </div>
                    <div class="relative sm:w-5/12 font-normal p-5 rounded mt-10 border-sky-400 text-sky-500 border bg-sky-100">
                        <p class="">
                            The information you provide to our organisation will be kept confidential and will not be shared with any third-party outside the organisation without your explicit consent, unless required by law or necessary for the fulfillment of our obligations to you. We take your privacy seriously and are committed to maintaining the confidentiality and security of your information.
                        </p>
                        <div class="absolute top-2 text-sky-500 flex right-2 w-10 h-10 rounded-full bg-sky-200 border-sky-400 border">
                            <IoWarningOutline class="m-auto"/>
                        </div>

                    </div>
                </div>
                <button 
                    class="bg-blue-500 hover:bg-blue-600 px-10 h-10 rounded text-white mt-10"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                {detailsCompleted() ? 
                    <Payment amount={parseInt(formData().amount)} /> 
                    : 
                    null}
            </div>
        </div>
    )
}

export default SelectDonation;