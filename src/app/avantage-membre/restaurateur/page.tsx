import Header from "@/components/layout/header";
import HomePageText from "@/components/homePageText";
import React from "react";
import NavFooterBanners from "@/components/NavFooterBanners";
import RegisterButton from "@/components/registerButton";
import Image from "next/image";
import HomePageTopImage from "../../../../public/photos/Barmaid_AvantagesRestaurateur.jpg";
import FooterImage from "../../../../public/photos/Tacos_AvantagesRestaurateur.jpg";


export default function DevenirMembreRestaurateur(){
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"Membre Restaurateur"} phrase={"Soyez visibles. Trouvez de nouveaux clients."}/>
            <div className={"flex flex-col md:flex-row"}>
                <div className={"flex w-1/2"}>
                    <div className={"flex h-full"}>
                        <Image className={"overflow-hidden object-cover"} src={HomePageTopImage} alt={""}  />
                    </div>
                </div>
                <div className={"flex flex-col px-14 py-10 md:px-0 md:py-0 md:w-1/2 justify-center items-center"}>
                    <div className={"flex flex-col md:w-2/3 md:mt-48"}>
                        <h1 className={"text-5xl md:text-7xl font-bold text-primary tracking-wide mb-3"}>Membre<br/>restaurateur</h1>
                        <p className={"text-5xl md:text-7xl text-secondary"}>c’est le point de mire de tous les membres clients de la plateforme boreal.quebec</p>
                    </div>
                    <div className={"flex flex-col md:w-2/3 md:pt-10 md:pb-5 justify-center"}>
                        <div className={"flex flex-col space-y-10 mb-20"}>
                            <HomePageText title={"Visibilité crédible"} paragraph={"Figurez gratuitement sur le bottin des restaurateurs alternatifs du Québec et profitez d’un vitrine numérique crédible pour faire connaitre votre entreprise!"} />
                            <HomePageText title={"Consultation des appels d’offres"} paragraph={"Restez à l’affût des projets en cours dans votre secteur d’activités et consultez le tableau des appels d’offres."} />
                            <HomePageText title={"Communauté"} paragraph={"Faites partie intégrante de la communauté boreal.québec et participez au rayonnement de la cuisine alternative."} />
                        </div>
                    </div>
                    <div className={"flex flex-col lg:flex-row items-stretch mb-20"}>
                        <RegisterButton link={"/register/restaurateur"} prefix={"Devenir membre"} type={"Restaurateur"} color={"primary"} position={"end"} phrase={"Créez votre compte. C’est gratuit."} loginPhrase={""}  />
                    </div>
                </div>
            </div>
            <div className={"flex flex-col md:flex-row bg-primary-800"}>
                <div className={"flex flex-col px-14 py-10 md:px-0 md:py-0 md:w-1/2 items-center"}>
                    <div className={"flex flex-col md:w-2/3 md:mt-48"}>
                        <h1 className={"text-5xl md:text-7xl font-bold text-secondary tracking-wide mb-3"}> Abonnement<br/>Restaurateur+</h1>
                        <p className={"text-5xl md:text-7xl text-white"}>Optez pour les avantages de l’abonnement Restaurateur+ et profitez du plein potentiel de la plateforme dès maintenant.</p>
                        <div className={"flex flex-col lg:flex-row  my-20"}>
                            <RegisterButton link={"/register/restaurateur"} prefix={"Devenir membre"} type={"Restaurateur +"} color={"secondary"} position={"end"} phrase={"Créez votre compte. C’est gratuit."} loginPhrase={""}  />
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col px-14 py-10 md:px-0 md:py-0 md:w-1/2 justify-center items-center"}>
                    <div className={"flex flex-col md:w-2/3 md:mt-48"}>
                        <div className={"flex flex-col space-y-10 m-20"}>
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Envoie de soumissions"} paragraph={"Appliquez sur les appels d’offres et envoyez des soumissions pour les contrats qui vous intéressent, sans aucun intermédiraire et de façon illimité."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Aucune commission"} paragraph={"Aucune commission n’est demandé sur les contrats conclu via cette plateforme. 100% de l’entente vous appartient."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Statut professionnel"} paragraph={"Demandez un statut de restaurateur vérifié et gagnez la confiance des clients. En savoir plus."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Service de messagerie"} paragraph={"Profitez pleinement de la plateforme, discutez directement avec vos clients et faites du résautage via le service de messagerie."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Rabais partenaire"} paragraph={"Bénéficiez de nombreux rabais auprès de nos partenaires. En savoir plus."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Notifications"} paragraph={"Programmez des alertes par courriel lorsqe les appels d’offres correspondent au profil de votre entreprise."} />
                            <HomePageText textColor={"white"} titleColor={"white"} title={"Système d’évaluation"} paragraph={"Évaluez votre expérience mutuelle avec le client à la suite d’un service grâce à notre système d’évaluation."} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex w-full h-96"}>
                <Image className={"overflow-hidden object-cover"} src={FooterImage} alt={""}  />
            </div>
            <NavFooterBanners />
        </main>
    )
}