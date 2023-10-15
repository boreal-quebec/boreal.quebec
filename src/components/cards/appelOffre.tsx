import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faSquareCheck, faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faUser} from "@fortawesome/free-regular-svg-icons";

type OnClickCallback = (id: string) => void
interface AppelOffreCardProps{
    size?: string,
    onClick?: OnClickCallback
}

export default function AppelOffreCard({onClick, size = "normal"} : AppelOffreCardProps){

    const innerTextLeftPadding = "pl-2"
    const orangeBorder = "md:border-l-secondary md:border-l-2"
    const sizePreset = {
        normal: {
            titleSize: "text-xl",
            boxMargin: "mt-7 mb-7"
        },
        small: {
            titleSize: "text-xs",
            boxMargin: "mt-7 mb-7"
        }
    }

    const cursor = onClick ? "cursor-pointer" : ""

    return(
        <div onClick={() => onClick?.("")} className={`flex ${cursor} bg-white justify-center rounded-5xl shadow-xl shadow-gray-300`}>
            <div className={`flex ${sizePreset[size].boxMargin} basis-1/12 px-6`}>
                <div className={"h-7 w-7 rounded-full bg-secondary"}></div>
                <div className={`flex flex-col text-secondary pl-2 ${innerTextLeftPadding}`}>
                    <div className={"font-bold"}>ACTIF</div>
                    <div>14/08/2023</div>
                </div>
            </div>
            <div className={`flex flex-col basis-5/12 text-primary ${sizePreset[size].boxMargin} ${innerTextLeftPadding} ${orangeBorder}`}>
                <div className={`font-bold ${sizePreset[size].titleSize} `}>SERVICE TRAITEUR</div>
                <div className={`${sizePreset[size].titleSize}`}>Repas chaud, repas froid, alcool, bouchées</div>
            </div>
            <div className={"flex basis-3/12 bg-beige px-4"}>
                <div className={`flex flex-col justify-center space-y-3`}>
                    <div className={"flex items-center px-5"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faLocationDot} />
                        <div className={`text-primary ${sizePreset[size].titleSize}`}>Les Laurentides</div>
                    </div>
                    <div className={"flex items-center px-5"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faSquareCheck} />
                        <div className={`text-primary ${sizePreset[size].titleSize}`}>16 septembre 2023</div>
                    </div>
                    <div className={"flex items-center px-5"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faUser} />
                        <div className={`text-primary ${sizePreset[size].titleSize}`}>120 personnes</div>
                    </div>
                </div>

            </div>
            <div className={`flex flex-col basis-3/12 px-4 ${sizePreset[size].boxMargin}`}>
                <div>
                    <div className={`${sizePreset[size].titleSize} font-bold text-primary`}>Budget de <br/>3 000$ à 4 000$</div>
                    <div className={"font-semibold text-primary"}>Facture unique</div>
                </div>
                <div className={`${sizePreset[size].titleSize} text-gray-500 mt-5 md:pt-0`}>
                    <div>Date limite: 15 septembre 2023</div>
                    <div>Soumissions: 3</div>
                </div>
            </div>
        </div>
    )
}