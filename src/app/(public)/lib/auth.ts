import {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {authService} from "@/app/(public)/lib/server";

export const authOptions : NextAuthOptions = {
    debug: true,
    secret: process.env.AUTH_SECRET,
    pages:{
        signIn: '/login',
        error: '/error',
        signOut: '/'
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.firstname = user.firstname
                token.lastname = user.lastname
                token.email = user.email
                token.role = user.role
            }
            return token
        },
        async session({ session, token, user }) {
            session.user.firstname = token.firstname
            session.user.lastname = token.lastname;
            session.user.email = token.email;
            session.user.role = token.role
            return session
        },
    },
    providers: [ CredentialsProvider({
        credentials: {
            email: { label: "Email", type: "text", placeholder: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize (credentials, req) {
            const data = req.query as User;
            return await authService.login(data)
        }
    })]
}