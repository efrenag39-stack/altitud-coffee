import React from 'react';
import { specialtiesData } from '../data/specialtiesData';
import { MenuItem } from '../types';
import { Plane, Compass, Sparkles, ShoppingBag, Mountain, ShieldAlert } from 'lucide-react';

interface SpecialtiesProps {
  onAddToCart: (item: MenuItem) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesProps> = ({ onAddToCart }) => {
  return (
    <section id="especialidades" className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
      
      {/* Decorative Radar Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-10 top-10 w-96 h-96 rounded-full border-2 border-[#5DADE2] animate-ping" />
        <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full border-2 border-[#C9A227]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-xs font-mono tracking-widest uppercase">
            <Plane className="w-4 h-4" />
            <span>FIRMAS EXCLUSIVAS DE LA FLOTA</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Especialidades de la <span className="text-[#C9A227]">Casa</span>
          </h2>

          <p className="font-poppins text-[#BFC9CA] text-base sm:text-lg max-w-2xl mx-auto">
            Recetas de autor inspiradas en la aviación comercial y ejecutiva. Cada trago es formulado con perfiles sensoriales de precisión.
          </p>
        </div>

        {/* 8 Aviation Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialtiesData.map((spec) => (
            <div
              key={spec.id}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A227] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-2"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />

                  {/* Flight Code Tag */}
                  <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-[#5DADE2] border border-[#5DADE2]/30 shadow">
                    {spec.code}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#C9A227] text-[#0B1F3A] font-montserrat font-black text-sm px-3 py-1 rounded-xl shadow">
                    ${spec.price.toFixed(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs text-[#5DADE2] font-mono font-semibold">
                    <Mountain className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Altitud: {spec.altitude}</span>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-white group-hover:text-[#C9A227] transition-colors">
                    {spec.name}
                  </h3>

                  <p className="text-xs text-[#5DADE2] font-mono italic">
                    {spec.subtitle}
                  </p>

                  <p className="text-xs text-[#BFC9CA] font-poppins leading-relaxed line-clamp-3">
                    {spec.description}
                  </p>

                  {/* Flight Tasting Notes Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {spec.flightNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-gray-300 border border-white/5"
                      >
                        • {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() =>
                    onAddToCart({
                      id: spec.id,
                      name: spec.name,
                      description: spec.description,
                      price: spec.price,
                      category: 'Especialidades',
                      image: spec.image,
                      altitude: spec.altitude,
                      recommended: true,
                      firstClass: true,
                    })
                  }
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#d8b438] text-[#0B1F3A] font-montserrat font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pedir Especialidad</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
