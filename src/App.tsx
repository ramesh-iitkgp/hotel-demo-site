/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-charcoal text-cream font-body antialiased selection:bg-gold selection:text-charcoal">
      <Loader />
      <Header />
      <main>
        <Hero />
        <History />
        <Rooms />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
