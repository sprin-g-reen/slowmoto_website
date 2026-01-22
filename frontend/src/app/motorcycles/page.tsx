import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getMotorcycles } from '@/lib/api';
import Image from 'next/image';

export default async function MotorcyclesPage() {
  const motorcycles = await getMotorcycles();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark pt-20">
      <Navbar />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Fleet</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto">Ride with passion and style on our carefully maintained Royal Enfields.</p>
          </div>

          <div className="space-y-24">
            {motorcycles.map((moto, index) => (
              <div key={moto.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="lg:w-1/2 relative h-[400px] w-full">
                   <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-70" />
                   <Image
                     src={moto.image}
                     alt={moto.name}
                     fill
                     className="relative rounded-2xl shadow-2xl object-cover"
                   />
                </div>

                <div className="lg:w-1/2">
                    <h3 className="text-3xl font-display font-bold mb-6">{moto.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                        {moto.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {moto.features.map((feature, idx) => (
                            <li key={idx} className="flex flex-col gap-2">
                                <span className="font-bold text-primary text-lg flex items-center gap-2">
                                    {feature.title}
                                </span>
                                <span className="text-sm text-zinc-500 dark:text-zinc-400">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
