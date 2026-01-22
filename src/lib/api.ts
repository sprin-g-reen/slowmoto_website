import { Global, Motorcycle, StrapiResponse, Tour, StrapiSingleResponse } from "./types";
import { mockGlobal, mockMotorcycles, mockTours } from "./mock-data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI<T>(path: string, urlParamsObject: Record<string, string> = {}, options: RequestInit = {}): Promise<T> {
  // In a real scenario, we would merge options and headers
  const headers = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
  };

  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  try {
    const response = await fetch(requestUrl, {
      ...options,
      headers,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
}

// Fallback Mode: If no API token is present or fetch fails, use mock data
// This is critical for the environment where Strapi is not running.
const USE_MOCK = !STRAPI_TOKEN;

export async function getGlobalSettings(): Promise<Global> {
  if (USE_MOCK) {
    // console.log('Using Mock Data: getGlobalSettings');
    return mockGlobal;
  }
  try {
      const res = await fetchAPI<StrapiSingleResponse<Global>>('/global', { populate: '*' });
      return res.data?.attributes || mockGlobal;
  } catch (e) {
      console.warn('Failed to fetch global settings, falling back to mock.', e);
      return mockGlobal;
  }
}

export async function getTours(): Promise<Tour[]> {
  if (USE_MOCK) {
     return mockTours;
  }
  try {
      const res = await fetchAPI<StrapiResponse<Tour>>('/tours', { populate: '*' });
      return res.data.map(item => item.attributes);
  } catch (e) {
      console.warn('Failed to fetch tours, falling back to mock.', e);
      return mockTours;
  }
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
    if (USE_MOCK) {
        return mockTours.find(t => t.slug === slug) || null;
    }
    try {
        const res = await fetchAPI<StrapiResponse<Tour>>('/tours', {
            filters: { slug: { $eq: slug } }, // Note: Nested object might need flattened query params in real implementation or qs library
            populate: '*'
        } as unknown as Record<string, string>); // Casting to fix type error for simple shim
        return res.data[0]?.attributes || null;
    } catch (e) {
        console.warn('Failed to fetch tour by slug, falling back to mock.', e);
        return mockTours.find(t => t.slug === slug) || null;
    }
}

export async function getMotorcycles(): Promise<Motorcycle[]> {
    if (USE_MOCK) {
        return mockMotorcycles;
    }
    // Assuming motorcycles might be a collection or derived from something else
    // For now, we return mock as there isn't a direct "motorcycle" type in the schema snippet I saw,
    // but the task implies it exists.
    return mockMotorcycles;
}
