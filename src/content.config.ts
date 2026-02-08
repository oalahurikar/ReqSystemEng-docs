import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import tagsData from './data/tags.json';

const tagSlugs = tagsData.map((t) => t.slug) as [string, ...string[]];

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string().optional(),
    tags: z.array(z.enum(tagSlugs)).optional(),
  }),
});

export const collections = { blog };
