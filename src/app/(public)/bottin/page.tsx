"use client"
import RechercheBottinForm from "@/components/forms/rechercheBottin";
import Header from "@/components/layout/header";
import PageTemplate from "@/components/layout/pageTemplate";
import PageLeftColumn from "@/components/layout/pageLeftColumn";
import {BigButton} from "@/components/buttons/bigButton";
import React, {useContext, useEffect, useState} from "react";
import SearcResultCard from "@/components/searcResultCard";
import SearchResultCard from "@/components/searcResultCard";
import {RestaurantContext} from "@/components/contexts/RestaurantContext";
import {LaunchContext} from "@/components/launchContext";

export default function Botin() {

    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);
    openLaunchModal();

    //const [results, setResults] = useState<RestaurantData[] | undefined>(undefined)
    const [search, setSearch]= useState({})

    /*useEffect(() => {
        let ignore = false;
        fetch("/api/bottin?"+ new URLSearchParams({text: "hello"}), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
            .then((json) => setResults(json.data))
        return () => {
            ignore = true;
        };
    }, [search])*/


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

    const restaurants : RestaurantData[] = [
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        },
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        },
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        },
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        },
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        },
        {
            id: 1,
            name: "Restaurant 1",
            services: [
                {"name": "Service 1"},
                {"name": "Service 2"},
                {"name": "Service 3"}
            ],
            products: [
                {"name": "Product 1"},
                {"name": "Product 2"},
                {"name": "Product 3"}
            ],
            logo: ""
        }
    ]

    const searchResults = restaurants?.map((restaurant : RestaurantData) => (
        <RestaurantContext.Provider key={restaurant.id} value={{restaurant}}>
            <SearchResultCard />
        </RestaurantContext.Provider>
    ))

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