export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "The Classic",
      price: "199",
      desc: "Our signature room featuring a queen bed, historic details, and modern ensuite bath.",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      icons: ["solar:bed-linear", "solar:bath-linear", "solar:wi-fi-square-linear"]
    },
    {
      id: 2,
      name: "Deluxe King",
      price: "289",
      desc: "Spacious comfort with a king-sized bed, seating area, and city views.",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      icons: ["solar:bed-linear", "solar:sofa-linear", "solar:tv-linear"],
      popular: true
    },
    {
      id: 3,
      name: "The Gerrish Suite",
      price: "450",
      desc: "The ultimate luxury experience with separate living room, kitchenette, and premium amenities.",
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      icons: ["solar:crown-linear", "solar:wine-trash-linear", "solar:city-linear"]
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-charcoal-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">Stay With Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream">Select Accommodations</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                {room.popular && (
                  <div className="absolute top-4 right-4 bg-gold text-charcoal text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Popular</div>
                )}
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">{room.name}</h3>
                <span className="text-cream/50 text-sm">from ${room.price}</span>
              </div>
              <p className="text-cream/60 text-sm mb-4 line-clamp-2">{room.desc}</p>
              <div className="flex gap-4 text-gold/80">
                {room.icons.map((icon, i) => (
                  <iconify-icon key={i} icon={icon} width="20"></iconify-icon>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
