import { envConfig } from "@/configs/envConfig";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: envConfig.google_id,
      clientSecret: envConfig.google_secret,
    }),
    FacebookProvider({
      clientId: envConfig.facebook_id,
      clientSecret: envConfig.facebook_secret,
    }),
    TwitterProvider({
      clientId: envConfig.twitter_id,
      clientSecret: envConfig.twitter_secret,
    }),
  ],
};

export default NextAuth(authOptions);
