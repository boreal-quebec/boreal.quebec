import Dropdown from "@/components/dropdown";
import Input from "@/components/Input";
import React from "react";
import {serviceSearchResult} from "@/data/serviceSearchResult";
import SearcResultCard from "@/components/searcResultCard";
import Image from "next/image";
import badge from '@/../public/badge.png'
import {BigButton} from "@/components/bigButton";

export default function RechercheBottinForm(){
    const searchResults = serviceSearchResult.map((result) => (<SearcResultCard key={result.key} companyName={result.key}/>))

    return (
        <div className={"flex flex-col lg:flex-row justify-between items-stretch mt-12 grow px-5 md:px-12 sm:px-24 lg:p-0"}>
            <div className={"flex flex-col lg:w-1/4"}>
                <BigButton
                    prefix={"PUBLIER UN\nAPPEL D’OFFRE"}
                    phrase={"Gagnez du temps.\nRecevez gratuitement et sans engagement des soumissions de restaurateurs."}
                    position={"left"}
                    color={"secondary"}
                    link={"/a-propos"}
                    cutLeft={true}
                />
                <div className={"py-2"}></div>
                <BigButton
                    prefix={"FIGURER SUR LE\nBOTTIN"}
                    phrase={"Soyez visible.\nProfitez gratuitement d’une plateforme crédible afin d’être répertorié."}
                    position={"left"}
                    color={"primary"}
                    link={"/a-propos"}
                    cutLeft={true}
                />
                <div className={"py-8"}></div>
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
            </div>
            <div className={"lg:grow lg:ml-6"}>
                <div className="grid gap-4 2xl:grid-cols-3 md:grid-cols-2 mt-6 lg:mt-0">
                    {searchResults}
                </div>
            </div>
        </div>
    )
}