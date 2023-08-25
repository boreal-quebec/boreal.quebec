import {User} from "next-auth";
import {NextResponse} from "next/server";

interface ServerResponse{
    success: boolean;
}

interface CreateUserServerResponse extends ServerResponse{
    data: User;
}

interface LoginServerResponse extends ServerResponse{
    data: LoginResponseData;
}

interface LoginResponseData{
    user: User;
    token: string;
}



const createUser = async (data : CreateUserData)=> {
    const response = await fetch(`${process.env["API_URL"]}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            role: data.role
        })
    })

    const serverResponse = await response.json() as CreateUserServerResponse

    if(!serverResponse.success){
        return null;
    }

    return serverResponse.data
}

const login = async (data: User) => {
    const response = await fetch(`${process.env["API_URL"]}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const serverResponse = await response.json() as LoginServerResponse

    console.log(serverResponse)

    if(!serverResponse.success){
        return null;
    }

    return serverResponse.data.user
}

export const authService = {
    login,
    createUser,
}