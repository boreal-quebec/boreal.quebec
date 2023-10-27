import RechercheBottinForm from "@/components/forms/rechercheBottin";
import Header from "@/components/layout/header";
import PageTemplate from "@/components/pageTemplate";
import PageLeftColumn from "@/components/layout/pageLeftColumn";
import {BigButton} from "@/components/bigButton";
import React from "react";
import {serviceSearchResult} from "@/data/serviceSearchResult";
import SearcResultCard from "@/components/searcResultCard";

export default function Botin() {

    const appelOffre = (
        <BigButton
            prefix={"PUBLIER UN"}
            type={"APPEL D’OFFRE"}
            phrase={"Gagnez du temps.\nRecevez gratuitement et sans engagement des soumissions de restaurateurs."}
            position={"left"}
            color={"secondary"}
            link={"/a-propos"}
            cutLeft={true}
        />
    )

    const figurerBottin = (
        <BigButton
            prefix={"FIGURER SUR LE"}
            type={"BOTTIN"}
            phrase={"Soyez visible.\nProfitez gratuitement d’une plateforme crédible afin d’être répertorié."}
            position={"left"}
            color={"primary"}
            link={"/a-propos"}
            cutLeft={true}
        />
    )

    const searchResults = serviceSearchResult.map((result) => (<SearcResultCard key={result.key} companyName={result.key}/>))

    return(
        <PageTemplate title={"Le Bottin"} phrase={"Le répertoire des restaurateurs alternatifs québecois"}>
            <div className={"flex flex-col xl:flex-row"}>
                <PageLeftColumn bigButtons={[appelOffre, figurerBottin]}>
                    <RechercheBottinForm />
                </PageLeftColumn>
                <div className={"lg:grow lg:ml-6"}>
                    <div className="grid gap-4 2xl:grid-cols-3 md:grid-cols-2 p-5 mt-6 lg:mt-0">
                        {searchResults}
                    </div>
                </div>
            </div>

        </PageTemplate>
    )
}