"use client"

import React, {FormEvent, useState} from "react";
import {extractFormData} from "@/utils/formUtils";
import {registerNewsletter, RegisterNewsletterServerResponse} from "@/app/(public)/lib/client";
import {set} from "zod";


const SubscribeNewsletter = () => {
    const [message, setMessage] = useState("")

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
        <form className={"flex p-2"} onSubmit={subscribeToNewletter}>
            <input className={"px-5 py-3 rounded-l-5xl md:grow"} name={"email"} type={"email"} placeholder={"Adresse courriel"} />
            <button type={"submit"} className={"px-5 py-3 bg-primary rounded-r-5xl text-white"}>Envoyer</button>
        </form>
    )
}

export default SubscribeNewsletter;