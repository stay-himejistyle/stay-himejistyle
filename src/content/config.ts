import { defineCollection, z, reference } from "astro:content";

const stays = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      type: z.enum([
        "kominka",
        "ittou-gashi",
        "kanibukusho",
        "ryokan",
        "hotel",
        "guesthouse",
      ]),
      tagline: z.string().min(10).max(40),
      area: z.string(),
      address: z.string().optional(),
      rooms: z.number().int().positive(),
      capacity: z.number().int().positive(),
      // 正式な緯度経度が確定するまでの暫定並び順（小さいほど先に表示）
      order: z.number().int(),
      priceRange: z
        .object({
          min: z.number(),
          max: z.number().optional(),
          currency: z.literal("JPY").default("JPY"),
          unit: z.enum(["per-person-night", "per-room-night"]).default("per-room-night"),
        })
        .optional(),
      heroImage: image().optional(),
      gallery: z.array(image()).default([]),
      officialUrl: z.string().url().optional(),
      bookingLinks: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
          })
        )
        .default([]),
      ownership: z.enum(["self", "managed"]),
      caseNumber: z.string().regex(/^IT\d{3}$/),
      published: z.boolean().default(false),
      tags: z.array(z.string()).max(5).default([]),
      featuredArticles: z.array(reference("articles")).default([]),
    }),
});

const articles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum([
        "stay-models",
        "gourmet",
        "sightseeing",
        "how-to-stay",
        "events",
      ]),
      published: z.boolean().default(false),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      description: z.string().min(60).max(160),
      keywords: z.array(z.string()).default([]),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      author: z.string().default("姫路スタイル編集部"),
      readingTime: z.number().int().positive().optional(),
      relatedStays: z.array(reference("stays")).max(5).default([]),
      mainStays: z.array(reference("stays")).max(2).default([]),
      lang: z.enum(["ja", "en", "zh-tw", "ko"]).default("ja"),
      translations: z
        .object({
          en: z.string().optional(),
          "zh-tw": z.string().optional(),
          ko: z.string().optional(),
        })
        .optional(),
      tags: z.array(z.string()).max(8).default([]),
    }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = { stays, articles, legal };
