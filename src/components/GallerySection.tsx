import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Camera, X, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'bebidas' | 'interior' | 'decoracion' | 'pasajeros'>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredGallery = galleryItems.filter(
    (item) => activeCategory === 'todos' || item.category === activeCategory
  );

  return (
    <section id="galeria" className="py-24 bg-gray-50 dark:bg-[#08182b] text-[#0B1F3A] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 text-[#0B1F3A] dark:text-[#5DADE2] text-xs font-mono tracking-widest uppercase">
            <Camera className="w-4 h-4 text-[#C9A227]" />
            <span>FOTOGRAFÍA & VISTAS DE LA TERMINAL</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Galería de <span className="text-[#C9A227]">Vuelo</span>
          </h2>

          <p className="font-poppins text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Un recorrido visual por nuestros espacios, creaciones baristas y detalles aeronáuticos.
          </p>
        </div>

        {/* Gallery Filter Categories */}
        <div className="flex justify-center space-x-2 overflow-x-auto pb-4 mb-10">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'bebidas', label: 'Bebidas' },
            { id: 'interior', label: 'Interior' },
            { id: 'decoracion', label: 'Decoración' },
            { id: 'pasajeros', label: 'Pasajeros' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-xl text-xs font-montserrat font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C9A227] text-[#0B1F3A] shadow-md scale-105'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md border border-gray-200 dark:border-white/10 bg-black/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono text-[#5DADE2] uppercase font-bold tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-montserrat font-bold text-base mb-1">{item.title}</h3>
                <p className="text-xs text-[#BFC9CA] font-poppins line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center space-x-1 text-xs text-[#C9A227] font-bold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar imagen</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#0B1F3A] rounded-3xl overflow-hidden border border-[#C9A227]/30 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-2">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 text-white space-y-2 border-t border-white/10">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#C9A227] text-[#0B1F3A] uppercase">
                {selectedImage.category}
              </span>
              <h3 className="font-montserrat font-bold text-2xl">{selectedImage.title}</h3>
              <p className="text-sm text-[#BFC9CA] font-poppins">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
