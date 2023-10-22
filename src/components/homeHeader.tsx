import Header from "@/components/layout/header";
import RegisterButton from "@/components/registerButton";
import React from "react";

export default function HomeHeader({title, phrase}){
    return (
        <div className={"flex flex-col justify-center items-center bg-primary-800 pt-20 pb-20"}>
            <Header title={title} phrase={phrase} />
            <div className={"flex flex-col lg:flex-row items-stretch mt-4 space-x-20"}>
                <RegisterButton link={"/devenir-membre/client"} prefix={"Je suis"} type={"Client"} color={"secondary"} position={"left"} phrase={"Obtenez des soumissions de restaurateurs."} loginPhrase={"Je suis déjà membre client"}  />
                <RegisterButton link={"/devenir-membre/restaurateur"} prefix={"Je suis"} type={"Restaurateur"} color={"primary"} position={"left"} phrase={"Appliquez sur des appels d’offres de clients."} loginPhrase={"Je suis déjà membre restaurateur"} />
            </div>
        </div>
    )
}