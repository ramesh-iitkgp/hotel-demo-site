import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpacity(0);
    }, 1000);
    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 1700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-charcoal z-50 flex items-center justify-center transition-opacity duration-700"
      style={{ opacity }}
    >
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border border-gold/30 rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-2 border border-gold rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-gold text-2xl font-medium tracking-tight">GH</span>
          </div>
        </div>
        <p className="text-gold-light text-xs tracking-widest uppercase animate-pulse">Welcome to The Gerrish</p>
      </div>
    </div>
  );
}
