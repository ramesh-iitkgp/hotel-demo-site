export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-2">
            <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">Reservations</span>
            <h2 className="font-display text-4xl text-cream mb-8">Secure Your Stay</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">First Name</label>
                  <input type="text" className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Message or Special Requests</label>
                <textarea rows={4} className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm"></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-gold text-charcoal font-medium tracking-widest uppercase text-xs hover:bg-cream transition-colors duration-300 w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="bg-charcoal p-8 lg:p-10 border border-cream/5 h-fit">
            <h3 className="font-display text-2xl text-cream mb-6">Contact Us</h3>
            <div className="space-y-6 text-sm text-cream/60">
              <div className="flex items-start gap-4">
                <iconify-icon icon="solar:map-point-linear" width="20" class="text-gold mt-1"></iconify-icon>
                <p>123 Historic Main Street<br />Old Town District<br />State, Zip Code</p>
              </div>
              <div className="flex items-center gap-4">
                <iconify-icon icon="solar:phone-calling-linear" width="20" class="text-gold"></iconify-icon>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <iconify-icon icon="solar:letter-linear" width="20" class="text-gold"></iconify-icon>
                <p>concierge@gerrishhotel.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cream/10">
              <h4 className="font-display text-cream mb-4">Follow Us</h4>
              <div className="flex gap-4 text-cream/50">
                <a href="#" className="hover:text-gold transition-colors"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
                <a href="#" className="hover:text-gold transition-colors"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
                <a href="#" className="hover:text-gold transition-colors"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
