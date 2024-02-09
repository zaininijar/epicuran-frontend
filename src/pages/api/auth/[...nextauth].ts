import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

type UserType = {
    id: number
    name: string
    email: string
    role: string
    created_at: string
    passwordResetToken: null
    passwordResetExpires: null
    passwordChangeAt: null
    image: string
}

export const authOptions: NextAuthOptions = {
    // adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    debug: process.env.NODE_ENV === "development",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                const { email, password } = credentials as {
                    email: string, password: string
                }

                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, password })
                    });

                    if (response.ok) {
                        const userResponse = await response.json();
                        const user = userResponse.data.user;

                        user.image = "https://ui-avatars.com/api/?name=Ahmad%20Zaini%20Nijar&uppercase=false&background=random";
                        user.token = userResponse.token

                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                    return null;
                }

                // const user: User | null = {
                //     id: 'cfeWywtoBg',
                //     name: "Ahmad Zaini Nijar",
                //     email: "zaininijar7610@gmail.com",
                //     image: "https://ui-avatars.com/api/?name=Ahmad%20Zaini%20Nijar&uppercase=false&background=random"
                // }

                // if (email === "test@example.com" && password === 'test123') {
                //     return Promise.resolve(user);
                // } else {
                //     return Promise.resolve(null);
                // }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && account.provider === 'credentials' && user) {
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user,
                    email: token.email,
                    name: token.name,
                    image: token.picture
                };
            }

            return session;
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}

const handler = NextAuth(authOptions)

export default handler
