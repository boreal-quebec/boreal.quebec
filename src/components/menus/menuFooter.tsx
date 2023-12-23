import React from 'react';
import Link from "next/link";


interface MenuFooterProps {

};

const MenuFooter = ({}: MenuFooterProps) => {
    return (
        <>
            <div className={"flex flex-col text-footerNavLinks text-white"}>
                <p className={"text-footerNavTitle pb-[22px]"}>BOREAL.QUEBEC</p>
                <Link key={"/a-propos"} href={"/a-propos"}>À propos</Link>
                <Link key={"/contactez-nous"} href={"/contactez-nous"}>Contactez-nous</Link>
                <Link key={"/blog"} href={"/blog"}>Blog</Link>
                <Link key={"/faq"} href={"/faq"}>FAQ</Link>
            </div>
            <div className={"flex flex-col text-footerNavLinks text-white"}>
                <p className={"text-footerNavTitle pb-[22px]"}>RESTAURATEUR</p>
                <Link key={"/appels-offre"} href={"/appels-offre"}>Appels d’offres</Link>
                <Link key={"/avantage-membre/restaurateur"} href={"/avantage-membre/restaurateur"}>Avantages membre</Link>
                <Link key={"/restaurateur"} href={"/faq"}>Abonnement Restaurateur+</Link>
                <Link key={"/verification"} href={"/confidentialite"}>Vérification de profil</Link>
            </div>
            <div className={"flex flex-col text-footerNavLinks text-white"}>
                <p className={"text-footerNavTitle pb-[22px]"}>CLIENT</p>
                <Link key={"/appels-offre"} href={"/appels-offre"}>Appels d’offres</Link>
                <Link key={"/avantage-membre/client"} href={"/avantage-membre/client"}>Avantages membre</Link>
                <Link key={"/bottin"} href={"/faq"}>Consulter le bottin</Link>
            </div>
        </>
    );
};

export default MenuFooter;