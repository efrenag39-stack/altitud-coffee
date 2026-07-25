import React, { useState, useEffect } from 'react';
import { Plane, Coffee, ShoppingBag, Calendar, Menu, X, Sun, Moon, Compass, Radio } from 'lucide-react';
import { CartItem } from '../types';
import logoImg from '../assets/logo.jpg';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenReservation: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenReservation,
  darkMode,
  setDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Historia', href: '#historia' },
    { name: 'Menú', href: '#menu' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Ventajas', href: '#ventajas' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Airport Flight Status Ticker Bar */}
      <div className="bg-[#0B1F3A] text-white/80 text-xs py-1.5 px-4 border-b border-[#C9A227]/20 flex justify-between items-center overflow-hidden">
        <div className="flex items-center space-x-3 text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#C9A227] text-[#0B1F3A]">
            <Radio className="w-3 h-3 mr-1 animate-pulse" /> LIVE DEPARTURES
          </span>
          <span className="hidden sm:inline font-mono text-[#5DADE2]">FL300 • 30,000 FT</span>
          <span className="hidden md:inline font-light">
            VUELO ALT-747: ORIGEN ETIOPÍA YIRGACHEFFE (2,100 M)
          </span>
          <span className="text-[#C9A227] font-medium hidden lg:inline">
            • PRÓXIMO TUESTE EN GATE 4: 10:30 AM
          </span>
        </div>
        <div className="flex items-center space-x-4 text-xs font-mono">
          <span className="hidden sm:inline-block text-[#BFC9CA]">TERMINAL PRINCIPAL: ABIERTO 07:00 - 22:00</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors text-[#5DADE2]"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#C9A227]" /> : <Moon className="w-4 h-4 text-[#5DADE2]" />}
          </button>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled || darkMode
            ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-xl border-b border-[#C9A227]/20 text-white'
            : 'bg-[#F8F9F9]/90 backdrop-blur-md border-b border-gray-200 text-[#0B1F3A]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-full border-2 border-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.3)] group-hover:scale-105 transition-transform overflow-hidden bg-[#0B1F3A] flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Altitud Coffee Logo Principal"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-extrabold text-xl tracking-wider text-[#0B1F3A] dark:text-white flex items-center">
                  ALTITUD <span className="text-[#C9A227] ml-1.5 font-light">COFFEE</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#5DADE2] uppercase">
                  Sabores Que Despegan
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-[#C9A227] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl border border-[#C9A227]/30 hover:bg-[#C9A227]/10 transition-colors group"
                title="Ver carrito de abordo"
              >
                <ShoppingBag className="w-5 h-5 text-[#C9A227] group-hover:scale-110 transition-transform" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#C9A227] text-[#0B1F3A] font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Reserve Table Button */}
              <button
                onClick={onOpenReservation}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#d8b438] text-[#0B1F3A] font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserva tu Mesa</span>
              </button>
            </div>

            {/* Mobile Hamburger Controls */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-lg border border-[#C9A227]/30 text-[#C9A227]"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C9A227] text-[#0B1F3A] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0B1F3A] dark:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1F3A] text-white border-b border-[#C9A227]/30 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-white/90 hover:text-[#C9A227] border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-bold text-sm uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserva tu Mesa</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
