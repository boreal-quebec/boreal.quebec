import PageTemplate from "@/components/pageTemplate";
import RegisterButton from "@/components/registerButton";
import React from "react";

import pageTextData from "@/data/aProposPageText";
import HomePageText from "@/components/homePageText";
import Image from "next/image";
import HomePageTopImage from "../../../public/StockHomePageTop.png";
import NavFooterBanners from "@/components/NavFooterBanners";



export default function Fonctionnement() {


    const homePageTexts = pageTextData.map((text) => <HomePageText key={text.title} title={text.title} paragraph={text.paragraph} />)


    return (
        <>
            <div className={"flex justify-around bg-primary-800"}>
               <div className={"flex w-4/5 py-20 pr-20"}>
                   <div className={""}>
                       <div className={"h-10 w-10 rounded-full bg-secondary"}></div>
                   </div>
                   <div className={"mt-5 mx-3 border-t-2 border-t-white-pale grow h-full"}>
                   </div>
                   <div className={"w-1/4 tracking-widest leading-tight"}>
                       <h1 className={"font-bold text-5xl text-primary mb-3"}>À propos de <br/>boreal.quebec</h1>
                       <p className={"text-white-pale text-xl"}>
                           Cette plateforme québecoise a été réfléchie dans le but de devenir le plus important site web d’offres et de demandes pour des services de restauration alternative dans tout le Québec. <br/><br/>Avec une approche simple, efficace et transparente, boreal.quebec assure à ses membres une expérience incomparable.
                       </p>
                   </div>
               </div>
            </div>
            <div className={"flex justify-around bg-primary-800\""}>
                <div className={"flex w-4/5"}>
                    <div className={"flex flex-col py-20"}>
                        <h1 className={"font-bold text-5xl text-primary mb-3"}>Nos<br/>Engagements</h1>
                        <div className={"lg:grid lg:grid-cols-2 p-6 xl:p-0 lg:grid-rows-2 xl:w-1/2 lg:gap-x-6 lg:justify-center lg:items-center"}>
                            {homePageTexts}
                        </div>
                    </div>
                </div>
            </div>
            <NavFooterBanners />
        </>
    )
}