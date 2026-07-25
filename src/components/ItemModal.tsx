import React from 'react';
import { MenuItem } from '../types';
import { X, Plus, ShoppingBag, Star, Mountain, MapPin, Check } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, notes?: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  const [notes, setNotes] = React.useState('');
  const [added, setAdded] = React.useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, notes);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C9A227]/30 relative animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#C9A227] text-[#0B1F3A] uppercase">
                {item.category}
              </span>
              {item.altitude && (
                <span className="flex items-center space-x-1 text-xs font-mono text-[#5DADE2]">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{item.altitude}</span>
                </span>
              )}
            </div>
            <h3 className="font-montserrat font-extrabold text-2xl">{item.name}</h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <p className="text-gray-600 dark:text-gray-300 font-poppins text-sm leading-relaxed">
            {item.description}
          </p>

          {item.origin && (
            <div className="flex items-center space-x-2 text-xs font-mono text-[#5DADE2] bg-[#0B1F3A]/5 dark:bg-white/5 p-3 rounded-xl border border-gray-200 dark:border-white/10">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <span>Origen Seleccionado: <strong>{item.origin}</strong></span>
            </div>
          )}

          {/* Customization Notes Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Instrucciones Especiales (Ej. Sin azúcar, Leche de Almendras)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Escribe preferencias para tu pedido..."
              className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
            />
          </div>

          {/* Footer Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
            <div>
              <span className="text-xs text-gray-400 block font-mono">PRECIO FINAL</span>
              <span className="font-montserrat font-black text-2xl text-[#C9A227]">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-montserrat font-bold text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                added
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#C9A227] text-[#0B1F3A] hover:bg-[#d8b438]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado a la Orden!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Agregar al Pedido</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
