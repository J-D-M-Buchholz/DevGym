import  NextAuth  from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "258309698789-2nrf9dbbe0g4ped86scgubgpnff9p9hl.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    pages: {
        error: "/dashboard/login",
    },
})


