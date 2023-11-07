import PageTemplate from "@/components/layout/pageTemplate";
import RegisterButton from "@/components/buttons/registerButton";
import React from "react";
import VerticalStepper from "@/components/verticalStepper";
import Image from "next/image";
import HomePageTopImage from "../../../../public/StockHomePageTop.png";



export default function Fonctionnement() {

    return (
        <PageTemplate title={"Fonctionnement"} phrase={"Simple. Rapide. Efficace."} paddingTop={false}>
            <div className={"flex"}>
                <div className={"flex flex-col items-center py-20 w-1/2"}>
                    <div className={"flex flex-col space-y-7 w-2/3"}>
                        <h1 className={"text-secondary font-extrabold text-7xl tracking-widest"}>Étapes client</h1>
                        <div className={"text-primary text-6xl tracking-wide leading-tight"}>
                            Votre temps est précieux. Inscrivez-vous à boreal.quebec, obtenez des soumissions et trouver un restaurateur de rêve pour votre événement.
                        </div>
                        <div className={"flex justify-start"}>
                            <RegisterButton link={"/devenir-membre/client"} prefix={"Devenir membre"} type={"Client"} color={"secondary"} position={"left"} phrase={"Créez votre compte. C’est gratuit."} />
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col items-center bg-beige w-1/2"}>
                    <div className={"w-1/2 py-20"}>
                        <VerticalStepper circleColor={"primary"} circleFontColor={"beige"}>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Créer un compte</h2>
                                <p className={"text-primary"}>Créez votre compte Membre Client.<br/>C’est gratuit, simple et très rapide.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Publier un appel d’offre</h2>
                                <p className={" text-primary"}>Complétez gratuitement un court formulaire d’appel d’offre en précisant les paramètres de votre recherche.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Recevoir des soumissions</h2>
                                <p className={" text-primary"}>Recevez et consultez gratuitement les soumissions de Membre Restaurateurs+ intéressés par votre appel d’offre.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Comparer et sélectionner</h2>
                                <p className={" text-primary"}>Comparer et sélectionnez la soumission qui vous convient. Rien de vous oblige faire une sélection si aucune ne concorde avec vos critères.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Prise de contact</h2>
                                <p className={" text-primary"}>Une fois la soumission acceptée, contactez le restaurateur directement. Aucun engagement. Aucun frais.</p>
                            </div>
                            <div className={"flex flex-col break-words"}>
                                <h2 className={"text-primary text-xl font-semibold"}>Entente de service</h2>
                                <p className={" text-primary"}>Discutez avec le restaurateur des termes de l’entente de service qui sera offert. Aucun intermédiaire.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"flex text-primary text-xl font-semibold"}>Évaluation</h2>
                                <p className={" text-primary"}>Évaluez le service que vous avez reçu du restaurateur via le tableau de bord de votre espace membre.</p>
                            </div>
                        </VerticalStepper>
                    </div>
                </div>
            </div>
            <div className={"flex"}>
                <Image className={"w-full h-full"} src={HomePageTopImage} alt={""}  />
            </div>
            <div className={"flex"}>
                <div className={"flex flex-col items-center bg-primary w-1/2"}>
                    <div className={"w-1/2 py-20"}>
                        <VerticalStepper circleColor={"beige"} circleFontColor={"primary"}>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Créer un compte</h2>
                                <p className={" text-beige"}>Créez votre compte Membre Restaurateur. C’est gratuit, simple et très rapide.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Figurer sur le bottin</h2>
                                <p className={" text-beige"}>Complétez gratuitement un court formulaire d’appel d’offre en précisant les paramètres de votre recherche.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Abonnement Restaurateur+</h2>
                                <p className={" text-beige"}>Optez pour un abonnement Restaurateur+ et profitez d’une bonification des fonctionnalités de la plateforme</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Soumissionner</h2>
                                <p className={" text-beige"}>Consultez les appels d’offre des Membres Clients et soumissionnez sur autant de contrats que vous voulez.vv</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Obtenir des contrats</h2>
                                <p className={" text-beige"}>Soyez contacté directement par le client lorsqu’une de vos soumission est acceptée. Aucun engagement. Aucune commission.</p>
                            </div>
                            <div className={"flex flex-col break-words"}>
                                <h2 className={"text-beige text-xl font-semibold"}>Entente de service</h2>
                                <p className={" text-beige"}>Discutez avec le client des termes de l’entente de service qui sera offert. Aucun intermédiaire.</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h2 className={"flex text-beige text-xl font-semibold"}>Évaluation</h2>
                                <p className={" text-beige"}>Évaluez l’expérience que vous avez eu avec le client via le tableau de bord de votre espace membre.</p>
                            </div>
                        </VerticalStepper>
                    </div>
                </div>
                <div className={"flex flex-col items-center py-20 w-1/2"}>
                    <div className={"flex flex-col space-y-7 w-2/3"}>
                        <h1 className={"text-primary font-extrabold text-7xl tracking-widest"}>Étapes restaurateur</h1>
                        <div className={"text-secondary text-6xl tracking-wide leading-tight"}>
                            Votre savoir-faire mérite d’être connu. Inscrivez-vous à boreal.quebec, soyez visibles et trouver des nouveaux clients.
                        </div>
                        <div className={"flex justify-start"}>
                            <RegisterButton link={"/devenir-membre/restaurateur"} prefix={"Devenir membre"} type={"RESTAURATEUR"} color={"primary"} position={"left"} phrase={"Créez votre compte. C’est gratuit."} />
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}