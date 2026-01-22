export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-8">SLOW MOTO TOURS</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Authentic motorcycle adventures in Southern India. Ride with us to experience the real culture and landscapes.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Slow Moto Tours. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
