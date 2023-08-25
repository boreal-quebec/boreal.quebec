import React from "react";
import Navbar from "@/components/menus/navbar";
import Dropdown from "@/components/dropdown";
import SearcResultCard from "@/components/searcResultCard";
import {serviceSearchResult} from "@/data/serviceSearchResult";
import RegisterButton from "@/components/registerButton";
import Input from "@/components/Input";

export default function Home() {

    const searchResults = serviceSearchResult.map((result) => (<SearcResultCard key={result.key} companyName={result.key}/>))

  return (
      <>
          <main className="flex min-h-screen flex-col">
              <div className={"flex flex-col justify-center items-center bg-beige pt-20 pb-20"}>
                  <div className={"mb-12"}>
                      <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
                  </div>
                  <h1 className={"text-primary font-medium text-center text-2xl md:text-3xl"}>Bottin des restaurateurs alternatifs du Québec</h1>
                  <div className={"flex flex-col lg:flex-row items-stretch mt-28"}>
                      <RegisterButton type={"Client"} color={"secondary"} position={"end"} phrase={"Obtenez des soumissions de restaurateurs."} loginPhrase={"Je suis déjà membre client"}  />
                      <RegisterButton type={"Restaurateur"} color={"primary"} position={"start"} phrase={"Appliquez sur des appels d’offres de clients."} loginPhrase={"Je suis déjà membre restaurateur"} />
                  </div>
              </div>
              <div className={"flex justify-center items-center md:p-16 lg:p-24"}>
                  <p className={"lg:w-1/2 text-sm py-4 text-center"}>
                      La plateforme boreal.quebec a été concue dans un but d’offrir un service québecois efficace, conviviale et transparent via un site web crédible de référencement et d’appels d’offres. De grands changement s’opèrent dans l’industrie de la restauration, et l’engouement pour une restauration alternative ne cesse de croître. Alors que les salles à manger traditionnelles bénéficie d’une visibilité naturelle grâce à leur pignon sur rue, boreal.quebec a pour mission d’offrir tant une visibilité aux restaurateurs alternatifs qu’une accessibilité aux clients qui recherche ces types de services. Devenir membre de boreal.quebec est simple, gratuit et sans engagement.
                  </p>
              </div>
              <div className={"flex flex-col items-center bg-primary pb-20 grow"}>
                  <h1 className={"text-white text-2xl font-semibold mt-14"}>Bienvenue sur boreal.quebec</h1>
                  <p className={"text-white text-center text-md mt-4 tracking-wide"}>Trouvez un service de restauration adapté à vos besoins parmi le plus grand répertoire de restaurateurs alternatif québecois</p>
                  <div className={"flex flex-col lg:flex-row justify-between items-stretch mt-12 grow px-12 sm:px-24 lg:p-0"}>
                      <div className={"lg:w-1/4"}>
                          <div className={"flex flex-col bg-beige"}>
                              <p className={"text-primary text-center px-6 py-4 lg:px-2 lg:py-2"}>Gagnez du temps et recevez gratuitement et sans engagement des soumissions de nos restaurateurs selon vos critères</p>
                              <button className={"bg-secondary text-center p-2"}>faire un appel d’offre</button>
                          </div>
                          <div className={"flex flex-col items-stretch justify-stretch"}>
                              <h1 className={"text-white tracking-widest text-xl font-semibold px-2 mt-8 mb-4"}>Précisez la recherche</h1>
                              <form className={"flex flex-col items-stretch justify-stretch"}>
                                  <Dropdown label={"quoi?"} values={["Type de produit", "Food truck", "Chefs privée", "Autre"]} name={"quoi"} />
                                  <Dropdown label={"comment?"} values={["Type de service", "Traiteur", "Café et patisseries", "Autre"]} name={"comment"} />
                                  <Input label={"où?"} placeholder={"Code postal de l'évènement"} name={"ou"} type="text" />
                              </form>
                          </div>
                      </div>
                      <div className={"lg:grow lg:ml-6"}>
                          <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-6">
                              {searchResults}
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </>

  )
}
