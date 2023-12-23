import React from "react";
import SubscribeNewsletter from "@/components/forms/subscribeNewsletter";
import { useLockBodyScroll } from "@uidotdev/usehooks";

type OnClickCloseCallback = () => void

interface PreLaunchModalProps{
    onClickClose: OnClickCloseCallback
}

const PreLaunchModal = ({onClickClose} : PreLaunchModalProps) => {
    useLockBodyScroll();
    return (
        <div className={"p-5 fixed inset-0 h-full w-full bg-black bg-opacity-50 z-10"}>
            <div className={"flex z-10 min-h-screen items-center justify-center"}>
                <div className={"flex flex-col bg-cyan rounded-5xl"}>
                    <div className={"bg-cyan-light rounded-t-5xl p-5"}>
                        <div onClick={() => onClickClose()} className={"flex cursor-pointer justify-end"}>X</div>
                        <div className={"flex items-center justify-center bg-cyan-light rounded-t-5xl px-[53px]"}>
                            <h1 className={"text-primary font-bold text-center text-launchModalTitle tracking-title"}>Lancement officiel de la plateforme<br/> prévu au printemps 2024</h1>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center justify-center rounded-b-5xl p-5"}>
                        <div className={"flex flex-col items-center text-center p-5 px-[87px]"}>
                            <p className={"flex text-white text-launchModalText tracking-title"}>Notre belle équipe travaille sans relâche afin de vous <br/>offrir un accès complet à la plateforme boreal.quebec<br/>dès le printemps 2024.</p>
                        </div>
                        <p className={"flex text-primary-800 font-semibold bg-cyan text-center text-launchModalTextCallToAction tracking-title"}>Contactez-nous pour toutes questions</p>
                        <p className={"flex text-primary text-center font-bold text-launchModalTextPrevenir mt-7 mb-2 tracking-title"}>Me prévenir par courriel de son lancement</p>
                        <SubscribeNewsletter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLaunchModal;