"use client"

import React, {useContext} from "react";
import Link from "next/link";
import {LaunchContext} from "@/components/providers";

export default function NavFooterBanners(){

    let openLaunchModal = useContext(LaunchContext);

    const style = {
        collumnPadding: "px-5 xl:px-12 2xl:px-24",
        titleFont: "text-4xl sm:text-5xl xl:text-3xl 2xl:text-6xl font-bold tracking-widest",
        textFont: "text-xl 2xl:text-2xl font-medium"
    }

    return(
        <div className={"flex flex-col xl:flex-row xl:h-screen"}>
            <div className={`flex flex-col justify-between bg-beige ${style.collumnPadding}`}>
                <h2 className={`${style.titleFont} text-primary pt-12 pb-6 2xl:py-24`}>Explorer le <Link href={"/bottin"} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}}><span className={`text-secondary`}>bottin</span></Link> de la restauration alternative</h2>
                <div className={"flex items-start justify-start"}>
                    <p className={`pb-6 ${style.textFont} text-primary `}>Explorez le large répertoire de restaurateurs alternartifs québecois, et trouvez le service qu’il vous faut sur <span className={"font-bold text-3xl"}>boreal.quebec</span></p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-secondary ${style.collumnPadding}`}>
                <h2 className={`${style.titleFont} text-white-pale pt-12 pb-6 2xl:py-24`}>Découvrir les bonnes raisons de devenir <Link href={"/avantage-membre/client"}><span className={`text-white`}>membre client</span></Link></h2>
                <div>
                    <p className={`pb-6 ${style.textFont} text-white`}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre client sur  <span className={"font-bold text-3xl"}>boreal.quebec</span></p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-primary ${style.collumnPadding}`}>
                <h2 className={`${style.titleFont} text-white-pale pt-12 pb-6 2xl:py-24`}>Découvrir les bonnes raisons de devenir <Link href={"/avantage-membre/restaurateur"}><span className={`text-white`}>membre restaurateur</span></Link></h2>
                <div>
                    <p className={`pb-6 ${style.textFont} text-white`}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre restaurateur sur  <span className={"font-bold text-3xl"}>boreal.quebec</span></p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-secondary-800 ${style.collumnPadding}`}>
                <h2 className={`${style.titleFont} text-white-pale pt-12 pb-6 2xl:py-24`}>Prendre connaissance des <Link href={"/a-propos"}><span className={`text-white`}>engagements</span></Link> de la plateforme</h2>
                <div>
                    <p className={`pb-6 ${style.textFont} text-white`}>Prenez connaissance des engagements et du service de la plateforme  <span className={"font-bold text-3xl"}>boreal.quebec</span></p>
                </div>
            </div>
        </div>
    )
}