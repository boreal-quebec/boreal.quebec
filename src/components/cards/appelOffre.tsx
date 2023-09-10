import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faSquareCheck, faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faUser} from "@fortawesome/free-regular-svg-icons";


export default function AppelOffreCard(){
    return(
        <div className={"flex flex-col md:flex-row items-stretch bg-white rounded-3xl py-5 mb-3"}>
            <div className={"flex items-center px-5 py-2 md:pr-10 md:pl-3"}>
                <div>
                    <div className={"h-7 w-7 rounded-full bg-secondary"}></div>
                </div>
                <div className={"flex space-x-1.5 md:flex-col text-secondary pl-2"}>
                    <div>ACTIF</div>
                    <div>14/08/2023</div>
                </div>
            </div>
            <div className={"flex flex-col px-5 md:flex-row grow justify-around space-y-5"}>
                <div className={"flex flex-col text-primary pt-5 md:pl-2 md:border-l-secondary md:border-l-2"}>
                    <div>SERVICE TRAITEUR</div>
                    <div>Repas chaud, repas froid, alcool, bouchées</div>
                </div>
                <div className={"flex flex-col space-y-2 justify-center"}>
                    <div className={"flex items-center bg-primary rounded-3xl px-5 py-1"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faLocationDot} />
                        <div className={"text-white"}>LES LAURENTIDES</div>
                    </div>
                    <div className={"flex items-center bg-primary rounded-3xl px-5 py-1"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faSquareCheck} />
                        <div className={"text-white"}>16 septembre 2023</div>
                    </div>
                    <div className={"flex items-center bg-primary rounded-3xl px-5 py-1"}>
                        <FontAwesomeIcon className={"text-secondary mr-2"} icon={faUser} />
                        <div className={"text-white"}>120 personnes</div>
                    </div>
                </div>
                <div className={"flex flex-col justify-between"}>
                    <div>
                        <div>Budget de 3 000$ à 4 000$</div>
                        <div>Facture unique</div>
                    </div>
                    <div className={"pt-5 md:pt-0"}>
                        <div>Date limite: 15 septembre 2023</div>
                        <div>Soumissions: 0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}