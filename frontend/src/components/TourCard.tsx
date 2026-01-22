import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/types';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const imageUrl = tour.featured_image?.data?.attributes?.url || '/placeholder.jpg';

  return (
    <div className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-700 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        {tour.region && (
            <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
            {tour.region}
            </div>
        )}
        <Image
          src={imageUrl}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
        <h3 className="absolute bottom-6 left-6 text-white font-display text-2xl font-bold tracking-wide">{tour.title}</h3>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-4">
          <span className="flex items-center gap-1">⏱ {tour.duration}</span>
          <span className="flex items-center gap-1">📏 {tour.distance}</span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed flex-grow line-clamp-3">
          {tour.excerpt}
        </p>

        <Link href={`/tours/${tour.slug}`} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group-hover:underline decoration-2 underline-offset-4 uppercase text-sm tracking-wide">
          View Itinerary <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}
