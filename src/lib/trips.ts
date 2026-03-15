import { getCollection, type CollectionEntry } from 'astro:content';

export type Trip = CollectionEntry<'trips'>;

export async function getAllTrips(locale = 'en'): Promise<Trip[]> {
  const trips = await getCollection('trips', (entry) => {
    return entry.data.locale === locale && !entry.data.draft;
  });
  return trips.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getFeaturedTrips(locale = 'en'): Promise<Trip[]> {
  const trips = await getAllTrips(locale);
  const featured = trips.filter((t) => t.data.featured);
  return featured.length > 0 ? featured : trips.slice(0, 3);
}

export async function getTripsByCategory(category: 'india' | 'international', locale = 'en'): Promise<Trip[]> {
  const trips = await getAllTrips(locale);
  return trips.filter((t) => t.data.category === category);
}

export async function getRelatedTrips(currentTrip: Trip, locale = 'en', limit = 3): Promise<Trip[]> {
  const trips = await getAllTrips(locale);
  return trips
    .filter((t) => t.id !== currentTrip.id)
    .filter((t) => {
      const sharedTags = t.data.tags.filter((tag) => currentTrip.data.tags.includes(tag));
      return sharedTags.length > 0 || t.data.category === currentTrip.data.category;
    })
    .slice(0, limit);
}

export function getTripSlug(trip: Trip): string {
  return trip.id.replace(/^en\/|^hi\//, '');
}
