export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  id: number;
  attributes: {
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    formats?: {
      small?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      thumbnail?: StrapiImageFormat;
    };
  };
}

export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  } | null;
  meta: Record<string, unknown>;
}

export interface Tour {
  title: string;
  slug: string;
  content: string; // rich text
  excerpt?: string;
  duration?: string;
  distance?: string;
  region?: string;
  price_includes?: string; // rich text
  featured_image?: {
    data: StrapiImage | null;
  };
  gallery?: {
    data: StrapiImage[];
  };
}

export interface Global {
  siteName: string;
  siteDescription: string;
  favicon?: {
    data: StrapiImage | null;
  };
  defaultSeo?: {
    metaTitle: string;
    metaDescription: string;
    shareImage?: {
      data: StrapiImage | null;
    };
  };
}

export interface Article {
  title: string;
  description: string;
  slug: string;
  cover?: {
    data: StrapiImage | null;
  };
  author?: {
    data: {
        attributes: {
            name: string;
            // ... other author fields
        }
    } | null;
  };
  blocks?: unknown[]; // Dynamic zone
}

// Derived type for usage in components
export interface Motorcycle {
  id: number;
  name: string;
  description: string;
  features: {
    icon: string;
    title: string;
    text: string;
  }[];
  image: string;
}
