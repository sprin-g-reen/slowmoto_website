import { Tour, Motorcycle, Global } from "./types";

export const mockTours: Tour[] = [
  {
    title: 'The Western Ghats',
    slug: 'western-ghats',
    excerpt: 'Traverse breathtaking landscapes. Navigate thrilling hairpin bends from humid jungles to misty tea plantations at altitude.',
    content: '<p>Traverse breathtaking landscapes. Navigate thrilling hairpin bends from humid jungles to misty tea plantations at altitude. This is the ultimate mountain adventure.</p>',
    duration: '12 Days',
    distance: '1200 km',
    region: 'Mountain',
    price_includes: '<ul><li>Bike Rental</li><li>Fuel</li><li>Accommodation</li></ul>',
    featured_image: {
      data: {
        id: 1,
        attributes: {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxn20W0QoADsz_0g-mvllAU4fgYAKKUpl5Yy-BgwT6nQNU-dQtaMTV9548EJuqWZ-xG9t_zvICtDxHwZ1S65KgAmL_kpFFUUeUEJeBBRKr2H3-fwcEag_jbAGK4mnFS9AgZbMX6mvFsHcRCO-dedghmLOoDPgdtXMT5VdYQ12uY9YZzsbTZNkjSFay0URqb66h1iC8xibORM-CYb-5sfEAqfMxDr1MUlJ9qF3EFHtym2lpi1f1Z03Ihx_HkzfAFwNAEl6dnGaWs8u9',
          width: 800,
          height: 600
        }
      }
    }
  },
  {
    title: 'Goa Coastal Run',
    slug: 'goa-coastal',
    excerpt: 'A relaxed cruise starting from vibrant Goa down to the serene beaches of the Arabian Sea. Seafood and Portuguese history.',
    content: '<p>A relaxed cruise starting from vibrant Goa down to the serene beaches of the Arabian Sea. Seafood and Portuguese history await you.</p>',
    duration: '8 Days',
    distance: '800 km',
    region: 'Coastal',
    price_includes: '<ul><li>Bike Rental</li><li>Fuel</li><li>Accommodation</li></ul>',
    featured_image: {
      data: {
        id: 2,
        attributes: {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr1rrYvNhgIVOtRGtYsmyRh9EMoYizquk0Ls2LQdrKSYVVUEg4y649GyXBpBRnp4hnV1EoQV35BORmOdw98uAc4HnAzRtRrbeXjHimgQHhMvtxfp7WtZIznJgC5JA98RcqbqGjlLvcCanLGucjbozt8Sp3jVSy0Lny1Fn-LNfeqY_ibNuUUkc-i6PytqqgGkcW-oS2zzVVy-y6xM6GpOdPG4FblfEW_NxW6o06c5I-UNS8tKDdbe7NrO9G9H7sDWAowD7FXkguJfLw',
          width: 800,
          height: 600
        }
      }
    }
  },
  {
    title: 'Kochi Heritage',
    slug: 'kochi-heritage',
    excerpt: 'Immerse yourself in history. Ride through paddy plains and explore the rich cultural tapestry of Kerala and Tamil Nadu.',
    content: '<p>Immerse yourself in history. Ride through paddy plains and explore the rich cultural tapestry of Kerala and Tamil Nadu.</p>',
    duration: '10 Days',
    distance: '1000 km',
    region: 'Culture',
    price_includes: '<ul><li>Bike Rental</li><li>Fuel</li><li>Accommodation</li></ul>',
    featured_image: {
      data: {
        id: 3,
        attributes: {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC04ITMcH459xFk-I6kY8srTDVY6xnIkkr1rxIlWSZQdtXMsd0Tk7PnQIa9LwmsMoembkYqv9MwkDKG0sMn2RwEsfF3zjKVrVNyySn977oJcRnOKhKojEExuDymdWRj3VhimGItuuULm5NabA9Mjp1kLFa-sydAiTZmgnVaAWmrE38VhtaTw6w-JQ1kyiUzCZ6489UjmqCIXcjls2zsIwXnUZIfGypdXLYt2cz_xZRSOOpGZjaURKt7lURMGdQ4F_tcS9CA0ARCbS3E',
          width: 800,
          height: 600
        }
      }
    }
  }
];

export const mockMotorcycles: Motorcycle[] = [
  {
    id: 1,
    name: 'Royal Enfield Classic 350',
    description: 'The Royal Enfield 350 Classic and Bullet are great cruisers for general Indian road conditions and with their old-school style and one-of-a-kind sound rightly deserve the title of the Indian legend.',
    features: [
      { icon: 'two_wheeler', title: 'Legendary Style', text: 'Get on their saddle and you will feel as if you were born there.' },
      { icon: 'speed', title: 'Power & Control', text: 'Their 20 hp engine is strong enough for mountain curves and safe overtaking.' },
      { icon: 'build', title: 'Expertly Serviced', text: 'All our bikes are serviced by our technician before and during tours.' },
      { icon: 'new_releases', title: 'Modern Fleet', text: 'We procure 2023 or later models for our tours.' }
    ],
    image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=800&q=80'
  }
];

export const mockGlobal: Global = {
  siteName: 'Slow Moto Tours',
  siteDescription: 'Authentic Motorcycle Tours in Southern India',
  defaultSeo: {
    metaTitle: 'Slow Moto Tours | Authentic India',
    metaDescription: 'Guided Royal Enfield motorcycle tours in Southern India.'
  }
};
