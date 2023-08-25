import RegisterClientForm from "@/components/forms/registerClient";

export default function RegisterClient() {


    return (
        <main className={"flex flex-col justify-center items-center pt-20"}>
            <div className={"flex flex-col w-1/4 bg-primary px-8 py-4 rounded-lg mt-12 items-stretch shadow-2xl shadow-gray-800"}>
                <h1 className={"text-4xl text-white"}>Register Client</h1>
                <RegisterClientForm />
            </div>
        </main>
    )
}