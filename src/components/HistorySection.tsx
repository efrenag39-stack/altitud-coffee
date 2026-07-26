import React from 'react';
import { Plane, Coffee, Compass, Gift, Calendar, Sparkles, CheckCircle2, Tag, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import hangarImg from '../assets/hangar_coffee_shop.jpg';

export const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-[#F8F9F9] dark:bg-[#071526] text-[#0B1F3A] dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 text-[#0B1F3A] dark:text-[#5DADE2] text-xs font-mono tracking-widest uppercase">
            <Compass className="w-4 h-4 text-[#C9A227]" />
            <span>NUESTRO ORIGEN & PASIÓN</span>
          </div>
          
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Nuestra <span className="text-[#C9A227]">Historia</span>
          </h2>

          <p className="font-poppins text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Altitud Coffee nació de la pasión de un capitán de aviación y un maestro tostador que descubrieron que, así como volar requiere precisión y temple, extraer el café perfecto es una ciencia de altura.
          </p>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/30 group">
              <img
                src={hangarImg}
                alt="Origen Altitud Coffee Hangar 01 Interior Cafetería Aviación"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-mono text-[#5DADE2] uppercase">Hangar 01 • Bitácora de Vuelo</span>
                <h3 className="font-montserrat font-bold text-xl">Donde la Aviación y el Café Convergen</h3>
                <p className="text-xs text-[#BFC9CA] font-light">
                  "El café de altura comparte la misma esencia de la aviación: perspectiva, rigor y la búsqueda constante del horizonte perfecto."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1F3A] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <h3 className="font-montserrat font-bold text-xl text-[#0B1F3A] dark:text-white flex items-center space-x-2">
                <Plane className="w-5 h-5 text-[#C9A227]" />
                <span>La Filosofía del Vuelo</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
                Seleccionamos exclusivamente cerezas de café cultivadas en regiones montañosas por encima de los 1,800 metros sobre el nivel del mar. A mayor altitud, el grano madura más lentamente, acumulando azúcares naturales y complejidades aromáticas insuperables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1F3A] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <h3 className="font-montserrat font-bold text-xl text-[#0B1F3A] dark:text-white flex items-center space-x-2">
                <Coffee className="w-5 h-5 text-[#5DADE2]" />
                <span>Control de Vuelo Barista</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
                Cada uno de nuestros baristas es capacitado bajo rigurosos protocolos de aviación: control exacto de temperatura de extracción, dosificación milimétrica y presión de bomba a 9 bares continuos.
              </p>
            </div>
          </div>

        </div>

        {/* Martes de Aviones a Escala - Promo Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0F294A] to-[#071526] border-2 border-[#C9A227] p-8 sm:p-12 shadow-[0_15px_50px_rgba(201,162,39,0.25)] overflow-hidden">
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-[#5DADE2]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Promo Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] text-xs font-mono font-bold tracking-widest uppercase">
                <Calendar className="w-4 h-4 animate-pulse" />
                <span>PROMOCIÓN EXCLUSIVA • TODOS LOS MARTES</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Martes de <span className="text-[#C9A227]">Aviones a Escala</span>
                </h3>
                <p className="text-[#5DADE2] font-mono text-sm sm:text-base font-semibold">
                  Obtén una réplica metálica de colección en consumos superiores a $50 USD
                </p>
              </div>

              <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                ¡Lleva tu pasión por volar al siguiente nivel! Todos los martes, por consumos en mesa o pedidos superiores a <span className="text-[#C9A227] font-bold">$50.00 USD</span>, te regalamos un modelo de avión a escala metálico de colección con soporte de exhibición de edición limitada Altitud Coffee.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start space-x-2.5 bg-white/5 border border-white/10 p-3 rounded-xl">
                  <Gift className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase font-montserrat">Avión Die-Cast Metálico</h4>
                    <p className="text-[11px] text-gray-300">Modelos comerciales y clásicos de colección.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 bg-white/5 border border-white/10 p-3 rounded-xl">
                  <Tag className="w-5 h-5 text-[#5DADE2] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase font-montserrat">Consumo Mínimo</h4>
                    <p className="text-[11px] text-gray-300">Aplica en ticket de $50 USD o más por mesa.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#reserva"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#b8921f] text-[#0B1F3A] font-montserrat font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#C9A227]/40 transition-all transform hover:-translate-y-0.5"
                >
                  <Plane className="w-4 h-4" />
                  <span>Reservar Mesa para este Martes</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-[11px] text-gray-400 font-mono italic">
                  *Hasta agotar existencias semanales.
                </span>
              </div>
            </div>

            {/* Promo Graphic Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#C9A227]/60 shadow-2xl group bg-[#0B1F3A]">
                
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800"
                  alt="Modelo Avión a Escala de Colección"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />

                {/* Floating Official Emblem Logo Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-[#C9A227] bg-[#0B1F3A] p-0.5 shadow-lg overflow-hidden flex items-center justify-center">
                  <img src={logoImg} alt="Altitud Coffee Seal" className="w-full h-full object-cover rounded-full" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#C9A227] text-[#0B1F3A] text-[10px] font-mono font-bold uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>Regalo Exclusivo First Class</span>
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-white">
                    Colección Oficial Altitud Coffee
                  </h4>
                  <p className="text-xs text-gray-300">
                    Incluye pedestal metálico grabado y certificado de edición limitada.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

