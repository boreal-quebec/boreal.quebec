import AppelOffreCard from "@/components/cards/appelOffre";
import Card from "@/components/cards/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

type OnClickCloseCallback = () => void

interface PreLaunchModalProps{
    onClickClose: OnClickCloseCallback
}

const PreLaunchModal = ({onClickClose} : PreLaunchModalProps) => {
    return (
        <div className={"fixed inset-0 overflow-y-auto h-full w-full bg-black bg-opacity-50"}>
            <div className={"flex z-10 min-h-screen items-center justify-center"}>
                <div className={"flex flex-col bg-cyan rounded-5xl space-y-10"}>
                    <div className={"p-10 bg-cyan-light rounded-t-5xl"}>
                        <div onClick={() => onClickClose()} className={"flex cursor-pointer justify-end"}>X</div>
                        <div className={"flex flex-col items-center bg-cyan-light"}>
                            <h1 className={"text-white font-medium text-center text-2xl tracking-widest md:text-3xl px-8"}>Lancement de la plateforme</h1>
                            <h1 className={"text-white font-medium text-center text-2xl tracking-widest md:text-3xl px-8"}>en mars 2024!</h1>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center rounded-b-5xl p-10"}>
                        <div className={"text-white text-xl w-2/3 text-center tracking-widest"}>Notre belle équipe travaille sans relâche afin de vous offrir un accès complet à la plateforme boreal.quebec dès le printemps 2024.</div>
                        <div className={"text-primary-800 text-xl bg-cyan w-2/3 text-center tracking-widest mt-7 mb-20"}>Contactez-nous pour toutes questions</div>
                        <div className={"text-primary text-3xl text-center font-bold tracking-widest mb-7"}>Me prévenir par courriel de son lancement</div>
                        <div className={"text-primary-800 w-2/3 text-center tracking-widest"}>
                            <input className={"px-5 py-3 rounded-l-5xl w-1/3"} type={"email"} placeholder={"Adresse courriel"} />
                            <button className={"px-5 py-3 bg-primary rounded-r-5xl text-white"}>Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLaunchModal;