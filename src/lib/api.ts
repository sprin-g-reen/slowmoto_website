import { Global, Motorcycle, StrapiResponse, Tour, StrapiSingleResponse } from "./types";
import { mockGlobal, mockMotorcycles, mockTours } from "./mock-data";

export function getStrapiURL(path = "") {
  return `${
    "https://whimsical-badge-f41b91c26a.strapiapp.com"
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

const STRAPI_TOKEN = '0cec9e46c16f27e945bdac58e7ea4bf9db1213d89c58c6bea04412f2a45a84db9ceb44d08e852de33b8f941d0bdf61dd59566d80890e02352e7abc55a5794ebf1f1142af4e522609c526ecc3e36e2de6d75fae4a978f55f44eeec4b8b95d1eb012c65b7b03c40698652ea415fab97d6b30c6aeb053120732ed7a031199b68e9a';

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
    // console.error(`Fetch API error for ${requestUrl}:`, error);
    throw error;
  }
}

export async function getGlobalSettings(): Promise<Global> {
  try {
    const res = await fetchAPI<StrapiSingleResponse<Global>>("/global", {
      populate: "*",
    }, { next: { revalidate: 60 } });
    // Handle both nested attributes (Strapi v4) and flat structure (Strapi v5)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = res.data as any;
    return data?.attributes || data || mockGlobal;
  } catch (e) {
    if (e instanceof Error && e.message.includes("404")) {
      console.log("Global settings not found in API, using local mock data.");
    } else {
      console.warn("Failed to fetch global settings, falling back to mock.", e instanceof Error ? e.message : e);
    }
    return mockGlobal;
  }
}

export async function getTours(): Promise<Tour[]> {
  try {
    const res = await fetchAPI<StrapiResponse<Tour>>("/tours", {
      populate: "*",
    }, { next: { revalidate: 60 } });
    // Strapi response data is an array of objects with id and attributes
    // Handle both nested attributes (Strapi v4) and flat structure (Strapi v5)
    return res.data.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = item as any;
      return data.attributes || data;
    });
  } catch (e) {
    if (e instanceof Error && e.message.includes("404")) {
      console.log("Tours not found in API, using local mock data.");
    } else {
      console.warn("Failed to fetch tours, falling back to mock.", e instanceof Error ? e.message : e);
    }
    return mockTours;
  }
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  try {
    const res = await fetchAPI<StrapiResponse<Tour>>("/tours", {
      "filters[slug][$eq]": slug,
      populate: "*",
    }, { next: { revalidate: 60 } });
    const item = res.data[0];
    if (!item) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = item as any;
    return data.attributes || data || null;
  } catch (e) {
    if (e instanceof Error && e.message.includes("404")) {
      console.log(`Tour not found in API for slug "${slug}", using local mock data if available.`);
    } else {
      console.warn("Failed to fetch tour by slug, falling back to mock.", e instanceof Error ? e.message : e);
    }
    return mockTours.find((t) => t.slug === slug) || null;
  }
}

export async function getMotorcycles(): Promise<Motorcycle[]> {
    // There is no endpoint for motorcycles in the instructions, so we keep using mock
    // or we could try to fetch if it existed.
    return mockMotorcycles;
}
