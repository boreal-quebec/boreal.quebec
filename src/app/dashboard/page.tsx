"use client"

import {signOut} from "next-auth/react";
import Button from "@/components/menus/button";

export default function Dashboard() {

    return (
        <main className={"flex flex-col justify-center items-center pt-20"}>
            <h1 className={"text-4xl"}>Dashboard</h1>
            <Button text={"Déconnexion"} onClick={() => signOut()}/>
        </main>
    )
}
