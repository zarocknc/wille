import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"


export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma), // esperando update next-auth 4.22.3
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks: {
        async session({session, user}) {
            if (session) {
                const dbUser = await prisma.user.findUnique({
                    where: {email: user.email},
                });
                if (dbUser && dbUser.role) {
                    session.user.role = dbUser.role;
                }
            }
            return session
        }
    }
}