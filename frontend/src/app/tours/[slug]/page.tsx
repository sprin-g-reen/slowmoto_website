import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTourBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const imageUrl = tour.featured_image?.data?.attributes?.url || '/placeholder.jpg';

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={imageUrl}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{tour.title}</h1>
                <div className="flex gap-4 justify-center text-white/90 text-sm md:text-base font-bold uppercase tracking-wider">
                    <span>{tour.duration}</span>
                    <span>•</span>
                    <span>{tour.distance}</span>
                    <span>•</span>
                    <span>{tour.region}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose dark:prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: tour.content }} />
        </div>

        {tour.price_includes && (
            <div className="mt-16 p-8 bg-surface-light dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                <h3 className="text-2xl font-display font-bold mb-6">What&apos;s Included</h3>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: tour.price_includes }} />
            </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
