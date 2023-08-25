'use client'
import Input from "@/components/Input";
import {extractFormData} from "@/utils/formUtils";
import {signIn, useSession} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function LoginForm ({providers, csrfToken }){
    const router = useRouter()
    const { data: session, status } = useSession()
    const [errors, setErrors] = useState([])

    if(session){
        router.push("/dashboard")
    }

    const login = async (e, providerId) => {
        e.preventDefault();

        const data = await extractFormData(e.target);
        const response =
            await signIn(providerId, { callbackUrl: "http://localhost:3000/dashboard", redirect: false }, data)

        if(response?.error){
            setErrors("Invalid credentials")
        }

        router.push("/confirmation");
    }

    return (
        <>
            <h1 className={"text-4xl text-white rounded"}>Login</h1>
            <div className={"text-red-500"}>{errors}</div>
            <form onSubmit={(e) => login(e, providers?.credentials?.id)} className={"flex flex-col"}>
                <Input type={"email"} name={"email"}  placeholder={"Email"} />
                <Input type={"password"} name={"password"} placeholder={"Password"} />
                <input name={"csrfToken"} type={"hidden"} defaultValue={csrfToken}></input>
                <button className={"bg-secondary text-white py-2 px-8 rounded-md"}>Login</button>
            </form>
        </>
    )

}