import Dropdown from "@/components/dropdown";
import Input from "@/components/Input";
import React from "react";
import {serviceSearchResult} from "@/data/serviceSearchResult";
import SearcResultCard from "@/components/searcResultCard";
import Image from "next/image";
import badge from '@/../public/badge.png'

export default function RechercheBottinForm(){
    const searchResults = serviceSearchResult.map((result) => (<SearcResultCard key={result.key} companyName={result.key}/>))

    return (
        <div className={"flex flex-col lg:flex-row justify-between items-stretch mt-12 grow px-5 md:px-12 sm:px-24 lg:p-0"}>
            <div className={"lg:w-1/5"}>
                <div className={"flex flex-col bg-white rounded-tl-3xl md:rounded-none rounded-tr-3xl pt-6 px-6"}>
                    <button className={"bg-secondary rounded-xl text-left p-4 text-white"}>Publier un appel d’offre</button>
                    <p className={"text-primary text-left font-medium px-8 py-4 text-lg lg:pt-4"}>Gagnez du temps. Recevez gratuitement et sans engagement des soumissions de restaurateurs selon vos critères.</p>
                </div>
                <div className={"flex flex-col items-stretch justify-stretch bg-primary p-6"}>
                    <form className={"flex flex-col items-stretch justify-stretch"}>
                        <div className={"flex items-start space-x-1.5 mb-4"}>
                            <div>
                                <input type={"checkbox"} className={"pt-1"}/>
                            </div>
                            <div className={"flex flex-col mr-4"}>
                                <span className={"text-white"}>afficher uniquement les profils <span className={"text-secondary"}>restaurateurs+<Image className={"flex"} width={15} height={15} src={badge} alt={"badge"} /></span> </span>
                                <a href={""} className={"text-white"}>qu’est-ce qu’un restaurateur+</a>
                            </div>
                        </div>
                        <Dropdown label={"type de produit"} values={["Type de produit", "Food truck", "Chefs privée", "Autre"]} name={"produit"} />
                        <Dropdown label={"type de service"} values={["Type de service", "Traiteur", "Café et patisseries", "Autre"]} name={"service"} />
                        <Input label={"région"} placeholder={"Code postal de l'évènement"} name={"region"} type="text" />
                    </form>
                </div>
                <div className={"flex flex-col bg-white rounded-bl-3xl md:rounded-none rounded-br-3xl p-6"}>
                    <button className={"bg-secondary rounded-xl text-left p-4 text-white"}>Faire partie du bottin</button>
                    <p className={"text-primary text-left font-medium px-8 py-4 text-lg lg:pt-4"}>Soyez visible. Profitez gratuitement d’une plateforme crédible afin d’être répertorié selon votre offre de service.</p>
                </div>
            </div>
            <div className={"lg:grow lg:ml-6"}>
                <div className="grid gap-4 2xl:grid-cols-3 md:grid-cols-2 mt-6 lg:mt-0">
                    {searchResults}
                </div>
            </div>
        </div>
    )
}