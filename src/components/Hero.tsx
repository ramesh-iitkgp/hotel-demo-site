export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80" alt="The Gerrish Hotel Exterior" className="w-full h-full object-cover opacity-50 scale-105 animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="py-1 px-3 border border-gold/30 rounded-full text-[10px] tracking-[0.2em] uppercase text-gold">Est. 1924</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium tracking-tight leading-tight mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A Legacy of <br />
          <span className="text-gold italic">Timeless Comfort</span>
        </h1>
        
        <p className="text-cream/70 text-base md:text-lg max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Welcome to The Gerrish. Where historic charm meets modern luxury in the heart of the city. Experience hospitality reimagined.
        </p>

        <div className="bg-charcoal-light/90 backdrop-blur-md border border-cream/10 p-4 rounded-lg md:rounded-full inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up shadow-2xl" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-start px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-cream/10 pb-2 md:pb-0">
            <label className="text-[10px] uppercase tracking-wider text-gold mb-1">Check In</label>
            <input type="date" className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-32 cursor-pointer font-display" />
          </div>
          <div className="flex flex-col items-start px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-cream/10 pb-2 md:pb-0">
            <label className="text-[10px] uppercase tracking-wider text-gold mb-1">Check Out</label>
            <input type="date" className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-32 cursor-pointer font-display" />
          </div>
          <div className="flex flex-col items-start px-4 w-full md:w-auto pb-2 md:pb-0">
            <label className="text-[10px] uppercase tracking-wider text-gold mb-1">Guests</label>
            <select className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-24 cursor-pointer font-display" defaultValue="2">
              <option value="1" className="bg-charcoal">1 Guest</option>
              <option value="2" className="bg-charcoal">2 Guests</option>
              <option value="3" className="bg-charcoal">3 Guests</option>
              <option value="4" className="bg-charcoal">4+ Guests</option>
            </select>
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-gold text-charcoal font-medium text-sm tracking-wide rounded-full hover:bg-cream transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <iconify-icon icon="solar:mouse-minimalistic-linear" width="24" class="text-cream" style={{ strokeWidth: 1.5 }}></iconify-icon>
      </div>
    </section>
  );
}
