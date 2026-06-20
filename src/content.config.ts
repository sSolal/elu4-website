import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Four dimensions — article-style pieces on 4D, plus dev-journal entries.
const fourd = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/4d' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    kind: z.enum(['Primer', 'Curiosities', 'Dev journal']).default('Primer'),
    order: z.number().default(0), // lower = earlier in the reading order
    readingMin: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { '4d': fourd };
