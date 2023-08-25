import {getProviders, getCsrfToken} from "next-auth/react";
import LoginForm from "@/app/login/loginForm";


export default async function Login({ params }: { params: { type: string } }) {

    const providers = await getProviders();
    const csrfToken = await getCsrfToken();

    return (
        <main className={"flex min-h-screen flex-col justify-center items-center"}>
            <div className={"shadow-gray-800 space-y-6 shadow-2xl  px-16 py-12 bg-primary rounded-xl"}>
                <LoginForm providers={providers} csrfToken={csrfToken} />
            </div>
        </main>
    )
}
