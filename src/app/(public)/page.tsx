"use client"
import React, {useContext} from "react";

import homePageTextData from "@/data/homePageText"
import HomePageText from "@/components/homePageText";
import NavFooterBanners from "@/components/layout/NavFooterBanners";
import HomeHeader from "@/components/layout/homeHeader";
import HomePageTopImage from "../../../public/photos/GrazingTable_HomePage.jpg";
import ImageBanner from "@/components/imageBanner";
import {LaunchContext} from "@/components/launchContext";
import Section from "@/components/layout/Section";


export default function Home() {
    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);
    closeLaunchModal();

    const homePageTexts = homePageTextData.map((text) => <HomePageText key={text.title} title={text.title} paragraph={text.paragraph} />)

  return (
      <>
          <HomeHeader title={"Bottin de la restauration alternative du Québec"} phrase={"Plateforme québecoise d’appels d’offre pour des services de restauration\n"}/>
          <ImageBanner image={HomePageTopImage} />
          <section className={"flex flex-col w-9/12 md:w-9/12 lg:w-11/12 xl:w-7/12 self-center"}>
              <div className={"flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-stretch mt-[35px] mb-[65px] lg:pt-[117px] lg:pb-[105px]"}>
                  <div className={"flex flex-col lg:w-6/12 xl:w-5/12 space-y-[10px] lg:min-h-full"}>
                      <h2 className={"tracking-homePageTitle lg:tracking-title text-borealSm md:text-borealMd lg:text-borealLg xl:text-borealLarge text-primary font-bold"}>boreal.quebec</h2>
                      <p className={"tracking-homePageOrangeText text-homePageTextOrangeSm md:text-homePageTextOrangeMd xl:text-homePageTextOrange md:text-left text-secondary font-light pt-[10px] lg:pt-[8px]"}>Le point de rencontre entre restaurateurs et clients, pour tous types d’événements.</p>
                  </div>
                  <div className={"flex flex-col my-[35px] lg:my-[0px] lg:w-6/12 xl:w-6/12 space-y-[30px] lg:space-y-[0px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[25px] lg:gap-y-[40px]"}>
                      {homePageTexts}
                  </div>
              </div>
          </section>
          <NavFooterBanners />
      </>

  )
}
