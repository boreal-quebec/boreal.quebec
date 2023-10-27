"use client"

import {Context, createContext, ReactElement, useState} from "react";

import PreLaunchModal from "@/components/modals/preLaunchModal";

export const LaunchContext : Context<() => void> = createContext(() => {})


export function Providers({children} : {children: ReactElement[]}){
    const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);

    const onCloseClicked = () => {
        setIsLaunchModalOpen(false);
    }

    const openLaunchModal = () => {
        setIsLaunchModalOpen(true)
    }

    return (
        <LaunchContext.Provider value={openLaunchModal}>
            {isLaunchModalOpen ? <PreLaunchModal onClickClose={onCloseClicked} /> : null }
            {children}
        </LaunchContext.Provider>
    )
}