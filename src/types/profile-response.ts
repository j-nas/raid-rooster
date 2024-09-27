import { z } from "zod";

export const ProfileResponse = z.object({
  wow_accounts: z.array(
    z.object({
      characters: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          level: z.number(),
          faction: z.object({
            type: z.enum(["HORDE", "ALLIANCE", "NEUTRAL"]),
          }),
          playable_class: z.object({
            name: z.object({
              en_US: z.string(),
            }),
            id: z.number(),
          }),
          realm: z.object({
            name: z.object({
              en_US: z.string(),
            }),
            slug: z.string(),
            id: z.number(),
          })
        })
      )
    })
  )
})