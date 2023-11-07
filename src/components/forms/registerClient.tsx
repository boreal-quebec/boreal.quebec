"use client"

import Input from "@/components/forms/Input";
import Button from "@/components/menus/button";
import {useRouter} from "next/navigation";
import {extractFormData} from "@/utils/formUtils";
import {registerClient} from "@/app/(public)/lib/client";
import {FormEvent} from "react";


export default function RegisterClientForm() {
    const router = useRouter()
    const register = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await extractFormData(e.target) as CreateClientUserData;

        const response = await registerClient(data);

        if(response){
            router.push("/confirmation");
        }
    }

    return (
        <form className={"flex flex-col space-y-3"} onSubmit={register}>
            <Input name={"firstname"} placeholder={"firstname"} type={"text"} />
            <Input name={"lastname"} placeholder={"lastname"} type={"text"} />
            <Input name={"email"} placeholder={"email"} type={"email"} />
            <Input name={"password"} placeholder={"password"} type={"password"} />
            <Input name={"repassword"} placeholder={"repassword"} type={"password"} />
            <Button className={"self-center"} text={"Créer le compte"} submit={true}/>
        </form>
    )
}