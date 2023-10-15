import React from "react";
import AppelOffreCard from "@/components/cards/appelOffre";
import Card from "@/components/cards/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

type OnClickCloseCallback = () => void
interface AppelOffreModalProps{
    onClickClose: OnClickCloseCallback
}


export default function AppelOffreModal({onClickClose} : AppelOffreModalProps){

    return(
        <div className={"fixed inset-0 overflow-y-auto h-full w-full bg-black bg-opacity-50"}>
            <div className={"flex z-10 min-h-screen items-center justify-center"}>
                <div className={"flex flex-col bg-white p-10 rounded-5xl space-y-10"}>
                    <div onClick={() => onClickClose()} className={"flex cursor-pointer justify-end"}>X</div>
                    <div className={"flex flex-col items-center"}>
                        <div className={"mb-4"}>
                            <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
                        </div>
                        <h1 className={"text-secondary font-medium text-center text-2xl md:text-3xl px-8"}>Appel d'offre active</h1>
                        <p className={"text-gray-500 text-center px-8"}>Publié il y a 3 minutes</p>
                    </div>
                    <AppelOffreCard size={"small"}/>
                    <Card>
                        <div className={"flex flex-col p-12"}>
                            <h1 className={"flex text-gray-500 text-2xl mb-5"}>Description de la demande</h1>
                            <span className={"overflow-hidden"}>
                                La ville de Tremblant organise un festival de chat roux. 7000 visiteurs attendus,<br/> il s’agit d’une occasions en OR.<br/> Les food trucks des années précédentes étaient <br/>hyper satisfaits de leur ventes, seulement ils ne veulent plus revenir cette année. No sé por qué.<br/>
                                <br/>
                                Nous cherchons activement 4 Food Trucks hyper greasy pour nourrire les visiteurs.<br/>
                                Idéalement grosses portions à moins de 10$ par repas. Menu varié avec végé.<br/>
                                <br/>
                                ***Nous demandons aux Food Truck de vendre nos liqueurs au profit des chats roux.<br/>
                                <br/>
                                Nous fournissons l’eau et les égouts mais pas l’électricité.<br/>
                                <br/>
                                À qui la chance!<br/>
                            </span>
                        </div>
                    </Card>
                    <Card>
                        <div className={"flex flex-col p-12"}>
                            <h1 className={"flex text-gray-500 text-2xl mb-5"}>Soumissionnaire sur cet appel d'offre</h1>
                            <p className={"font-bold text-black"}>BALUCHON</p>
                            <p className={"font-bold text-black"}>LE GRAS DUR</p>
                            <p className={"font-bold text-black"}>MI CORAZON</p>
                            <p className={"font-bold text-black"}>D-BURGER CORPORATIF</p>
                        </div>
                    </Card>
                    <div className={"flex justify-center"}>
                        <button className={"bg-primary text-white text-sm px-10 py-3 rounded-2xl"}>ENVOYER<br/>UNE SOUMISSION</button>
                    </div>
                    <div className={"flex space-x-28 justify-center"}>
                        <button className={"flex flex-col items-center"}>
                            <FontAwesomeIcon className={"text-4xl text-secondary"} icon={faHeart} />
                            Ajouter<br/>à mes favoris
                        </button>
                        <button className={"flex flex-col items-center"}>
                            <FontAwesomeIcon className={"text-4xl text-secondary"} icon={faEnvelope} />
                            Recevoir des appels d’offres<br/> similaires par courriel
                        </button>
                        <button className={"flex flex-col items-center"}>
                            <FontAwesomeIcon className={"text-4xl text-secondary"} icon={faPlus} />
                            Demander<br/>des précisions au client
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}