import Image from "next/image";
import badge from "../../../public/badge.png";
import Dropdown from "@/components/dropdown";
import Input from "@/components/Input";
import React from "react";
import Link from "next/link";
import AppelOffreCard from "@/components/cards/appelOffre";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";


export default function AppelOffer() {

    const offres = [
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    const appelOffreCards = offres.map((o) => <AppelOffreCard />)

    return (
        <main className={"flex min-h-screen flex-col bg-beige"}>
            <div className={"flex flex-col justify-center items-center pt-20 pb-20"}>
                <div className={"mb-12"}>
                    <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
                </div>
                <h1 className={"text-white font-medium text-center text-2xl md:text-4xl px-8"}>appels d’offres</h1>
                <h1 className={"text-primary font-medium text-center text-2xl px-8 md:w-1/2"}>Profitez de la plus importante plateforme québecoise d’appels d’offres pour des services de restauration alternative</h1>
            </div>
            <div className={"flex flex-col lg:flex-row justify-between items-stretch mt-12 grow px-12 px-6 lg:p-0"}>
                <div className={"lg:w-1/5"}>
                    <div className={"flex flex-col bg-white rounded-3xl md:rounded-none md:rounded-tr-3xl md:rounded-br-3xl pt-6 px-6"}>
                        <div className={"flex flex-col"}>
                            <Link href={`/register/`}>
                                <div className={`flex flex-col bg-primary text-white rounded-lg mr-2 px-8 py-7`}>
                                    <h1 className={"text-3xl"}>RECHERCHER</h1>
                                    <h1 className={"text-2xl whitespace-nowrap"}>DES APPELS D'OFFRES</h1>
                                </div>
                            </Link>
                            <p className={"flex text-primary py-5 md:py-0 lg:px-3 lg:my-7"}>
                                Trouvez des clients.
                                Envoyez des soumissions et obtenez facilement des contrats sans aucun intermédiaire ni commision.
                            </p>
                            <Link href={`/register/`}>
                                <div className={`flex flex-col bg-secondary text-white rounded-lg mr-2 px-8 py-7`}>
                                    <h1 className={"text-3xl"}>PUBLIER</h1>
                                    <h1 className={"text-2xl whitespace-nowrap"}>DES APPELS D’OFFRES</h1>
                                </div>
                            </Link>
                            <p  className={"flex text-primary py-5 md:py-0 lg:px-3 lg:my-7"} >
                                Gagnez du temps.
                                Recevez gratuitement et sans engagement des soumissions de restaurateurs selon
                                vos critères.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"lg:grow lg:ml-6"}>
                    <div className="flex flex-col mt-6 lg:mt-0">
                        <div className={"md:mr-10"}>
                            {appelOffreCards}
                        </div>
                        <div className={"flex my-10 md:mr-10"}>
                            <div>
                                <button>
                                    <FontAwesomeIcon className={"bg-primary text-white text-xl rounded-full p-2"} icon={faBackward} />
                                </button>
                            </div>
                            <div className={"flex grow justify-center space-x-5 text-primary"}>
                                <button className={"border-b-secondary border-b-2"}>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                            </div>
                            <div>
                                <button>
                                    <FontAwesomeIcon className={"bg-primary text-white text-xl rounded-full p-2"} icon={faForward} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}