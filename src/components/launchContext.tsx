"use client"

import {Context, createContext, ReactElement, useState} from "react";

import PreLaunchModal from "@/components/modals/preLaunchModal";
import {useRouter} from "next/navigation";

export const LaunchContext = createContext({openLaunchModal: ()=>{}, closeLaunchModal: ()=>{}})


export function LaunchProvider({children} : {children: ReactElement[]}){
    const router = useRouter()
    const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);

    const closeLaunchModal = () => {
        console.log("Close")
        setIsLaunchModalOpen(false);
        router.push("/");
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