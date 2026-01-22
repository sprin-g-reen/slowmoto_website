import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import { getTours } from '@/lib/api';

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark pt-20">
      <Navbar />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">All Tours</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto">Explore our curated selection of motorcycle adventures designed to show you the real India.</p>
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
