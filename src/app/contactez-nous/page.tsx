import Header from "@/components/layout/header";
import React from "react";
import RegisterButton from "@/components/registerButton";
import Image from "next/image";
import HomePageTopImage from "../../../public/photos/Bouchees_ContactezNous.jpg";
import Dropdown from "@/components/dropdown";


export default function ContactezNous(){
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"Nous joindre"} phrase={""}/>
            <div className={"flex flex-col md:flex-row"}>
                <div className={"flex flex-col md:px-0 md:py-0 md:w-1/2 items-center bg-beige"}>
                    <div className={"flex flex-col md:w-2/3 md:mt-48"}>
                        <p className={"text-3xl text-primary"}>Contactez-nous pour toutes questions ou suggestions.</p>
                        <div className={"flex flex-col mt-10"}>
                            <form className={"flex flex-col space-y-7"}>
                                <div className={"flex flex-col"}>
                                    <label htmlFor={"name"} className={"text-primary pb-1"}>Nom Complet*</label>
                                    <input type={"text"} id={"name"} className={"rounded-2xl p-3"} required={true} />
                                </div>
                                <div className={"flex flex-col"}>
                                    <label htmlFor={"couriel"} className={"text-primary pb-1"}>Courriel*</label>
                                    <input type={"text"} id={"couriel"} className={"rounded-2xl p-3"} required={true} />
                                </div>
                                <div className={"flex flex-col"}>
                                    <label htmlFor={"subject"} className={"text-primary pb-1"}>Sujet</label>
                                    <input type={"text"} id={"subject"} className={"rounded-2xl p-3"} required={true} />
                                </div>
                                <div className={"flex flex-col"}>
                                    <label htmlFor={"message"} className={"text-primary pb-1"}>Message</label>
                                    <textarea required={true} id={"message"} className={"rounded-2xl p-3"} />
                                </div>
                                <button type={"submit"} className={"bg-secondary rounded-2xl p-4 text-2xl tracking-widest text-white mt-4 self-end"}>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"flex w-1/2"}>
                    <Image className={"overflow-hidden object-cover w-full"} src={HomePageTopImage} alt={""}  />
                </div>
            </div>
        </main>
    )
}