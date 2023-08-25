import {User} from "next-auth";


export const registerClient = async (data: CreateClientUserData) => {
    return await fetch("/api/register/client", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export const registerRestaurateur = async (data: CreateRestaurateurUserData) => {
    return await fetch("/api/register/restaurateur", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}