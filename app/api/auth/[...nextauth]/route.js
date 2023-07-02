import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'
import User from '@models/user'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({ 
                email: session.user.email 
            })
    
            session.user.id = sessionUser._id.toString()
    
            return session
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB()
    
                // check if a user already exist
                const userExists = await User.findOne({ 
                    email: profile.email 
                })
    
                // if not, create a new user
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replaceAll(" ", "").toLowerCase(),
                        image: profile.picture,
                    })
                }
    
                return true
            } catch (error) {
                console.log(error.message)
                return false
            }
        }
    }
})

export { handler as GET, handler as POST}