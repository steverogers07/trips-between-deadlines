import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllTrips, getTripSlug } from '../lib/trips';

export async function GET(context: APIContext) {
  const trips = await getAllTrips('en');

  return rss({
    title: 'Trips Between Deadlines',
    description: 'Real travel experiences, honest costs, and practical tips from a tech professional who travels between deadlines.',
    site: context.site!.href,
    items: trips.map((trip) => ({
      title: trip.data.title,
      pubDate: trip.data.date,
      description: trip.data.description,
      link: `/en/trips/${getTripSlug(trip)}`,
    })),
    customData: '<language>en-us</language>',
  });
}
