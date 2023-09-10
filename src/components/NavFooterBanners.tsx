import React from "react";
import Link from "next/link";


export default function NavFooterBanners(){
    return(
        <div className={"flex flex-col 2xl:flex-row 2xl:h-screen"}>
            <div className={`flex flex-col justify-between bg-beige px-0 md:px-24 xl:px-0`}>
                <h2 className={`text-4xl sm:text-5xl text-primary pt-12 pb-6 2xl:py-24 px-6`}>explorer le <Link href={"/bottin"}><span className={`text-white`}>bottin</span></Link> des restauteurs alternatifs</h2>
                <div className={"flex items-start justify-start"}>
                    <p className={"px-6 pb-6 text-xl text-primary "}>Explorez le large répertoire de restaurateurs alternartifs québecois, et trouvez le service qu’il vous faut sur boreal.quebec</p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-secondary px-0 md:px-24 xl:px-0`}>
                <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>découvrir les bonnes raisons de devenir <Link href={"/devenir-membre/client"}><span className={`text-white`}>membre client</span></Link></h2>
                <div>
                    <p className={"px-6 pb-6 text-xl text-white"}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre client sur boreal.quebec</p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-primary px-0 md:px-24 xl:px-0`}>
                <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>découvrir les bonnes raisons de devenir <Link href={"/devenir-membre/restaurateur"}><span className={`text-white`}>membre restaurateur</span></Link></h2>
                <div>
                    <p className={"px-6 pb-6 text-xl text-white"}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre restaurateur sur boreal.quebec</p>
                </div>
            </div>
            <div className={`flex flex-col justify-between bg-secondary-800 px-0 md:px-24 xl:px-0`}>
                <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>prendre connaissance des <Link href={"/fonctionnement"}><span className={`text-white`}>engagements</span></Link> de la plateforme</h2>
                <div>
                    <p className={"px-6 pb-6 text-xl text-white"}>Prenez connaissance des engagements et du service de la plateforme boreal.quebec</p>
                </div>
            </div>
        </div>
    )
}