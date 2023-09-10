import Header from "@/components/header";
import HomePageText from "@/components/homePageText";
import React from "react";
import NavFooterBanners from "@/components/NavFooterBanners";
import RegisterButton from "@/components/registerButton";


export default function DevenirMembreRestaurateur(){
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"membre restaurateur"} phrase={"Soyez visibles. Trouvez de nouveaux clients."}/>
            <div className={"flex flex-col md:flex-row"}>
                <div className={"flex flex-col bg-white px-14 py-10 md:px-0 md:py-0 md:w-1/2 items-center"}>
                    <div className={"flex flex-col md:w-2/3 md:pt-24 md:pb-5 justify-center"}>
                        <p className={"text-secondary-pale text-2xl"}>Plus besoin de vous essouffler pour vous faire connaître: cette plateforme est votre vitrine.</p>
                        <p className={"text-secondary-800 text-2xl"}>Bienvenue sur boreal.quebec</p>
                        <div className={"flex flex-col md:mt-5"}>
                            <HomePageText title={"Visibilité crédible"} paragraph={"Figurez gratuitement sur le bottin des restaurateurs alternatifs du Québec et profitez de la vitrine numérique la plus crédible pour faire connaitre votre entreprise!"} />
                            <HomePageText title={"Consultation des appels d’offres"} paragraph={"Restez à l’affût des projets en cours dans votre secteur d’activités et consultez le tableau des appels d’offres."} />
                            <HomePageText title={"Communauté"} paragraph={"Faites partie intégrante de la communauté boreal.québec et participez au rayonnement de la cuisine alternative."} />
                        </div>
                    </div>
                    <div className={"flex text-white md:self-start md:w-5/6 bg-primary text-3xl p-10 px-40"}>
                        <p>Optez pour un abonnement <span className={"text-secondary"}>restaurateur+</span> pour plus de fonctionnalités.</p>
                    </div>
                    <div className={"flex flex-col md:w-2/3 pb-5 pt-5 justify-center"}>
                        <div className={"flex flex-col md:mt-5"}>
                            <HomePageText title={"Envoie de soumissions"} paragraph={"Appliquez sur les appels d’offres et envoyez des soumissions pour les projets qui vous intéresse, sans aucun intermédiraire et de façon illimité."} />
                            <HomePageText title={"Aucune commission"} paragraph={"Aucune commission ni redevance n’est demandé sur les contrats conclu via cette plateforme. 100% de l’entente vous appartient."} />
                            <HomePageText title={"Service fiable et professionnel"} paragraph={"Demandez un statut de restaurateur vérifié et gagnez la confiance des clients. En savoir plus"} />
                            <HomePageText title={"Service de messagerie"} paragraph={"Profitez pleinement de la plateforme, discutez directement avec vos clients et faites du résautage via le service de messagerie."} />
                            <HomePageText title={"Rabais partenaire"} paragraph={"Bénéficiez de nombreux rabais auprès de nos partenaires. En savoir plus."} />
                            <HomePageText title={"Notifications"} paragraph={"Programmez des alertes par courriel lorsqe les appels d’offres correspondent au profil de votre entreprise."} />
                        </div>
                    </div>
                    <div className={"flex flex-col lg:flex-row items-stretch"}>
                        <RegisterButton link={"/register/restaurateur"} prefix={"Devenir membre"} type={"Restaurateur"} color={"primary"} position={"start"} phrase={"Créez votre compte. C’est gratuit."} loginPhrase={""} />
                    </div>
                </div>
                <div className={"flex bg-secondary md:px-14 py-10 md:px-0 md:py-0 md:w-1/2 justify-center"}>
                    <div className={"flex flex-col w-2/3 md:mt-48"}>
                        <h1 className={"text-5xl md:text-7xl text-white"}>le restaurateur</h1>
                        <p className={"text-5xl md:text-7xl text-primary"}>c’est le point de mire de tous les clients qui sont membre de la plateforme boreal.quebec</p>
                    </div>
                </div>
            </div>
            <NavFooterBanners />
        </main>
    )
}