import Header, {HeaderProps} from "@/components/layout/header";
import RegisterButton from "@/components/registerButton";
import React from "react";


export default function HomeHeader({title, phrase} : HeaderProps){

    const style = {
        contentPadding: "md:pt-20 md:pb-20",
    }

    return (
        <div className={`bg-primary-800`}>
            <div className={`flex flex-col justify-center items-center ${style.contentPadding}`}>
                <Header title={title} phrase={phrase} />
                <div className={"flex flex-col p-2 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-20"}>
                    <RegisterButton link={"/avantage-membre/client"} prefix={"Je suis"} type={"Client"} color={"secondary"} position={"left"} phrase={"Obtenez des soumissions de restaurateurs."} />
                    <RegisterButton link={"/avantage-membre/restaurateur"} prefix={"Je suis"} type={"Restaurateur"} color={"primary"} position={"left"} phrase={"Appliquez sur des appels d’offres de clients."} />
                </div>
            </div>
        </div>
    )
}