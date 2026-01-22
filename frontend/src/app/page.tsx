import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import { getTours } from '@/lib/api';

export default async function Home() {
  const tours = await getTours();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <Hero />

      <section className="py-24 px-4 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Signature Routes</h2>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Discover the beauty of Southern India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
