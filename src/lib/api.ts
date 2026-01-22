import { Global, Motorcycle, StrapiResponse, Tour, StrapiSingleResponse } from "./types";
import { mockGlobal, mockMotorcycles, mockTours } from "./mock-data";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null | undefined) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return getStrapiURL(url);
}

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, string | number | boolean | null | undefined> = {},
  options: RequestInit = {}
): Promise<T> {
  // Merge default and user options
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
  };

  const mergedOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  // Build query string
  const queryString = Object.keys(urlParamsObject)
    .filter((key) => urlParamsObject[key] != null)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(urlParamsObject[key]))}`)
    .join("&");

  const requestUrl = getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  );

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText} (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch API error for ${requestUrl}:`, error);
    throw error;
  }
}

export async function getGlobalSettings(): Promise<Global> {
  try {
    const res = await fetchAPI<StrapiSingleResponse<Global>>("/global", {
      populate: "*",
    }, { next: { revalidate: 60 } });
    return res.data?.attributes || mockGlobal;
  } catch (e) {
    console.warn("Failed to fetch global settings, falling back to mock.", e);
    return mockGlobal;
  }
}

export async function getTours(): Promise<Tour[]> {
  try {
    const res = await fetchAPI<StrapiResponse<Tour>>("/tours", {
      populate: "*",
    }, { next: { revalidate: 60 } });
    // Strapi response data is an array of objects with id and attributes
    return res.data.map((item) => item.attributes);
  } catch (e) {
    console.warn("Failed to fetch tours, falling back to mock.", e);
    return mockTours;
  }
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  try {
    const res = await fetchAPI<StrapiResponse<Tour>>("/tours", {
      "filters[slug][$eq]": slug,
      populate: "*",
    }, { next: { revalidate: 60 } });
    return res.data[0]?.attributes || null;
  } catch (e) {
    console.warn("Failed to fetch tour by slug, falling back to mock.", e);
    return mockTours.find((t) => t.slug === slug) || null;
  }
}

export async function getMotorcycles(): Promise<Motorcycle[]> {
    // There is no endpoint for motorcycles in the instructions, so we keep using mock
    // or we could try to fetch if it existed.
    return mockMotorcycles;
}
