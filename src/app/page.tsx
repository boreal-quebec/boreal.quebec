import React from "react";

import RegisterButton from "@/components/registerButton";
import homePageTextData from "@/data/homePageText"
import HomePageText from "@/components/homePageText";
import Footer from "@/components/footer";
import NavFooterBanners from "@/components/NavFooterBanners";

export default function Home() {

    const homePageTexts = homePageTextData.map((text) => <HomePageText title={text.title} paragraph={text.paragraph} />)

  return (
      <>
          <main className="flex min-h-screen flex-col">
              <div className={"flex flex-col justify-center items-center bg-beige pt-20 pb-20"}>
                  <div className={"mb-12"}>
                      <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
                  </div>
                  <h1 className={"text-primary font-medium text-center text-2xl md:text-3xl px-8"}>Bottin des restaurateurs alternatifs du Québec</h1>
                  <div className={"flex flex-col lg:flex-row items-stretch mt-28"}>
                      <RegisterButton link={"/devenir-membre/client"} prefix={"Je suis"} type={"Client"} color={"secondary"} position={"end"} phrase={"Obtenez des soumissions de restaurateurs."} loginPhrase={"Je suis déjà membre client"}  />
                      <RegisterButton link={"/devenir-membre/restaurateur"} prefix={"Je suis"} type={"Restaurateur"} color={"primary"} position={"start"} phrase={"Appliquez sur des appels d’offres de clients."} loginPhrase={"Je suis déjà membre restaurateur"} />
                  </div>
              </div>
              <div className={"flex flex-col xl:flex-row justify-center items-center md:p-16 lg:p-24"}>
                  <div className={"flex flex-col py-10 lg:py-0 xl:w-1/2 xl:text-left items-center xl:items-start justify-stretch"}>
                      <h2 className={"text-5xl md:text-7xl 2xl:text-8xl text-primary xl:w-3/4"}>boreal.quebec</h2>
                      <p className={"text-4xl 2xl:text-6xl text-center text-secondary xl:w-3/4"}>le point de rencontre entre restaurateurs
                          et clients, pour tous types d’événements.</p>
                  </div>
                  <div className={"lg:grid lg:grid-cols-2 p-6 xl:p-0 lg:grid-rows-2 xl:w-1/2 lg:gap-x-6 lg:justify-center lg:items-center"}>
                      {homePageTexts}
                  </div>
              </div>
              <NavFooterBanners />
              <Footer />
          </main>
      </>

  )
}
