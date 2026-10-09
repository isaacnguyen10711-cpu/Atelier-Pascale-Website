import NextAuth from "next-auth"
import Google from "next-auth/providers/google" 

const adminEmail = (process.env.ADMIN ?? '')
.split(',')
.map(email => email.trim().toLowerCase())
.filter(email => email !== '');

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            return adminEmail.includes(user.email?.toLowerCase() ?? '')
        },
    },
})


