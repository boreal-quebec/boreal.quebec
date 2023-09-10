import RegisterButton from "@/components/registerButton";
import React from "react";


export default function PageHeader({title, phrase} : {title: string, phrase: string}){
    return (
        <div className={"flex flex-col justify-center items-center bg-beige pt-20 pb-20"}>
            <div className={"mb-12"}>
                <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
            </div>
            <h1 className={"text-primary font-medium text-center text-2xl md:text-3xl px-8"}>Bottin des restaurateurs alternatifs du Québec</h1>
            <div className={"flex flex-col lg:flex-row items-stretch mt-28"}>
                <RegisterButton type={"Client"} color={"secondary"} position={"end"} phrase={"Obtenez des soumissions de restaurateurs."} loginPhrase={"Je suis déjà membre client"}  />
                <RegisterButton type={"Restaurateur"} color={"primary"} position={"start"} phrase={"Appliquez sur des appels d’offres de clients."} loginPhrase={"Je suis déjà membre restaurateur"} />
            </div>
        </div>
    )
}