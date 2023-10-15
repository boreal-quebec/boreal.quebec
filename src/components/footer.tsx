import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import React from "react";
import HomePageTopImage from "../../public/StockHomePageTop.png";


export default function Footer(){

    return(
        <div>
            <div className={"flex"}>
                <Image className={"w-full h-full"} src={HomePageTopImage} alt={""}  />
            </div>
            <div className={"flex justify-center bg-primary-800 p-10"}>
                <div className={"flex w-11/12 justify-between mt-4"}>
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
                        <Link key={"/avantages-membre"} href={"/avantages-membre"}>Avantages membre</Link>
                        <Link key={"/devenir-membre/restaurateur"} href={"/devenir-membre/restaurateur"}>Devenir Membre Restaurateur</Link>
                        <Link key={"/restaurateur"} href={"/faq"}>Abonnement Restaurateur+</Link>
                        <Link key={"/verification"} href={"/confidentialite"}>Vérification de profil</Link>
                        <Link key={"/partenaire"} href={"/conditions"}>Rabais partenaires</Link>
                    </div>
                    <div className={"flex flex-col text-white"}>
                        <p>CLIENT</p>
                        <Link key={"/appels-offre"} href={"/appels-offre"}>Appels d’offres</Link>
                        <Link key={"/avantages-membre"} href={"/avantages-membre"}>Avantages membre</Link>
                        <Link key={"/devenir-membre/client"} href={"/devenir-membre/client"}>Devenir Membre Client</Link>
                        <Link key={"/bottin"} href={"/faq"}>Consulter le bottin</Link>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center bg-black p-2    text-white"}>
                <p>© boreal.quebec, 2023. Tous droits réservés.</p>
            </div>
        </div>
    )
}