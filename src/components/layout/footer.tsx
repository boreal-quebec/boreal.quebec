import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import React from "react";
import FooterImage from "../../../public/photos/Lumieres_HomePage.jpg";
import ImageBanner from "@/components/imageBanner";


export default function Footer(){

    return(
        <div className={"flex flex-col"}>
            <ImageBanner image={FooterImage} />
            <div className={"flex flex-col text-center justify-center space-y-2 p-5 items-center lg:flex-row lg:justify-evenly lg:items-center lg:p-10"}>
                <div className={"w-1/7 grow"}>
                    <h1 className={"text-2xl md:text-4xl font-semibold text-primary"}>2 326</h1>
                    <p className={"md:text-xl text-primary font-semibold"}>restaurateurs</p>
                </div>
                <div className={"h-3 w-3 rounded-full bg-primary"}></div>
                <div className={"w-1/7 grow"}>
                    <h1 className={"text-2xl md:text-4xl font-semibold text-primary"}>7 275</h1>
                    <p className={"md:text-xl text-primary font-semibold"}>clients</p>
                </div>
                <div className={"h-3 w-3 rounded-full bg-primary"}></div>
                <div className={"w-1/7 grow"}>
                    <h1 className={"text-2xl md:text-4xl font-semibold text-primary"}>8 540</h1>
                    <p className={"md:text-xl text-primary font-semibold"}>appels d’offre</p>
                </div>
                <div className={"h-3 w-3 rounded-full bg-primary"}></div>
                <div className={"w-1/7 grow"}>
                    <h1 className={"text-2xl md:text-4xl font-semibold text-primary"}>12 540</h1>
                    <p className={"md:text-xl text-primary font-semibold"}>soumissions</p>
                </div>
            </div>
            <div className={"flex justify-center bg-primary-800 p-10"}>
                <div className={"flex flex-col xs:text-center lg:text-left space-y-5 lg:flex-row w-11/12 justify-between mt-4"}>
                    <div className={"justify-self-start pr-6"}>
                        <Link href={"/"}>
                            <Image
                                src={logo}
                                height={14*4}
                                width={130*4}
                                alt={"Boreal Quebec Logo"}
                            />
                        </Link>
                    </div>
                    <div className={"flex flex-col text-white"}>
                        <p>BOREAL.QUEBEC</p>
                        <Link key={"/a-propos"} href={"/a-propos"}>À propos</Link>
                        <Link key={"/contactez-nous"} href={"/contactez-nous"}>Contactez-nous</Link>
                        <Link key={"/blog"} href={"/blog"}>Blog</Link>
                        <Link key={"/faq"} href={"/faq"}>FAQ</Link>
                        <Link key={"/confidentialite"} href={"/confidentialite"}>Politique de confidentialité</Link>
                        <Link key={"/conditions"} href={"/conditions"}>Conditions</Link>
                    </div>
                    <div className={"flex flex-col text-white"}>
                        <p>RESTAURATEUR</p>
                        <Link key={"/appels-offre"} href={"/appels-offre"}>Appels d’offres</Link>
                        <Link key={"/avantage-membre/restaurateur"} href={"/avantage-membre/restaurateur"}>Avantages membre</Link>
                        <Link key={"/devenir-membre/restaurateur"} href={"/devenir-membre/restaurateur"}>Devenir Membre Restaurateur</Link>
                        <Link key={"/restaurateur"} href={"/faq"}>Abonnement Restaurateur+</Link>
                        <Link key={"/verification"} href={"/confidentialite"}>Vérification de profil</Link>
                        <Link key={"/partenaire"} href={"/conditions"}>Rabais partenaires</Link>
                    </div>
                    <div className={"flex flex-col text-white"}>
                        <p>CLIENT</p>
                        <Link key={"/appels-offre"} href={"/appels-offre"}>Appels d’offres</Link>
                        <Link key={"/avantage-membre/client"} href={"/avantage-membre/client"}>Avantages membre</Link>
                        <Link key={"/devenir-membre/client"} href={"/devenir-membre/client"}>Devenir Membre Client</Link>
                        <Link key={"/bottin"} href={"/faq"}>Consulter le bottin</Link>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center bg-black p-2 text-sm text-white"}>
                <p>© boreal.quebec, 2023. Tous droits réservés.</p>
            </div>
        </div>
    )
}