export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border border-gold flex items-center justify-center text-gold font-display">G</div>
          <span className="font-display text-cream text-lg">THE GERRISH</span>
        </div>
        <div className="flex gap-8 text-xs tracking-wider text-cream/50 uppercase">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
        </div>
        <div className="text-cream/30 text-xs font-light">
          &copy; 2024 The Gerrish Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
