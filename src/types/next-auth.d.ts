import NextAuth from "next-auth"
import {DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        id: number|string;
        firstname: string;
        lastname: string;
        email: string;
        role: string;// Or string
    }

    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        id: number|string;
        firstname: string;
        lastname: string;
        email: string;
        role: string;
    }
}