"use client"

import {createContext, ReactElement, useEffect, useState} from "react";

import PreLaunchModal from "@/components/modals/preLaunchModal";
import { redirect } from 'next/navigation';
import {RedirectType} from "next/dist/client/components/redirect";
import {useRouter} from "next/navigation";

export const LaunchContext = createContext({openLaunchModal: ()=>{}, closeLaunchModal: ()=>{}})


export function LaunchProvider({children} : {children: ReactElement[]}){
    const router = useRouter()
    const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);


    const closeLaunchModal = () => {
        if(isLaunchModalOpen){
            setIsLaunchModalOpen(false)
            router.push("/");
        }
    }

    const openLaunchModal = () => {
        setIsLaunchModalOpen(true)
    }

    return (
        <LaunchContext.Provider value={{openLaunchModal, closeLaunchModal}}>
            {isLaunchModalOpen ? <PreLaunchModal onClickClose={closeLaunchModal} /> : null }
            {children}
        </LaunchContext.Provider>
    )
}