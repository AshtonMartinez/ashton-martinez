import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Base block types
const blockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("text"),
    subheading: z.string().optional(),
    paragraphs: z.array(z.string()),
  }),
  z.object({
    type: z.literal("image"),
    src: z.string(),
    alt: z.string().optional(),
    caption: z.string().optional(),
    fullWidth: z.boolean().default(false),
  }),
  z.object({
    type: z.literal("gallery"),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    ),
  }),
  z.object({
    type: z.literal("code"),
    language: z.string(),
    code: z.string(),
  }),
  z.object({
    type: z.literal("quote"),
    text: z.string(),
    author: z.string().optional(),
  }),
  z.object({
    type: z.literal("video"),
    url: z.string(),
    caption: z.string().optional(),
  }),
]);

// Container block (two side-by-side blocks)
const containerBlockSchema = z.object({
  type: z.literal("container"),
  blocks: z
    .array(blockSchema)
    .length(2, "A container must have exactly 2 blocks"),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),

  schema: z.object({
    title: z.string(),
    websiteLink: z.string().url(),
    heroImage: z.string(),
    slug: z.string(),
    description: z.string(),
    tech: z.array(z.string()),

    content: z.array(z.union([blockSchema, containerBlockSchema])),
  }),
});

export const collections = {
  projects: projectsCollection,
};
