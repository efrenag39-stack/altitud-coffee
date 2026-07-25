import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Instagram, Facebook, Twitter, Globe, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-white dark:bg-[#071526] text-[#0B1F3A] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 text-[#0B1F3A] dark:text-[#5DADE2] text-xs font-mono tracking-widest uppercase">
            <Compass className="w-4 h-4 text-[#C9A227]" />
            <span>TERMINAL PRINCIPAL & RUTA DE LLEGADA</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Ubicación & <span className="text-[#C9A227]">Horarios</span>
          </h2>

          <p className="font-poppins text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Encuéntranos en la zona ejecutiva. Contamos con estacionamiento, acceso accesible y valet parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact & Hours Info */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="bg-gray-50 dark:bg-[#0B1F3A] p-8 rounded-3xl border border-gray-200 dark:border-white/10 space-y-6 shadow-sm">
              <h3 className="font-montserrat font-bold text-xl text-[#0B1F3A] dark:text-white border-b border-gray-200 dark:border-white/10 pb-3 flex items-center justify-between">
                <span>Coordenadas de Destino</span>
                <span className="text-xs font-mono text-[#C9A227]">19.4326° N, 99.1332° W</span>
              </h3>

              {/* Direction */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#C9A227] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B1F3A] dark:text-white">Dirección Terminal</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-poppins mt-1">
                    Av. de la Aviación No. 1050, Hangar 4,<br />
                    Zona Ejecutiva Terminal, CP 06600
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#5DADE2] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B1F3A] dark:text-white">Horarios de Vuelo (Atención)</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-poppins mt-1">
                    <strong>Lunes a Viernes:</strong> 07:00 AM – 10:00 PM<br />
                    <strong>Sábados y Domingos:</strong> 08:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#C9A227] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-[#0B1F3A] dark:text-white">Contacto Directo</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-poppins mt-1">
                    Teléfono: +52 (55) 8844-7470<br />
                    Correo: contacto@altitudcoffee.com
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">REDES SOCIALES</span>
                <div className="flex space-x-3 text-[#0B1F3A] dark:text-white">
                  <a href="#" className="p-2 rounded-xl bg-white dark:bg-white/5 hover:text-[#C9A227] transition-colors border border-gray-200 dark:border-white/10">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-xl bg-white dark:bg-white/5 hover:text-[#5DADE2] transition-colors border border-gray-200 dark:border-white/10">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-xl bg-white dark:bg-white/5 hover:text-[#C9A227] transition-colors border border-gray-200 dark:border-white/10">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Stylized Radar Interactive Map */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border-2 border-[#C9A227]/30 shadow-xl bg-[#0B1F3A] text-white p-6 flex flex-col justify-between">
              
              {/* Map background image overlay */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Mapa de Vuelo Altitud Coffee"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />

              {/* Radar Grid overlay */}
              <div className="absolute inset-0 bg-radial from-transparent via-[#0B1F3A]/70 to-[#0B1F3A]" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-[#0B1F3A]/90 px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Navegador de Terminal Activo</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir GPS</span>
                </a>
              </div>

              {/* Map Pin Point Graphic */}
              <div className="relative z-10 my-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 border-2 border-[#C9A227] flex items-center justify-center animate-bounce">
                    <MapPin className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <div className="w-12 h-2 bg-black/40 rounded-full blur-xs mx-auto mt-1" />
                </div>
                <div className="bg-[#0B1F3A]/90 border border-[#C9A227]/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl space-y-0.5">
                  <h4 className="font-montserrat font-bold text-base text-white">Altitud Coffee Terminal</h4>
                  <p className="text-xs text-[#5DADE2] font-mono">Hangar 4 • Zona VIP Aeropuerto</p>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-center text-xs font-mono text-gray-400 border-t border-white/10 pt-4">
                <span>ESTACIONAMIENTO GRATUITO DISPONIBLE</span>
                <span className="text-[#5DADE2]">ACCESO ACCESIBLE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
