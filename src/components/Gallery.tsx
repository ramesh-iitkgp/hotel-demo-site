export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Hotel Interior" },
    { src: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80", alt: "Coffee" },
    { src: "https://images.unsplash.com/photo-1590073242678-cfe4f25c6b62?w=800&q=80", alt: "Lounge" },
    { src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80", alt: "Exterior Night" }
  ];

  return (
    <section id="gallery" className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-4 h-[600px] md:h-[500px]">
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden h-full">
            <img src={img.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.alt} />
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
