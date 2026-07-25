import React, { useState } from 'react';
import { Plane, Coffee, Mail, CheckCircle2, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-[#C9A227]/30 pt-16 pb-12 font-poppins relative overflow-hidden">
      
      {/* Background flight track pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-radial from-transparent via-[#5DADE2] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.3)] overflow-hidden bg-[#0B1F3A] flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Altitud Coffee Logo Principal"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-montserrat font-extrabold text-2xl tracking-wider">
                ALTITUD <span className="text-[#C9A227] font-light">COFFEE</span>
              </span>
            </div>

            <p className="text-xs text-[#BFC9CA] leading-relaxed max-w-sm">
              Cafetería temática inspirada en la pasión por volar y el café de especialidad. Cada taza representa un viaje y cada visita ofrece una experiencia de primera clase.
            </p>

            <div className="text-xs font-mono text-[#5DADE2] italic">
              "Cada taza, un nuevo destino."
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-[#C9A227] uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-xs text-[#BFC9CA]">
              <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#historia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menú Interactivo</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#ventajas" className="hover:text-white transition-colors">Ventajas</a></li>
            </ul>
          </div>

          {/* Experience Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-[#C9A227] uppercase tracking-wider">Experiencia</h4>
            <ul className="space-y-2 text-xs text-[#BFC9CA]">
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería Terminal</a></li>
              <li><a href="#opiniones" className="hover:text-white transition-colors">Reseñas de Pilotos</a></li>
              <li><a href="#reserva" className="hover:text-white transition-colors">Reserva de Mesa</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">Ubicación GPS</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-montserrat font-bold text-sm text-[#C9A227] uppercase tracking-wider">Itinerario de Nuevos Granos</h4>
            <p className="text-xs text-[#BFC9CA]">
              Suscríbete a nuestro boletín para recibir noticias sobre lanzamientos de micro-lotes exclusivos y ofertas First Class.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico..."
                  className="w-full px-4 py-2.5 rounded-l-xl bg-white/5 border border-white/10 text-xs focus:outline-none focus:border-[#C9A227]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-r-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-extrabold text-xs uppercase"
                >
                  Unirse
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center space-x-1 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>¡Suscripción exitosa al itinerario!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom Rights & Privacy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#BFC9CA] font-mono space-y-4 md:space-y-0">
          <div>
            © 2026 Altitud Coffee Inc. Todos los derechos reservados. Inspirado en la aviación & café de especialidad.
          </div>

          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
