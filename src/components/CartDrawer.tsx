import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Plane, Sparkles, QrCode } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'llevar' | 'mesa'>('mesa');
  const [tableNumber, setTableNumber] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  const tax = subtotal * 0.16; // 16% IVA
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const orderCode = 'TICKET-' + Math.floor(1000 + Math.random() * 9000);
    setCheckoutComplete(orderCode);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          
          <div className="pointer-events-auto w-screen max-w-md transform bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white shadow-2xl border-l border-[#C9A227]/30 flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-6 bg-[#0B1F3A] text-white border-b border-[#C9A227]/30 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#C9A227]" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Orden de Abordo</h3>
                  <span className="text-[10px] font-mono text-[#5DADE2]">CARRITO DE PEDIDOS DE ESPECIALIDAD</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Cart Items List or Checkout Confirmation */}
            {checkoutComplete ? (
              <div className="p-8 space-y-6 text-center flex-1 flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-[#C9A227] text-[#0B1F3A]">
                    ORDEN CONFIRMADA #{checkoutComplete}
                  </span>
                  <h4 className="font-montserrat font-extrabold text-2xl">¡Pedido Enviado a Baristas!</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-300 font-poppins">
                    Tu orden ha sido registrada en el sistema de la cafetería. Nuestros baristas comenzarán la extracción inmediatamente.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-2xl w-full border border-gray-200 dark:border-white/10 font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">MODALIDAD:</span>
                    <span className="font-bold text-[#5DADE2] uppercase">{orderType === 'mesa' ? 'Servir en Mesa' : 'Para llevar'}</span>
                  </div>
                  {orderType === 'mesa' && tableNumber && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">MESA:</span>
                      <span className="font-bold text-[#C9A227]">#{tableNumber}</span>
                    </div>
                  )}
                </div>

                <div className="bg-white p-3 rounded-2xl border border-gray-300">
                  <QrCode className="w-20 h-20 text-[#0B1F3A]" />
                </div>

                <button
                  onClick={() => {
                    setCheckoutComplete(null);
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-bold text-xs uppercase"
                >
                  Entendido / Volver al sitio
                </button>
              </div>
            ) : (
              <div className="p-6 flex-1 overflow-y-auto space-y-6">
                
                {/* Delivery Mode Choice */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-gray-400 uppercase">Modalidad de Servicio</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setOrderType('mesa')}
                      className={`p-2.5 rounded-xl border text-xs font-montserrat font-bold transition-all ${
                        orderType === 'mesa'
                          ? 'border-[#C9A227] bg-[#C9A227]/10 text-[#C9A227]'
                          : 'border-gray-200 dark:border-white/10 text-gray-500'
                      }`}
                    >
                      Servir en Mesa
                    </button>
                    <button
                      onClick={() => setOrderType('llevar')}
                      className={`p-2.5 rounded-xl border text-xs font-montserrat font-bold transition-all ${
                        orderType === 'llevar'
                          ? 'border-[#C9A227] bg-[#C9A227]/10 text-[#C9A227]'
                          : 'border-gray-200 dark:border-white/10 text-gray-500'
                      }`}
                    >
                      Para Llevar
                    </button>
                  </div>
                </div>

                {orderType === 'mesa' && (
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-gray-400 uppercase">Número de Mesa</label>
                    <input
                      type="text"
                      placeholder="Ej. Mesa 04"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 space-y-3 text-gray-400">
                      <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600" />
                      <p className="font-poppins text-sm">Tu orden de abordo está vacía.</p>
                    </div>
                  ) : (
                    cart.map(({ item, quantity, notes }) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center space-x-4 justify-between"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-montserrat font-bold text-sm truncate">{item.name}</h4>
                          <div className="text-xs text-[#C9A227] font-mono font-bold">
                            ${(item.price * quantity).toFixed(2)}
                          </div>
                          {notes && <div className="text-[10px] text-gray-400 italic">"{notes}"</div>}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 bg-white dark:bg-black/30 p-1.5 rounded-xl border border-gray-200 dark:border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-[#C9A227]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold px-1">{quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-[#C9A227]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

              </div>
            )}

            {/* Footer Summary & Action */}
            {!checkoutComplete && (
              <div className="p-6 bg-gray-50 dark:bg-[#071526] border-t border-gray-200 dark:border-white/10 space-y-4">
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Impuestos (IVA 16%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#0B1F3A] dark:text-white pt-2 border-t border-gray-200 dark:border-white/10">
                    <span>TOTAL A PAGAR</span>
                    <span className="text-[#C9A227]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className="w-full py-3.5 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-extrabold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d8b438]"
                >
                  <Plane className="w-4 h-4" />
                  <span>Confirmar & Enviar Pedido</span>
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
