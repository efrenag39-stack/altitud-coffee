import { Review } from '../types';

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Capitán Rodrigo Mendoza',
    role: 'Piloto Aviador Comercial (A320)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Como piloto, paso mi vida en el aire. Altitud Coffee ha logrado recrear la atmósfera de elegancia y libertad de los mejores lounges del mundo, sirviendo el mejor espresso que he probado en años.',
    date: '14 de Julio, 2026',
    flightRoute: 'Ruta CDMX - Frankfurt'
  },
  {
    id: 'rev-2',
    name: 'Dra. Valeria Alarcón',
    role: 'Pasajera Frecuente & Arquitecta',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'El Latte First Class y los croissants recién horneados son extraordinarios. El diseño interior cuida hasta el último detalle, desde los asientos estilo primera clase hasta la iluminación suave.',
    date: '20 de Julio, 2026',
    flightRoute: 'Pasajera First Class'
  },
  {
    id: 'rev-3',
    name: 'Santiago Garza',
    role: 'Emprendedor & Digital Nomad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Un oasis increíble para trabajar. El Wi-Fi vuela a 300 Mbps, la música ambiental es excelente y el Cold Brew Horizon con tónica es perfecto para despejar la mente durante largas sesiones.',
    date: '22 de Julio, 2026',
    flightRoute: 'Lounge Member'
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    role: 'Sommelier de Café',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Impresionada con el nivel técnico de los baristas. La extracción del Capitán Espresso respeta la acidez viva del grano de altura y revela notas complejas de frutos rojos y cacao.',
    date: '18 de Julio, 2026',
    flightRoute: 'Crítica Gastronómica'
  }
];
