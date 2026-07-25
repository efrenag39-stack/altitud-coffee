import React, { useState } from 'react';
import { ReservationData } from '../types';
import { Calendar, Clock, Users, Phone, Mail, User, Ticket, CheckCircle2, Plane, Sparkles, X, QrCode } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00',
    guests: 2,
    seatPreference: 'terminal',
    specialRequests: '',
  });

  const [confirmation, setConfirmation] = useState<{
    code: string;
    data: ReservationData;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    const reservationCode = 'BOARDING-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmation({
      code: reservationCode,
      data: { ...formData },
    });
  };

  return (
    <section id="reserva" className="py-24 bg-gray-50 dark:bg-[#08182b] text-[#0B1F3A] dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Lounge Banner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/20 text-[#C9A227] text-xs font-mono tracking-widest uppercase">
              <Ticket className="w-4 h-4" />
              <span>PASE DE ABORDO EXCLUSIVO</span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Reserva tu Mesa en la <span className="text-[#C9A227]">Terminal</span>
            </h2>

            <p className="font-poppins text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Asegura tu lugar en nuestro lounge ejecutivo de café. Disfruta de un ambiente reservado, atención de primera clase y la mejor gastronomía de altura.
            </p>

            <div className="p-6 rounded-3xl bg-[#0B1F3A] text-white border border-[#C9A227]/30 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-[#C9A227]">
                <Sparkles className="w-6 h-6" />
                <h3 className="font-montserrat font-bold text-lg">Beneficios de la Reserva VIP</h3>
              </div>
              <ul className="space-y-2 text-xs font-poppins text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5DADE2]" />
                  <span>Mesa asignada preferencial en la zona seleccionada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5DADE2]" />
                  <span>Shot de bienvenida "Capitán Ristretto" de cortesía</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5DADE2]" />
                  <span>Wi-Fi dedicado y conexiones eléctricas para trabajo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-[#0B1F3A] p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl space-y-6"
            >
              <h3 className="font-montserrat font-bold text-2xl text-[#0B1F3A] dark:text-white pb-2 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span>Formulario de Vuelo / Reserva</span>
                <span className="text-xs font-mono text-[#5DADE2]">GATE 04</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nombre */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Nombre del Pasajero *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Roberto Gómez"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-[#5DADE2]" />
                    <span>Teléfono Móvil *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 55 1234 5678"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                  />
                </div>

                {/* Correo */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Correo Electrónico *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="roberto@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                  />
                </div>

                {/* Fecha */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#5DADE2]" />
                    <span>Fecha de Vuelo *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                  />
                </div>

                {/* Hora */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Hora de Despegue *</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#C9A227] transition-all"
                  >
                    <option value="08:00" className="dark:bg-[#0B1F3A]">08:00 AM</option>
                    <option value="10:00" className="dark:bg-[#0B1F3A]">10:00 AM</option>
                    <option value="12:00" className="dark:bg-[#0B1F3A]">12:00 PM</option>
                    <option value="14:00" className="dark:bg-[#0B1F3A]">02:00 PM</option>
                    <option value="16:00" className="dark:bg-[#0B1F3A]">04:00 PM</option>
                    <option value="18:00" className="dark:bg-[#0B1F3A]">06:00 PM</option>
                    <option value="20:00" className="dark:bg-[#0B1F3A]">08:00 PM</option>
                  </select>
                </div>

                {/* Personas */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-[#5DADE2]" />
                    <span>Número de Pasajeros (Personas)</span>
                  </label>
                  <div className="flex items-center space-x-3">
                    {[1, 2, 3, 4, 6, 8].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setFormData({ ...formData, guests: num })}
                        className={`flex-1 py-2.5 rounded-xl font-montserrat font-bold text-sm transition-all ${
                          formData.guests === num
                            ? 'bg-[#C9A227] text-[#0B1F3A] shadow-md scale-105'
                            : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {num} {num === 1 ? 'Pers.' : 'Pers.'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferencia de Asiento */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Ubicación Preferida en Terminal
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'terminal', label: 'Lounge Terminal' },
                      { id: 'window', label: 'Ventanilla Runway' },
                      { id: 'cockpit', label: 'Vista a Cabina Barista' },
                    ].map((seat) => (
                      <button
                        type="button"
                        key={seat.id}
                        onClick={() => setFormData({ ...formData, seatPreference: seat.id as any })}
                        className={`p-3 rounded-xl border text-xs font-montserrat font-bold text-center transition-all ${
                          formData.seatPreference === seat.id
                            ? 'border-[#C9A227] bg-[#C9A227]/10 text-[#C9A227]'
                            : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {seat.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#d8b438] text-[#0B1F3A] font-montserrat font-extrabold text-sm uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <Plane className="w-5 h-5" />
                <span>Confirmar Reserva de Mesa</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Confirmation Digital Boarding Pass Modal */}
      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1F3A] text-white rounded-3xl max-w-md w-full overflow-hidden border-2 border-[#C9A227] shadow-2xl relative animate-scaleUp">
            
            <button
              onClick={() => setConfirmation(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Boarding Pass Header */}
            <div className="bg-gradient-to-r from-[#0B1F3A] via-[#102a4e] to-[#0B1F3A] p-6 border-b border-[#C9A227]/40 text-center space-y-1">
              <div className="flex items-center justify-center space-x-2 text-[#C9A227]">
                <Plane className="w-6 h-6 animate-pulse" />
                <span className="font-montserrat font-extrabold text-xl tracking-wider">ALTITUD COFFEE</span>
              </div>
              <div className="text-[10px] font-mono text-[#5DADE2] tracking-widest uppercase">
                DIGITAL BOARDING PASS • CONFIRMACIÓN DE RESERVA
              </div>
            </div>

            {/* Boarding Pass Ticket Body */}
            <div className="p-6 space-y-6 font-mono text-sm">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                <div>
                  <div className="text-[10px] text-gray-400">CÓDIGO DE VUELO</div>
                  <div className="font-bold text-[#C9A227] text-base">{confirmation.code}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-400">GATE / ZONA</div>
                  <div className="font-bold text-white uppercase">{confirmation.data.seatPreference}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">PASAJERO</span>
                  <span className="font-bold text-white text-sm">{confirmation.data.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">PASAJEROS</span>
                  <span className="font-bold text-white text-sm">{confirmation.data.guests} Personas</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">FECHA</span>
                  <span className="font-bold text-[#5DADE2]">{confirmation.data.date}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">HORA DE DESPEGUE</span>
                  <span className="font-bold text-[#5DADE2]">{confirmation.data.time} HRS</span>
                </div>
              </div>

              {/* QR Code Graphic Simulation */}
              <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 text-[#0B1F3A]">
                <QrCode className="w-24 h-24 text-[#0B1F3A]" />
                <span className="text-[10px] font-bold tracking-widest">MOSTRAR EN RECEPCIÓN AL LLEGAR</span>
              </div>
            </div>

            <div className="p-4 bg-black/40 text-center">
              <button
                onClick={() => setConfirmation(null)}
                className="w-full py-3 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-montserrat font-extrabold text-xs uppercase tracking-wider shadow"
              >
                Cerrar Pase de Abordo
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
