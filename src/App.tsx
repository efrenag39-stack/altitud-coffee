import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { MenuSection } from './components/MenuSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FlightAttendantAssistant } from './components/FlightAttendantAssistant';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode class on root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddToCart = (item: MenuItem, notes?: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        if (notes) updated[existingIndex].notes = notes;
        return updated;
      }
      return [...prevCart, { item, quantity: 1, notes }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reserva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F9] dark:bg-[#071526] text-[#0B1F3A] dark:text-white transition-colors duration-300 flex flex-col font-poppins selection:bg-[#C9A227] selection:text-[#0B1F3A]">
      {/* Global Navigation Header */}
      <Navbar
        cart={cart}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={scrollToReservation}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReservation={scrollToReservation} />
        <HistorySection />
        <MenuSection onAddToCart={handleAddToCart} />
        <SpecialtiesSection onAddToCart={handleAddToCart} />
        <WhyChooseUsSection />
        <GallerySection />
        <ReviewsSection />
        <ReservationSection />
        <LocationSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Slide-over Cart & Order Ticket Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Flight Attendant Interactive Assistant (Valeria) */}
      <FlightAttendantAssistant />
    </div>
  );
}
