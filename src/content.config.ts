import { defineCollection, z } from "astro:content";

const people = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      fullName: z.string(),
      lastName: z.string(),
      photo: image().optional(),
      credentials: z.array(z.string()),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      ).optional(),
    }),
  });

export const collections = {
  people,
};
