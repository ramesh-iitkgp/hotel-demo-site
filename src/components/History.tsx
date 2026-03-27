export default function History() {
  return (
    <section id="history" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80" alt="Hotel Lobby" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-charcoal-light border border-gold/20 p-6 flex flex-col justify-center items-center text-center">
              <span className="font-display text-4xl text-gold mb-1">100</span>
              <span className="text-[10px] tracking-widest uppercase text-cream/60">Years of<br />Excellence</span>
            </div>
          </div>
          <div>
            <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-4">Our Heritage</span>
            <h2 className="font-display text-3xl md:text-5xl text-cream mb-6 leading-tight">Authentic Charm <br /> in Every Detail</h2>
            <p className="text-cream/60 leading-relaxed mb-6 font-light">
              Since opening its doors, The Gerrish has been a beacon of hospitality. Restored to its original grandeur, the hotel blends the architectural beauty of the past with the sophisticated amenities of the present.
            </p>
            <p className="text-cream/60 leading-relaxed mb-8 font-light">
              Whether you are visiting for business or leisure, our dedicated staff ensures a stay that is as memorable as it is comfortable. Experience the unique character of our historic property.
            </p>
            <a href="#rooms" className="inline-flex items-center text-cream hover:text-gold transition-colors duration-300 group">
              <span className="text-sm tracking-widest uppercase border-b border-cream/30 group-hover:border-gold pb-1">View Accommodations</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
