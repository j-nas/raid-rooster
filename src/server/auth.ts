import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  type DefaultSession,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";

import { env } from "@/env";
import { db } from "@/server/db";
import BattleNet from "next-auth/providers/battlenet";
import NextAuth from "next-auth";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [

    BattleNet({
      clientId: env.BATTLENET_CLIENT_ID,
      clientSecret: env.BATTLENET_CLIENT_SECRET,
      issuer: "https://us.battle.net/oauth",
      authorization: {
        params: { state: "STATE" }, // The state parameter is required by BattleNet
      },



    }),

  ],
});

