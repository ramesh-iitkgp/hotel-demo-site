export default function Amenities() {
  const amenities = [
    { icon: "solar:cup-hot-linear", title: "Daily Breakfast", desc: "Locally sourced continental breakfast served daily in the Garden Room." },
    { icon: "solar:bell-bing-linear", title: "24/7 Concierge", desc: "Dedicated staff available around the clock to assist with your needs." },
    { icon: "solar:wheel-angle-linear", title: "Valet Parking", desc: "Secure, convenient parking services for all our guests." },
    { icon: "solar:paw-linear", title: "Pet Friendly", desc: "We welcome your four-legged companions in select rooms." }
  ];

  return (
    <section id="amenities" className="py-24 bg-charcoal border-y border-cream/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-cream/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                <iconify-icon icon={item.icon} width="32"></iconify-icon>
              </div>
              <h3 className="font-display text-lg text-cream mb-2">{item.title}</h3>
              <p className="text-cream/50 text-xs font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
