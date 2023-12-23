"use client"

import React, {useContext} from "react";

import HomePageColumnsSm from "@/components/layout/homePageCollumns/homePageColumnsSm";
import HomePageColumnsMd from "@/components/layout/homePageCollumns/homePageColumnsMd";
import HomePageColumnsLg from "@/components/layout/homePageCollumns/homePageColumnsLg";

export default function NavFooterBanners(){
    return (
        <>
            <HomePageColumnsSm />
            <HomePageColumnsMd />
            <HomePageColumnsLg />
        </>

    )
}