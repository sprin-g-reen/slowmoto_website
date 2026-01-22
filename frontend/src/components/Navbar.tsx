import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur shadow-sm dark:bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-display font-bold text-primary">
              SLOW MOTO TOURS
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-primary transition-colors text-text-main dark:text-text-light font-bold text-sm tracking-wide uppercase">Home</Link>
              <Link href="/tours" className="hover:text-primary transition-colors text-text-main dark:text-text-light font-bold text-sm tracking-wide uppercase">Tours</Link>
              <Link href="/motorcycles" className="hover:text-primary transition-colors text-text-main dark:text-text-light font-bold text-sm tracking-wide uppercase">Motorcycles</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
