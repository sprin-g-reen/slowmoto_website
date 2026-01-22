import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Motorcycle touring in India"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="text-white/90 text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
          Discover Real India
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight animate-fade-in-up animation-delay-200">
          Slow Moto Tours
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-400">
          Guided Royal Enfield motorcycle tours through the breathtaking landscapes of Southern India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Link
            href="/tours"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-none transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Explore Tours
          </Link>
          <Link
            href="/motorcycles"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold rounded-none transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Our Bikes
          </Link>
        </div>
      </div>
    </div>
  );
}
