import Header, {HeaderProps} from "@/components/layout/header";
import RegisterButton from "@/components/buttons/registerButton";
import React from "react";

import HomePageIcons from "@/../public/icons/homePageIcons.svg"
import Image from "next/image";
import Section from "@/components/layout/Section";

//This should be change so that the header can be composed and the header can be used as a template with children

export default function HomeHeader({title, phrase} : HeaderProps){

    const style = {
        contentPadding: "" +
            "md:pt-5 md:pb-5",
    }

    return (
        <div className={`flex flex-col sm:items-center bg-primary-800`}>
            <Section>
                <Header title={title} phrase={phrase} />
                <Image className={"md:w-8/12 mb-[25px] md:mb-[45px] self-center"} src={HomePageIcons} alt={"icons"} />
                <div className={"flex flex-col md:flex-row md:justify-between lg:justify-around mb-[35px] md:mb-[65px] lg:mb-[112px] space-y-[17px] md:space-y-[0px]"}>
                    <RegisterButton link={"/avantage-membre/client"} prefix={"Je suis"} type={"CLIENT"} color={"secondary"} position={"left"} phrase={"Obtenez des soumissions de restaurateurs."} />
                    <RegisterButton link={"/avantage-membre/restaurateur"} prefix={"Je suis"} type={"RESTAURATEUR"} color={"primary"} position={"left"} phrase={"Appliquez sur des appels d’offres de clients."} />
                </div>
            </Section>
        </div>
    )
}