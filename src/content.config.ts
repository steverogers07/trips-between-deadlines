import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trips = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    country: z.string(),
    category: z.enum(['india', 'international']),
    region: z.string(),
    duration: z.string(),
    totalCost: z.number(),
    currency: z.string().default('INR'),
    coverImage: z.string(),
    gallery: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    locale: z.string().default('en'),
    accommodation: z.array(z.object({
      name: z.string(),
      costPerNight: z.number(),
      rating: z.number().min(1).max(5),
      bookingLink: z.string().url().optional(),
      mapsLink: z.string().url().optional(),
      pros: z.array(z.string()).default([]),
      cons: z.array(z.string()).default([]),
    })).default([]),
    costBreakdown: z.object({
      accommodation: z.number(),
      food: z.number(),
      transport: z.number(),
      activities: z.number(),
      misc: z.number(),
    }).optional(),
  }),
});

export const collections = { trips };
