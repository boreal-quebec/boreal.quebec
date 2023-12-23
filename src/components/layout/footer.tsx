import React from "react";

import Link from "next/link";
import Image from "next/image";

import {SocialIcon} from "react-social-icons";

import logo from "@/../public/icons/picto_BOREAL_QUEBEC_LOGO_FOOTER.svg";
import FooterImage from "@/../public/photos/Lumieres_HomePage.jpg";
import LinkedInLogo from "@/../public/icons/linkedinLogo.svg"
import FacebookLogo from "@/../public/icons/facebookLogo.svg"

import ImageBanner from "@/components/imageBanner";
import SiteStat from "@/components/siteStat";
import MenuFooter from "@/components/menus/menuFooter";
import SubscribeNewsletter from "@/components/forms/subscribeNewsletter";


export default function Footer(){

    const stats = [
        {
            count: 2326,
            text: "restaurateurs"
        },
        {
            count: 7275,
            text: "clients"
        },
        {
            count: 8540,
            text: "appels d’offre"
        },
        {
            count: 12540,
            text: "soumissions"
        },
    ]

    //This should be moved to a layout component that show a specified component in between children
    const statsRendered =  stats.map((stat, index) =>{
        if(index != stats.length - 1){
            return (
                <>
                    <SiteStat key={stat.text} count={stat.count} text={stat.text} />
                    <div className={"h-[6px] w-[6px] md:h-[10px] md:w-[10px] lg:h-[11px] lg:w-[11px] rounded-full bg-primary"}></div>
                </>
            )
        }
        return (
            <>
                <SiteStat key={stat.text} count={stat.count} text={stat.text} />
            </>
        )
    })

    return(
        <div className={"flex flex-col"}>
            <ImageBanner image={FooterImage} />
            <div className={"flex flex-col md:flex-row w-4/12 md:w-full xl:w-8/12 self-center items-center justify-center md:justify-around lg:justify-around space-y-[25px] md:space-y-[0px] py-[37px] md:py-[43px]"}>
                {statsRendered}
            </div>
            <div className={"flex justify-center bg-primary-800 py-10"}>
                <div className={"flex flex-col w-8/12 xs:text-center lg:text-left lg:flex-row items-start justify-between mt-4"}>
                    <div className={"flex flex-col"}>
                        <Link href={"/"}>
                            <Image
                                src={logo}
                                height={48}
                                objectFit={"cover"}
                                alt={"Boreal Quebec Logo"}
                            />
                        </Link>
                        <div>
                            <h3 className={"text-footerSocialLinkTitle text-beige pb-[8px] mt-[50px]"}>Suivez-vous!</h3>
                            <div className={"flex space-x-[7px]"}>
                                <Link target={"_blank"} href={"https://www.linkedin.com/"}><Image width={20} height={20} src={LinkedInLogo} alt={"linkedin"} /></Link>
                                <Link target={"_blank"} href={"https://www.facebook.com/"}><Image width={20} height={20} src={FacebookLogo} alt={"facebook"} /></Link>
                            </div>
                            <div className={"mt-[30px]"}>
                                <h3 className={"text-beige font-bold text-footerInfolettreTitle pb-[10px]"}>Ne manquvez rien!</h3>
                                <p className={"text-beige text-footerInfolettreSubtitle pb-[15px]"}>Inscrivez-vous à l’infolettre</p>
                                <SubscribeNewsletter buttonColor={"beige"}/>
                            </div>
                        </div>
                    </div>
                    <MenuFooter />
                </div>
            </div>
            <div className={"flex justify-center bg-black p-2 text-footerCopyright text-white space-x-[30px] text-copyrightFooterText"}>
                <Link href={"/politique-confidentialite"} >Politique de confidentialité</Link>
                <Link href={"/conditions-generale"} >Conditions générales</Link>
                <p>© boreal.quebec, 2023. Tous droits réservés.</p>
            </div>
        </div>
    )
}