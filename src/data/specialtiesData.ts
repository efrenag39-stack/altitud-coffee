import { SpecialtyItem } from '../types';

export const specialtiesData: SpecialtyItem[] = [
  {
    id: 'spec-1',
    name: 'Capitán Espresso',
    subtitle: 'Extracción Doble Ristretto • Máxima Potencia',
    description: 'Un espresso intenso y concentrado con cuerpo espeso, crema dorada persistente y un toque sutil de avellana y cítricos dulces.',
    price: 4.80,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    altitude: '2,100 msnm',
    roastLevel: 'Tueste Medio Oscuro',
    flightNotes: ['Cuerpo Intenso', 'Crema Dorada', 'Cacao Oscuro', 'Cítricos'],
    code: 'ALT-CAP01'
  },
  {
    id: 'spec-2',
    name: 'Latte First Class',
    subtitle: 'Textura Sedosa • Vainilla Bourbon de Madagascar',
    description: 'Espresso suave combinado con leche vaporizada a la temperatura exacta de 65°C, infusionado con auténtica vainilla Bourbon y un arte latte de alas de avión.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    altitude: '1,950 msnm',
    roastLevel: 'Tueste Medio',
    flightNotes: ['Vainilla Bourbon', 'Textura Aterciopelada', 'Dulzura Natural'],
    code: 'ALT-1STCLASS'
  },
  {
    id: 'spec-3',
    name: 'Cappuccino Altitud',
    subtitle: 'Espuma "Nube de Cumulonimbo" • Espolvoreado de Canela',
    description: 'Nuestra firma clásica con proporciones áureas: 1/3 espresso espresso de altura, 1/3 leche cremosa y 1/3 microespuma densa con aroma de canela y cardamomo.',
    price: 5.90,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    altitude: '2,200 msnm',
    roastLevel: 'Tueste Balanceado',
    flightNotes: ['Espuma Densa', 'Cardamomo', 'Nuez Moscada', 'Equilibrado'],
    code: 'ALT-CAPALT'
  },
  {
    id: 'spec-4',
    name: 'Mocha Sky',
    subtitle: 'Cacao Belga 70% • Crema Batida de Nubes',
    description: 'Fusión sublime de espresso recién extraído con chocolate artesanal Belga, leche cremosa y copete de nata montada con destellos dorados comestibles.',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800',
    altitude: '1,800 msnm',
    roastLevel: 'Tueste Medio',
    flightNotes: ['Chocolate Belga', 'Crema Suave', 'Notas de Trufa'],
    code: 'ALT-MOCHASKY'
  },
  {
    id: 'spec-5',
    name: 'Americano Runway',
    subtitle: 'Larga Distancia • Filtrado de Agua Termal',
    description: 'Espresso doble aligerado con agua de manantial a temperatura óptima para resaltar notas a jazmín, miel silvestre y Manzana Verde.',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    altitude: '2,050 msnm',
    roastLevel: 'Tueste Ligero',
    flightNotes: ['Jazmín', 'Miel Silvestre', 'Limpio y Prolongado'],
    code: 'ALT-RUNWAY'
  },
  {
    id: 'spec-6',
    name: 'Cold Brew Horizon',
    subtitle: 'Infusión en Frío por 20 Horas • Rodaja de Naranja',
    description: 'Maceración lenta en agua helada por 20 horas. Servido en vaso esferizado con hielo cúbico transparente, tónica botánica y un twist de naranja deshidratada.',
    price: 6.20,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    altitude: '2,300 msnm',
    roastLevel: 'Tueste Especial Cold Brew',
    flightNotes: ['Cítrico Refrescante', 'Baja Acidez', 'Final Dulce'],
    code: 'ALT-HORIZON'
  },
  {
    id: 'spec-7',
    name: 'Café Turbulencia',
    subtitle: 'Doble Shot Enérgico • Caramelo Salado Nitro',
    description: 'Una experiencia emocionante: espresso doble agitado con nitrógeno, sirope de caramelo con sal marina de Colima y un toque refrescante de hielo artesanal.',
    price: 6.80,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    altitude: '1,900 msnm',
    roastLevel: 'Tueste Oscuro',
    flightNotes: ['Caramelo Salado', 'Textura Nitro', 'Poder Enérgico'],
    code: 'ALT-TURBULENCE'
  },
  {
    id: 'spec-8',
    name: 'Vuelo Nocturno',
    subtitle: 'Edición Limitada • Licor de Café Artesanal y Licor 43',
    description: 'Nuestra carajillo insignia al estilo aviador: Espresso de alta montaña agitado en coctelera de cobre con Licor 43, infusión de cacao y corteza de naranja flambeada.',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    altitude: '2,400 msnm',
    roastLevel: 'Tueste Micro-Lote Reserva',
    flightNotes: ['Licor 43', 'Naranja Flambeada', 'Experiencia Nocturna'],
    code: 'ALT-NIGHTFLIGHT'
  }
];
