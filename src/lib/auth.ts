import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from 'astro:db';
import { genericOAuth } from 'better-auth/plugins';

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  database: drizzleAdapter(db, {
    provider: "sqlite"
  }),
  emailAndPassword: {
    enabled: false
  },
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: 'battle-net',
          clientId: process.env.BATTLE_NET_CLIENT_ID as string,
          clientSecret: process.env.BATTLE_NET_CLIENT_SECRET as string,
          authorizationUrl: "https://oauth.battle.net/authorize",
          tokenUrl: "https://oauth.battle.net/token",
          scopes: ["wow.profile", "openid"]
        }
      ]
    })
  ]
});