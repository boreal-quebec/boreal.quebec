"use client"

import React, {FormEvent, FormHTMLAttributes, useState} from "react";
import {extractFormData} from "@/utils/formUtils";
import {registerNewsletter, RegisterNewsletterServerResponse} from "@/app/(public)/lib/client";
import {set} from "zod";

interface RegisterNewsletterProps extends FormHTMLAttributes<HTMLFormElement> {
    buttonColor: "beige" | "green"
}

interface ButtonVariants {

}



const SubscribeNewsletter = ({buttonColor} : RegisterNewsletterProps) => {
    const [message, setMessage] = useState("")

    const buttonVariants = {
        beige: "bg-beige text-black",
        green: "bg-primary text-white"
    }

    const subscribeToNewletter = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await extractFormData(e.target) as RegisterNewsletter
        const response = await registerNewsletter(data) as RegisterNewsletterServerResponse;

        if(response.status == 400){
            const error = await response.json()
            error.message ? setMessage(error.message) : null
        }
    }

    return (
        <form className={"flex"} onSubmit={subscribeToNewletter}>
            <input className={"pl-6 w-[200px] h-[23px] rounded-l-[8px] text-primary text-infolettreFormTextSm"} name={"email"} type={"email"} placeholder={"Adresse courriel"} />
            <button type={"submit"} className={`w-[115px] h-[23px] px-2 py-1 rounded-r-[8px] text-newsletterInput text-infolettreFormText ${buttonVariants[buttonColor]}`}>ENVOYER</button>
        </form>
    )
}

export default SubscribeNewsletter;