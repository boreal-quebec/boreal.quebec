import React from "react";

import RegisterButton from "@/components/registerButton";
import homePageTextData from "@/data/homePageText"
import HomePageText from "@/components/homePageText";
import Footer from "@/components/footer";

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
                      <RegisterButton type={"Client"} color={"secondary"} position={"end"} phrase={"Obtenez des soumissions de restaurateurs."} loginPhrase={"Je suis déjà membre client"}  />
                      <RegisterButton type={"Restaurateur"} color={"primary"} position={"start"} phrase={"Appliquez sur des appels d’offres de clients."} loginPhrase={"Je suis déjà membre restaurateur"} />
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
              <div className={"flex flex-col 2xl:flex-row 2xl:h-screen"}>
                  <div className={`flex flex-col justify-between bg-beige px-0 md:px-24 xl:px-0`}>
                      <h2 className={`text-4xl sm:text-5xl text-primary pt-12 pb-6 2xl:py-24 px-6`}>explorer le <span className={`text-white`}>bottin</span> des restauteurs alternatifs</h2>
                      <div className={"flex items-start justify-start"}>
                          <p className={"px-6 pb-6 text-xl text-primary "}>Explorez le large répertoire de restaurateurs alternartifs québecois, et trouvez le service qu’il vous faut sur boreal.quebec</p>
                      </div>
                  </div>
                  <div className={`flex flex-col justify-between bg-secondary px-0 md:px-24 xl:px-0`}>
                      <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>découvrir les bonnes raisons de devenir <span className={`text-white`}>membre client</span></h2>
                      <div>
                          <p className={"px-6 pb-6 text-xl text-white"}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre client sur boreal.quebec</p>
                      </div>
                  </div>
                  <div className={`flex flex-col justify-between bg-primary px-0 md:px-24 xl:px-0`}>
                      <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>découvrir les bonnes raisons de devenir <span className={`text-white`}>membre restaurateur</span></h2>
                      <div>
                          <p className={"px-6 pb-6 text-xl text-white"}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre restaurateur sur boreal.quebec</p>
                      </div>
                  </div>
                  <div className={`flex flex-col justify-between bg-secondary-800 px-0 md:px-24 xl:px-0`}>
                      <h2 className={`text-4xl sm:text-5xl text-white-pale pt-12 pb-6 2xl:py-24 px-6`}>prendre connaissance des <span className={`text-white`}>engagements</span> de la plateforme</h2>
                      <div>
                          <p className={"px-6 pb-6 text-xl text-white"}>Prenez connaissance des engagements et du service de la plateforme boreal.quebec</p>
                      </div>
                  </div>
              </div>
              <Footer />
          </main>
      </>

  )
}
