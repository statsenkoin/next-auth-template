import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectDb } from '@/utils/database';
import User from '@/models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      console.log('profile :>> ', profile);
      try {
        await connectDb();
        const userExist = await User.findOne({ email: profile.email });

        if (!userExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log('error :>> ', error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
