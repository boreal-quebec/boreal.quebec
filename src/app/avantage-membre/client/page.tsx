import Header from "@/components/layout/header";
import HomePageText from "@/components/homePageText";
import React from "react";
import NavFooterBanners from "@/components/NavFooterBanners";
import RegisterButton from "@/components/registerButton";
import Image from "next/image";
import HomePageTopImage from "../../../../public/photos/Foodtruck_AvantagesClient.jpg";


export default function DevenirMembreClient(){
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"membre client"} phrase={"Gagnez du temps. Trouvez rapidement un restaurateur."}/>
            <div className={"flex flex-col md:flex-row"}>
                <div className={"flex flex-col px-14 py-10 md:px-0 md:py-0 md:w-1/2 justify-center items-center"}>
                    <div className={"flex flex-col md:w-2/3 md:mt-48"}>
                        <h1 className={"text-5xl md:text-7xl font-bold text-primary tracking-wide mb-3"}>Membre<br/>client</h1>
                        <p className={"text-5xl md:text-7xl text-secondary"}>c’est le point de départ de tous les fabuleux projets qui sont répertoriés sur boreal.quebec</p>
                    </div>
                    <div className={"flex flex-col md:w-2/3 md:pt-10 md:pb-5 justify-center"}>
                        <div className={"flex flex-col"}>
                            <HomePageText title={"Publication d’appels d’offre"} paragraph={"Publiez gratuitement des appels d’offres personnalisées,de façon illimité et sans aucun engagement."} />
                            <HomePageText title={"Centralisation des soumissions"} paragraph={"Obtenez rapidement des soumissions adaptées à votre événement et vos besoins, sans aucun frais ni intermédiaire, sur une même plateforme."} />
                            <HomePageText title={"Service fiable et professionnel"} paragraph={"Comptez sur la plateforme pour vous garantir le statut des restaurateurs  grâce à une vérification rigoureuse des membres. En savoir plus"} />
                            <HomePageText title={"Service de messagerie"} paragraph={"Profitez pleinement de la plateforme et contactez les restaurateurs+ qui vous intéressent directement via le service de messagerie."} />
                            <HomePageText title={"Système d’évaluation"} paragraph={"Consultez les avis des clients et évaluez les restaurateurs suite à votre expérience grâce à notre système d’évaluation"} />
                        </div>
                    </div>
                    <div className={"flex flex-col lg:flex-row items-stretch mb-20"}>
                        <RegisterButton link={"/register/client"} prefix={"Devenir membre"} type={"Client"} color={"secondary"} position={"end"} phrase={"Créez votre compte. C’est gratuit."} loginPhrase={""}  />
                    </div>
                </div>
                <div className={"flex w-1/2"}>
                    <div className={"flex h-full"}>
                        <Image className={"overflow-hidden object-cover"} src={HomePageTopImage} alt={""}  />
                    </div>
                </div>
            </div>
            <NavFooterBanners />
        </main>
    )
}