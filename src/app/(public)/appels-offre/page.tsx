"use client"
import Dropdown from "@/components/dropdown/dropdown";
import React, {useState} from "react";
import AppelOffreCard from "@/components/cards/appelOffre";
import Header from "@/components/layout/header";
import PageTemplate from "@/components/layout/pageTemplate";
import {BigButton} from "@/components/buttons/bigButton";
import PageLeftColumn from "@/components/layout/pageLeftColumn";
import SearchResults from "@/components/forms/searchResults";
import AppelOffreModal from "@/components/modals/appelOffreModal";


export default function AppelOffer() {

    return (<div></div>)
/*
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
            prefix={"PUBLIER UN"}
            type={"APPEL D’OFFRE"}
            phrase={"Gagnez du temps.\nRecevez gratuitement et sans engagement des soumissions de restaurateurs."}
            position={"left"}
            color={"secondary"}
            link={"/a-propos"}
            cutLeft={true}
        />
    )

    const becomeMemberButton = (
        <BigButton
            prefix={"Devenir membre"}
            type={"RESTAURATEUR+"}
            phrase={"Trouvez des clients.\nEnvoyez des soumissions et obtenez des contrats\n sans intermédiaire ni commission."}
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
                        <h2 className={"text-3xl text-secondary border-b-secondary border-b-2 text-center pb-3 mb-10"}>Recherche</h2>
                        <form className={"flex flex-col items-stretch justify-stretch"}>
                            <Dropdown values={["Type(s) de produit", "Food truck", "Chefs privée", "Autre"]} name={"produit"} />
                            <Dropdown values={["Type(s) de service", "Traiteur", "Café et patisseries", "Autre"]} name={"service"} />
                            <Dropdown values={["Budget", "0$-3000$", "3000$-5000$", "5000$-10000$", "Autre"]} name={"region"} />
                            <Dropdown values={["Région(s)", "Traiteur", "Café et patisseries", "Autre"]} name={"region"} />
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
    )*/
}