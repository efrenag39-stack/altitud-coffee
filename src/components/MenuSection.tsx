import React, { useState } from 'react';
import { categoriesList, menuItemsData } from '../data/menuData';
import { MenuItem } from '../types';
import { Search, Sparkles, Plus, Star, Coffee, Filter, Check } from 'lucide-react';
import { ItemModal } from './ItemModal';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, notes?: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Filter items
  const filteredItems = menuItemsData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRec = !onlyRecommended || item.recommended;

    return matchesCategory && matchesSearch && matchesRec;
  });

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-gray-50 dark:bg-[#08182b] text-[#0B1F3A] dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C9A227]/15 text-[#C9A227] text-xs font-mono tracking-widest uppercase">
            <Coffee className="w-4 h-4" />
            <span>MENÚ INTERACTIVO DE ABORDO</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Carta de <span className="text-[#C9A227]">Especialidad</span>
          </h2>

          <p className="font-poppins text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Explora nuestro itinerario gastronómico. Cada opción ha sido diseñada para ofrecer la máxima calidad y sabor en tu viaje.
          </p>
        </div>

        {/* Controls Bar: Search & Recommended Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar bebida, postre, sándwich..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-[#0B1F3A] border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] shadow-sm transition-all"
            />
          </div>

          {/* Recommended Filter Toggle Pill */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setOnlyRecommended(!onlyRecommended)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-montserrat font-bold uppercase tracking-wider transition-all ${
                onlyRecommended
                  ? 'bg-[#C9A227] text-[#0B1F3A] border-[#C9A227] shadow-md'
                  : 'bg-white dark:bg-[#0B1F3A] text-gray-700 dark:text-white border-gray-200 dark:border-white/10 hover:border-[#C9A227]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span>Sólo Recomendados</span>
            </button>
          </div>

        </div>

        {/* Category Scrollable Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categoriesList.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl whitespace-nowrap text-xs font-montserrat font-bold uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-[#0B1F3A] text-white dark:bg-[#C9A227] dark:text-[#0B1F3A] shadow-md scale-105'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#0B1F3A] rounded-3xl border border-gray-200 dark:border-white/10 p-8 space-y-3">
            <Filter className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="font-montserrat font-bold text-xl">No encontramos resultados</h3>
            <p className="text-sm text-gray-500">Prueba ajustando el término de búsqueda o la categoría seleccionada.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-white dark:bg-[#0B1F3A] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#C9A227]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.recommended && (
                        <span className="px-2.5 py-1 rounded-full bg-[#C9A227] text-[#0B1F3A] font-montserrat font-extrabold text-[10px] uppercase tracking-wider flex items-center shadow">
                          <Star className="w-3 h-3 mr-1 fill-current" /> Recomendado
                        </span>
                      )}
                      {item.firstClass && (
                        <span className="px-2.5 py-1 rounded-full bg-[#5DADE2] text-[#0B1F3A] font-montserrat font-extrabold text-[10px] uppercase tracking-wider shadow">
                          First Class
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#0B1F3A]/80 backdrop-blur-md px-3 py-1 rounded-xl text-white font-montserrat font-extrabold text-sm border border-white/20">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-2">
                    <div className="text-[10px] font-mono text-[#5DADE2] uppercase font-bold tracking-wider">
                      {item.category} {item.altitude ? `• ${item.altitude}` : ''}
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-[#0B1F3A] dark:text-white group-hover:text-[#C9A227] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-poppins line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className={`w-full py-2.5 px-4 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all active:scale-95 ${
                      addedItemIds[item.id]
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 dark:bg-white/10 text-[#0B1F3A] dark:text-white hover:bg-[#C9A227] hover:text-[#0B1F3A]'
                    }`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Agregado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Agregar al pedido</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      <ItemModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};
