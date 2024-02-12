import { Component, createSignal } from "solid-js";
import axios from "axios";

const ContactForm:Component = () => {
    const [loading, setLoading] = createSignal(false);
    const [formData, setFormData] = createSignal({
        name: "",
        surname: "",
        cellphone: "",
        email: "",
        subject: "Select",
        message: ""
    });

    const [formDataError, setFormDataError] = createSignal({
        name: "",
        surname: "",
        cellphone: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleFormData = (e: any) => {
        const {name, value} = e.currentTarget;
        setFormData((prv) =>({...prv,[name]:value}));
    } 

    const handleFormErrors = (e: any) => {
        const {name} = e.currentTarget;
        setFormDataError((prv) => ({...prv,[name]: ""}))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const {
            name,
            surname,
            cellphone,
            email,
            subject,
            message
        } = formData();
        if(name === "" || surname === "" || cellphone === "" || email === "" || subject === "Select" || message === ""){
            if(name === "") {
                setFormDataError((prv) => ({...prv, name: "Name value is required!"}))
            }
            if(surname === "") {
                setFormDataError((prv) => ({...prv, surname: "Surname value is required!"}))
            }
            if(cellphone === "") {
                setFormDataError((prv) => ({...prv, cellphone: "Cellphone value is required!"}))
            }
            if(email === "") {
                setFormDataError((prv) => ({...prv, email: "Email value is required!"}))
            }
            if(subject === "Select") {
                setFormDataError((prv) => ({...prv, subject: "Select"}))
            }
            if(message === "") {
                setFormDataError((prv) => ({...prv, message: "Message value is required!"}))
            }
            return
        }
        // alert(JSON.stringify(formData()))
        setLoading(true);
        axios.post('https://us-central1-hopeforthefuture-19d04.cloudfunctions.net/api/contact', {
            name,
            surname,
            cellphone,
            email,
            subject,
            message
            })
            .then(function (response) {
            console.log(response);
            if(response.status === 200){
                setLoading(false);
                setFormData({
                    name: "",
                    surname: "",
                    cellphone: "",
                    email: "",
                    subject: "Select",
                    message: ""
                })
                alert("message sent successfully")
            } else {
                alert("try again! something went wrong!")
            }
            setLoading(false);
            })
            .catch(function (error) {
            console.log(error);
            setLoading(false);
        });
    }

    return (
        <div class="w-full flex py-10">
            <form class="w-10/12 sm:w-8/12 m-auto flex flex-wrap" onSubmit={handleSubmit}>
                <div class="w-full pb-5">
                    <h3 class="text-teal-500 text-xl">Contact us</h3>
                    <h2 class="text-4xl text-blue-900 font-semibold pt-5">Get in touch with us</h2>
                </div>
                <div class="w-full sm:w-1/2 sm:pr-5">
                    <div class="py-2">
                        Name
                    </div>
                    <input 
                        name="name"
                        type="text" 
                        placeholder={formDataError().name ? formDataError().name : "Name"}
                        class={formDataError().name ? "w-full py-2 border-red-400 bg-red-50 placeholder:text-red-500 outline-none pl-2 border rounded-sm" : "w-full py-2 outline-none pl-2 border rounded-sm border-gray-300"}
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().name}
                        autocomplete="name"
                    />
                </div>
                <div class="w-full sm:w-1/2">
                    <div class="py-2">
                        Surname
                    </div>
                    <input 
                        name="surname"
                        type="text" 
                        placeholder={formDataError().surname ? formDataError().surname : "Surname"}
                        class={formDataError().surname ? "w-full py-2 border-red-400 bg-red-50 placeholder:text-red-500 outline-none pl-2 border rounded-sm" : "w-full py-2 outline-none pl-2 border rounded-sm border-gray-300"}
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().surname}
                        autocomplete="surname"
                    />
                </div>
                <div class="w-full sm:w-1/2 sm:pr-5">
                    <div class="py-2">
                        Cellphone
                    </div>
                    <input 
                        name="cellphone"
                        type="tel" 
                        placeholder={formDataError().cellphone ? formDataError().cellphone : "Cellphone"}
                        class={formDataError().cellphone ? "w-full py-2 border-red-400 bg-red-50 placeholder:text-red-500 outline-none pl-2 border rounded-sm" : "w-full py-2 outline-none pl-2 border rounded-sm border-gray-300"}
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().cellphone}
                        autocomplete="tel"
                    />
                </div>
                <div class="w-full sm:w-1/2">
                    <div class="py-2">
                        Email
                    </div>
                    <input 
                        name="email"
                        type="email" 
                        placeholder={formDataError().email ? formDataError().email : "Email"}
                        class={formDataError().email ? "w-full py-2 border-red-400 bg-red-50 placeholder:text-red-500 outline-none pl-2 border rounded-sm" : "w-full py-2 outline-none pl-2 border rounded-sm border-gray-300"}
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().email}
                        autocomplete="email"
                    />
                </div>
                <div class="w-full">
                    <div class="py-2">
                        Subject
                    </div>
                    <select 
                        name="subject" 
                        class={formDataError().subject ? "w-full py-2 text-red-500 border-red-400 bg-red-50 placeholder:text-red-500 outline-none pl-1 border rounded-sm" : "w-full py-2 outline-none pl-1 text-gray-500 border rounded-sm border-gray-300"}
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().subject}
                    >
                        <option>Select</option>
                        <option>More Info</option>
                        <option>Complaint</option>
                        <option>Other Donations</option>
                        <option>Testimonial</option>
                    </select>
                </div>
                <div class="w-full">
                    <div class="py-2">
                        Message
                    </div>
                    <textarea
                        name="message" 
                        placeholder={formDataError().message ? formDataError().message : "Message"}
                        class={formDataError().message ? "w-full border border-red-400 bg-red-50 placeholder:text-red-500 h-36 p-2 outline-none resize-none rounded-sm" : "w-full border h-36 p-2 outline-none resize-none rounded-sm border-gray-300"} 
                        onInput={handleFormData}
                        onClick={handleFormErrors}
                        value={formData().message}
                    />
                </div>
                <div class="w-full">
                    <button class="bg-blue-500 mt-5 rounded hover:bg-blue-600 text-white w-full h-10">
                        {loading() ? <div class="loader m-auto"></div> : "Submit" } 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;