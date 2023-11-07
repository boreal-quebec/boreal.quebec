import React from "react";

import homePageTextData from "@/data/homePageText"
import HomePageText from "@/components/homePageText";
import Footer from "@/components/layout/footer";
import NavFooterBanners from "@/components/layout/NavFooterBanners";
import HomeHeader from "@/components/layout/homeHeader";
import Image from "next/image";
import HomePageTopImage from "../../../public/photos/GrazingTable_HomePage.jpg";
import ImageBanner from "@/components/imageBanner";


export default function Home() {

    const homePageTexts = homePageTextData.map((text) => <HomePageText key={text.title} title={text.title} paragraph={text.paragraph} />)

  return (
      <>
          <HomeHeader title={"Bottin de la restauration alternative du Québec"} phrase={"Plateforme québecoise d’appels d’offre pour des services de restauration\n"}/>
          <ImageBanner image={HomePageTopImage} />
          <div className={"flex flex-col xl:flex-row justify-center items-center md:p-16 lg:p-24"}>
              <div className={"flex flex-col py-10 lg:py-0 xl:w-1/2 xl:text-left items-center xl:items-start justify-stretch"}>
                  <h2 className={"text-5xl md:text-7xl 2xl:text-8xl text-primary font-bold xl:w-3/4"}>boreal.quebec</h2>
                  <p className={"text-3xl 2xl:text-6xl text-center md:text-left text-secondary xl:w-3/4"}>le point de rencontre entre restaurateurs
                      et clients, pour tous types d’événements.</p>
              </div>
              <div className={"lg:grid lg:grid-cols-2 p-6 xl:p-0 lg:grid-rows-2 xl:w-1/2 lg:gap-x-6 lg:justify-center lg:items-center"}>
                  {homePageTexts}
              </div>
          </div>
          <NavFooterBanners />
      </>

  )
}
