import React from 'react';
import { Plane, Coffee, Calendar, ChevronDown, Sparkles, Navigation } from 'lucide-react';
import { FlightRadarWidget } from './FlightRadarWidget';
import logoImg from '../assets/logo.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0B1F3A]">
      {/* Background Image Overlay with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920"
          alt="Altitud Coffee Aviation Lounge"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform animate-cloud"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/80" />
      </div>

      {/* Decorative Flight Runway Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-dashed border-r border-[#5DADE2] animate-runway" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] border-r border-[#C9A227]/40" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] border-r border-[#C9A227]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Brand Badge with Official Emblem */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C9A227] p-0.5 shadow-[0_0_20px_rgba(201,162,39,0.4)] overflow-hidden bg-[#0B1F3A] flex-shrink-0">
                <img
                  src={logoImg}
                  alt="Altitud Coffee Logo Emblem"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="inline-flex flex-col space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] text-xs font-mono tracking-wider uppercase backdrop-blur-sm">
                  <Plane className="w-3.5 h-3.5 animate-bounce" />
                  <span>CAFETERÍA DE ESPECIALIDAD & AVIACIÓN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                </div>
                <span className="text-xs font-mono text-[#5DADE2] tracking-widest uppercase pl-1">
                  SELLO OFICIAL • SABORES QUE DESPEGAN
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Despega hacia una{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DADE2] via-[#F8F9F9] to-[#C9A227]">
                experiencia única
              </span>{' '}
              de café.
            </h1>

            {/* Subtitle */}
            <p className="font-poppins text-lg sm:text-xl text-[#BFC9CA] max-w-2xl font-light leading-relaxed">
              Disfruta café de especialidad inspirado en la pasión por volar y descubrir nuevos destinos.
              Cada taza es un itinerario de aromas, tuestes de alta altitud y primera clase.
            </p>

            {/* Sub-slogan pill */}
            <div className="flex items-center space-x-3 text-white/90 italic font-serif text-sm sm:text-base border-l-2 border-[#C9A227] pl-4 py-1">
              <Sparkles className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
              <span>"Cada taza, un nuevo destino."</span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA: Explore Menu */}
              <a
                href="#menu"
                className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-[#d8b438] hover:shadow-[#C9A227]/25 active:scale-95 transition-all"
              >
                <Coffee className="w-5 h-5" />
                <span>Explorar Menú</span>
                <Plane className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#0B1F3A]" />
              </a>

              {/* Secondary CTA: Reserve Table */}
              <button
                onClick={onOpenReservation}
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl border-2 border-white/20 hover:border-[#5DADE2] bg-white/5 hover:bg-white/10 text-white font-montserrat font-bold text-sm uppercase tracking-wider backdrop-blur-sm active:scale-95 transition-all"
              >
                <Calendar className="w-5 h-5 text-[#5DADE2]" />
                <span>Reserva tu Mesa</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <div className="font-montserrat font-bold text-2xl text-white">2,400<span className="text-[#C9A227] text-lg">m</span></div>
                <div className="text-xs text-[#BFC9CA]">Altitud de Cultivo</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-2xl text-white">100<span className="text-[#5DADE2] text-lg">%</span></div>
                <div className="text-xs text-[#BFC9CA]">Arábica Orgánico</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-2xl text-white">12<span className="text-[#C9A227] text-lg">+</span></div>
                <div className="text-xs text-[#BFC9CA]">Fórmulas de Vuelo</div>
              </div>
            </div>

          </div>

          {/* Right Column: Flight Telemetry & Radar Widget */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing flight halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A227] to-[#5DADE2] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <FlightRadarWidget />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#historia"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 text-white/60 hover:text-[#C9A227] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Iniciar Vuelo</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
