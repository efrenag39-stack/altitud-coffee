import { MenuItem } from '../types';

export const categoriesList = [
  'Todos',
  'Cafés Calientes',
  'Cafés Fríos',
  'Espresso',
  'Cappuccino',
  'Latte',
  'Mocha',
  'Chocolate Caliente',
  'Té',
  'Frappés',
  'Pastelería',
  'Sándwiches',
  'Postres'
];

export const menuItemsData: MenuItem[] = [
  // Cafés Calientes & Espresso
  {
    id: 'm-1',
    name: 'Capitán Espresso Doble',
    description: 'Extracción concentrada de 60ml con granos 100% Arábica de Soconusco. Crema rica y avellanada.',
    price: 4.80,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true,
    altitude: '2,100m',
    origin: 'Chiapas, MX'
  },
  {
    id: 'm-2',
    name: 'Espresso Ristretto Flight',
    description: 'Terna degustación con 3 micro-lotes de origen único (Etiopía, Colombia, México).',
    price: 6.20,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: true,
    altitude: '2,200m',
    origin: 'Trilogía Internacional'
  },
  {
    id: 'm-3',
    name: 'Cappuccino Altitud Tradicional',
    description: '1/3 espresso, 1/3 leche cremada y 1/3 microespuma con toque sutil de canela.',
    price: 5.90,
    category: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: false,
    altitude: '1,950m'
  },
  {
    id: 'm-4',
    name: 'Cappuccino Vainilla Turboprop',
    description: 'Cappuccino con sirope de vainilla francesa artesanal y ralladura de almendras tostadas.',
    price: 6.30,
    category: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },
  {
    id: 'm-5',
    name: 'Latte First Class Vainilla',
    description: 'Espresso suave con leche cremosa e infusión pura de vainilla Bourbon de Madagascar.',
    price: 6.50,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-6',
    name: 'Latte Lavanda & Miel Sky',
    description: 'Leche texturizada con sirope natural de flores de lavanda de alta montaña y miel silvestre.',
    price: 6.80,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1588851892808-164741e737bd?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-7',
    name: 'Mocha Sky Belga',
    description: 'Espresso con cobertura de chocolate Belga 70%, leche al vapor y crema batida.',
    price: 6.90,
    category: 'Mocha',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: false
  },
  {
    id: 'm-8',
    name: 'Mocha Blanco Transatlántico',
    description: 'Chocolate blanco de manteca de cacao pura, espresso doble y chispas de cacao nibs.',
    price: 7.10,
    category: 'Mocha',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: true
  },
  {
    id: 'm-9',
    name: 'Americano Runway Filtrado',
    description: 'Espresso estirado con agua de manantial filtrada. Notas límpidas a cardamomo y frutos rojos.',
    price: 4.20,
    category: 'Cafés Calientes',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },
  {
    id: 'm-10',
    name: 'Flat White Mach 1.5',
    description: 'Ristretto doble cargado servido con fino microfoam de leche entera o vegetal.',
    price: 5.60,
    category: 'Cafés Calientes',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },

  // Cafés Fríos & Cold Brew
  {
    id: 'm-11',
    name: 'Cold Brew Horizon Tonic',
    description: 'Infusión en frío por 20 horas servida sobre hielo cúbico, tónica botánica y rodaja de naranja.',
    price: 6.20,
    category: 'Cafés Fríos',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-12',
    name: 'Iced Latte Coco & Almendra',
    description: 'Espresso helado mezclado con leche de coco artesanal y sirope de almendras tostadas.',
    price: 6.40,
    category: 'Cafés Fríos',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },
  {
    id: 'm-13',
    name: 'Iced Carajillo Vuelo Nocturno',
    description: 'Licor 43 agitado vigorosamente con espresso caliente sobre rocas de hielo esférico.',
    price: 8.50,
    category: 'Cafés Fríos',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },

  // Chocolate Caliente & Té
  {
    id: 'm-14',
    name: 'Chocolate Caliente Cumulonimbo',
    description: 'Cacao Oaxaca 70% elaborado con leche entera, especias aromáticas y nube de marshmallows flambados.',
    price: 5.80,
    category: 'Chocolate Caliente',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: false
  },
  {
    id: 'm-15',
    name: 'Té Matcha Aviador Imperial',
    description: 'Matcha Uji grado ceremonial batido con batidor de bambú, servido con leche vegetal y miel.',
    price: 6.50,
    category: 'Té',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-16',
    name: 'Infusión Herbal Vuelos Claros',
    description: 'Mezcla orgánica de manzanilla, menta piperita, zacate de limón y pétalos de rosa.',
    price: 4.50,
    category: 'Té',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },

  // Frappés
  {
    id: 'm-17',
    name: 'Frappé Turbulencia Caramelo',
    description: 'Bebida helada frappé a base de espresso, sirope de caramelo espeso y crema chantilly.',
    price: 6.80,
    category: 'Frappés',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: false
  },
  {
    id: 'm-18',
    name: 'Frappé Mocha Chip Supersonic',
    description: 'Base de café con trozos crocantes de chispas de chocolate, jarabe de avellana y crema.',
    price: 7.20,
    category: 'Frappés',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: true
  },

  // Pastelería & Postres
  {
    id: 'm-19',
    name: 'Croissant de Mantequilla First Class',
    description: 'Hojaldre artesanal francés horneado diariamente con mantequilla de Normandy pura.',
    price: 3.90,
    category: 'Pastelería',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-20',
    name: 'Pain au Chocolat de Altitud',
    description: 'Masa hojaldrada rellena con dos barras de chocolate Belga semi-amargo.',
    price: 4.50,
    category: 'Pastelería',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },
  {
    id: 'm-21',
    name: 'Tiramisú Vuelo a Roma',
    description: 'Bizcochos soletilla empapados en nuestro espresso Capitán, mascarpone italiano y cacao puro.',
    price: 6.80,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-22',
    name: 'Cheesecake de Frutos del Bosque',
    description: 'Pastel de queso estilo Nueva York con compota casera de frambuesas y zarzamoras.',
    price: 6.50,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    recommended: false,
    firstClass: false
  },

  // Sándwiches
  {
    id: 'm-23',
    name: 'Sándwich Executive Hangar',
    description: 'Pan ciabatta de masa madre, jamón serrano curado, queso brie, rúcula fresca y mermelada de higo.',
    price: 9.80,
    category: 'Sándwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  },
  {
    id: 'm-24',
    name: 'Bagel de Salmón & Cream Cheese Terminal',
    description: 'Bagel artesanal tostado con salmón ahumado atlántico, queso crema con alcaparras y eneldo.',
    price: 10.50,
    category: 'Sándwiches',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    recommended: true,
    firstClass: true
  }
];
