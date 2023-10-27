import Dropdown from "@/components/dropdown";
import React from "react";

export default function RechercheBottinForm(){


    return (
        <div className={"flex flex-col items-stretch justify-stretch bg-beige p-16"}>
            <h2 className={"text-3xl text-secondary border-b-secondary border-b-2 text-center pb-3 mb-5"}>Recherche</h2>
            <form className={"flex flex-col items-stretch justify-stretch"}>
                <div className={"flex p-4 mb-5"}>
                    <div className={"flex flex-col justify-center text-primary"}>
                        <div>Afficher les profils vérifiés</div>
                        <div><a href={"/a-propos"} className={"text-xs text-gray-500"}>Qu&lsquo;est-ce qu&lsquo;un profil vérifié?</a></div>
                    </div>
                </div>
                <Dropdown values={["Type(s) de produit", "Food truck", "Chefs privée", "Autre"]} name={"produit"} />
                <Dropdown values={["Type(s) de service", "Traiteur", "Café et patisseries", "Autre"]} name={"service"} />
                <Dropdown values={["Région(s)", "Traiteur", "Café et patisseries", "Autre"]} name={"region"} />
                <a href={"/a-propos"} className={"text-sm text-primary underline pl-4"}>Préciser la recherche</a>
                <button type={"submit"} className={"bg-primary rounded-2xl p-4 text-2xl tracking-widest text-white mt-10"}>Rechercher</button>
            </form>
        </div>
    )
}