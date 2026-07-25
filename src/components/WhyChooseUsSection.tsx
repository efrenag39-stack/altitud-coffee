import React from 'react';
import { Award, UserCheck, Armchair, Wifi, Laptop, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-[#C9A227]" />,
      title: 'Café de Especialidad 100% Arábica',
      description: 'Granos de estricta altitud (1,800m+), seleccionados a mano con puntaje Q-Grader superior a 86 puntos.',
      code: 'INST-01'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#5DADE2]" />,
      title: 'Baristas Certificados (Pilotos)',
      description: 'Nuestros baristas cuentan con certificación internacional SCA y domina técnicas de extracción de alta precisión.',
      code: 'INST-02'
    },
    {
      icon: <Armchair className="w-8 h-8 text-[#C9A227]" />,
      title: 'Ambiente Temático de Aviación',
      description: 'Diseño interior inspirado en salas First Class, instrumentos aeronáuticos vintage e iluminación regulada.',
      code: 'INST-03'
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#5DADE2]" />,
      title: 'Wi-Fi Simétrico de Alta Velocidad',
      description: 'Red de fibra óptica dedicada de 300 Mbps con enrutadores independientes en cada zona de la cafetería.',
      code: 'INST-04'
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#C9A227]" />,
      title: 'Espacios Co-Working & Enchufes',
      description: 'Mesas ejecutivas ergonómicas con contactos universales, puertos USB-C y lámparas de lectura modulables.',
      code: 'INST-05'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#5DADE2]" />,
      title: 'Ingredientes Frescos & Artesanales',
      description: 'Panadería y repostería horneada cada mañana, leches orgánicas y siropes naturales elaborados en casa.',
      code: 'INST-06'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#C9A227]" />,
      title: 'Atención Primera Clase',
      description: 'Servicio cálido y personalizado enfocado en que cada visita se sienta como un viaje placentero e inolvidable.',
      code: 'INST-07'
    }
  ];

  return (
    <section id="ventajas" className="py-24 bg-white dark:bg-[#071526] text-[#0B1F3A] dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 text-[#0B1F3A] dark:text-[#5DADE2] text-xs font-mono tracking-widest uppercase">
            <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
            <span>EXCELENCIA EN CADA DETALLE</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            ¿Por qué elegir <span className="text-[#C9A227]">Altitud Coffee</span>?
          </h2>

          <p className="font-poppins text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Combinamos los más altos estándares de calidad en café de especialidad con una experiencia de hospitalidad inspirada en la primera clase de la aviación mundial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="bg-gray-50 dark:bg-[#0B1F3A] p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-[#C9A227] transition-all duration-300 group shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              {/* Top Instrument Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <span className="font-mono text-[10px] text-[#5DADE2] font-bold tracking-widest uppercase bg-white dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-white/10">
                  {benefit.code}
                </span>
              </div>

              <h3 className="font-montserrat font-bold text-xl text-[#0B1F3A] dark:text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
