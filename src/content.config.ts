import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Four dimensions — article-style pieces on 4D, plus dev-journal entries.
const fourd = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/4d' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      kind: z.enum(['Primer', 'Curiosities', 'Dev journal']).default('Primer'),
      order: z.number().default(0), // lower = earlier in the reading order
      readingMin: z.number().optional(),
      draft: z.boolean().default(false),
      // Cover image — shown as the article hero and as the index-card vignette.
      hero: image().optional(),
      heroAlt: z.string().optional(),
      heroCaption: z.string().optional(),
    }),
});

export const collections = { '4d': fourd };
