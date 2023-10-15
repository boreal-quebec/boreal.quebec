import Dropdown from "@/components/dropdown";
import Input from "@/components/Input";
import React from "react";
import {serviceSearchResult} from "@/data/serviceSearchResult";
import SearcResultCard from "@/components/searcResultCard";
import Image from "next/image";
import badge from '@/../public/badge.png'
import {BigButton} from "@/components/bigButton";

export default function RechercheBottinForm(){


    return (
        <div className={"flex flex-col items-stretch justify-stretch bg-beige p-16"}>
            <h2 className={"text-3xl text-secondary border-b-secondary border-b-2 text-center pb-3"}>Recherche</h2>
            <form className={"flex flex-col items-stretch justify-stretch"}>
                <div className={"flex p-4"}>
                    <div className={"flex flex-col justify-center text-primary"}>
                        <div>Afficher les profils vérifiés</div>
                        <div><a href={"/a-propos"} className={"text-xs text-gray-500"}>Qu'est-ce qu'un profil vérifié?</a></div>
                    </div>
                    <div>
                        non
                    </div>
                </div>
                <Dropdown values={["Type(s) de produit", "Food truck", "Chefs privée", "Autre"]} name={"produit"} />
                <Dropdown values={["Type(s) de service", "Traiteur", "Café et patisseries", "Autre"]} name={"service"} />
                <Dropdown values={["Région(s)", "Traiteur", "Café et patisseries", "Autre"]} name={"region"} />
                <a href={"/a-propos"} className={"text-sm text-primary underline pl-4"}>Préciser la recherche</a>
                <button type={"submit"} className={"bg-primary rounded-2xl p-4 text-2xl tracking-widest text-white mt-4"}>Rechercher</button>
            </form>
        </div>
    )
}