"use client"
import Dropdown from "@/components/dropdown";
import React, {useState} from "react";
import AppelOffreCard from "@/components/cards/appelOffre";
import Header from "@/components/header";
import PageTemplate from "@/components/pageTemplate";
import {BigButton} from "@/components/bigButton";
import PageLeftColumn from "@/components/layout/pageLeftColumn";
import SearchResults from "@/components/forms/searchResults";
import AppelOffreModal from "@/components/modals/appelOffreModal";


export default function AppelOffer() {
    const [showAppelOffreModal, setShowAppelOffreModal] = useState(false)
    const [appelOffreId, setAppelOffreId] = useState("")

    const offres = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    const onAppelOffreClicked = (id: string) => {
        setAppelOffreId(id)
        setShowAppelOffreModal(true)
    }

    const onCloseAppelOffreClicked = () => {
        setAppelOffreId("")
        setShowAppelOffreModal(false)
    }

    const cardSpacing = "space-y-5";
    const appelOffreCards = offres.map((o) => <AppelOffreCard onClick={onAppelOffreClicked}/>)

    const publishButton = (
        <BigButton
            prefix={"PUBLIER UN\nAPPEL D’OFFRE"}
            phrase={"Gagnez du temps.\nRecevez gratuitement et sans engagement des soumissions de restaurateurs."}
            position={"left"}
            color={"secondary"}
            link={"/a-propos"}
            cutLeft={true}
        />
    )

    const becomeMemberButton = (
        <BigButton
            prefix={"FIGURER SUR LE\nBOTTIN"}
            phrase={"Soyez visible.\nProfitez gratuitement d’une plateforme crédible afin d’être répertorié."}
            position={"left"}
            color={"primary"}
            link={"/a-propos"}
            cutLeft={true}
        />
    )

    return (
        <PageTemplate title={"Appels d’offres"} phrase={"Profitez de la plus importante plateforme québecoise d’appels d’offres pour des services de restauration alternative"}>
            {showAppelOffreModal ? <AppelOffreModal onClickClose={onCloseAppelOffreClicked} /> : null}
            <div className={"flex flex-row"}>
                <PageLeftColumn bigButtons={[publishButton, becomeMemberButton]}>
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
                </PageLeftColumn>
                <div className={"lg:grow lg:ml-6"}>
                    <SearchResults>
                        <div className={`${cardSpacing}`}>
                            {appelOffreCards}
                        </div>
                    </SearchResults>
                </div>
            </div>
        </PageTemplate>
    )

    return (
        <main className={"flex min-h-screen flex-col bg-beige"}>
            <Header title={"Appels d’offres"} phrase={"Profitez de la plus importante plateforme québecoise d’appels d’offres pour des services de restauration alternative"}/>

        </main>
    )
}