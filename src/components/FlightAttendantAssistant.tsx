import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Plane,
  Sparkles,
  Calendar,
  Coffee,
  MapPin,
  Clock,
  Gift,
  ChevronRight,
  Bot,
  RefreshCw,
  Volume2,
  VolumeX,
  CheckCircle2,
  BadgePercent,
  Compass
} from 'lucide-react';
import flightAttendantImg from '../assets/flight_attendant.jpg';

interface Message {
  id: string;
  sender: 'attendant' | 'user';
  text: string;
  time: string;
  actionButton?: {
    label: string;
    targetId: string;
  };
}

export const FlightAttendantAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Teaser callout visible for 3 seconds on load then disappears
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'attendant',
      text: '¡Bienvenido a bordo de Altitud Coffee! ✈️ Soy Valeria, tu Tripulante de Cabina. Estoy aquí para hacer tu experiencia de primera clase. ¿En qué puedo ayudarte hoy?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const quickQuestions = [
    {
      label: '🛩️ Promo Martes de Aviones a Escala',
      query: '¿Cómo funciona la promoción del Martes de Aviones a Escala?'
    },
    {
      label: '☕ Recomiéndame un café insignia',
      query: 'Recomiéndame el mejor café de la casa'
    },
    {
      label: '📅 ¿Cómo reservar una mesa?',
      query: '¿Cómo puedo hacer una reserva de mesa?'
    },
    {
      label: '📍 Ubicación y Horarios',
      query: '¿Dónde están ubicados y cuál es su horario?'
    },
    {
      label: '🥐 Opciones de repostería y maridaje',
      query: '¿Qué opciones de comida o postres tienen?'
    }
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasNewNotification(false);
    }
  }, [isOpen, messages]);

  const playNotificationSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch {
      // Audio context fallbacks handled gracefully
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAttendantReply(text);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      playNotificationSound();
    }, 900);
  };

  const generateAttendantReply = (text: string): Message => {
    const lower = text.toLowerCase();
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (lower.includes('martes') || lower.includes('escala') || lower.includes('promocion') || lower.includes('promo') || lower.includes('50') || lower.includes('regalo') || lower.includes('avión') || lower.includes('avion')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '✈️ ¡Excelente consulta! Todos los MARTES tenemos la promoción especial "Martes de Aviones a Escala". Por consumos en mesa o pedidos superiores a $50.00 USD, te regalamos un modelo de avión a escala metálico de colección (Die-Cast) con base de exhibición grabada. ¡Aprovecha para hacer tu reserva este martes!',
        time: timeNow,
        actionButton: {
          label: 'Reservar Mesa para el Martes',
          targetId: 'reserva'
        }
      };
    }

    if (lower.includes('café') || lower.includes('cafe') || lower.includes('recomi') || lower.includes('bebida') || lower.includes('insignia') || lower.includes('espresso') || lower.includes('cappuccino') || lower.includes('latte')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '☕ Te recomiendo nuestra estrella First Class: el "Cappuccino Altitud" con espuma "Nube de Cumulonimbo" y canela, o el potente "Capitán Espresso" elaborado con granos seleccionados a 1,800 msnm. Si prefieres algo refrescante, prueba nuestro "Cold Brew Turbulencia".',
        time: timeNow,
        actionButton: {
          label: 'Ver Menú de Especialidades',
          targetId: 'especialidades'
        }
      };
    }

    if (lower.includes('reserva') || lower.includes('mesa') || lower.includes('reservar') || lower.includes('vip') || lower.includes('check-in') || lower.includes('lugar')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '📅 ¡Con gusto preparo tu abordaje! Puedes reservar tu mesa en nuestra Zona First Class o la Terraza Flight Deck completando el formulario de reserva con la fecha, hora y número de tripulantes.',
        time: timeNow,
        actionButton: {
          label: 'Ir al Formulario de Reserva',
          targetId: 'reserva'
        }
      };
    }

    if (lower.includes('donde') || lower.includes('ubicac') || lower.includes('horario') || lower.includes('direcc') || lower.includes('hora') || lower.includes('abierto')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '📍 Estamos ubicados en la Terminal Altitud: Av. Aviación #740, Zona Hangar 4. Nuestro horario de vuelo es de Lunes a Domingo de 07:00 AM a 10:00 PM. ¡Contamos con estacionamiento reservado y Wi-Fi 6 de alta velocidad!',
        time: timeNow,
        actionButton: {
          label: 'Ver Mapa y Coordenadas GPS',
          targetId: 'ubicacion'
        }
      };
    }

    if (lower.includes('postre') || lower.includes('comida') || lower.includes('pan') || lower.includes('reposter') || lower.includes('croissant') || lower.includes('comer')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '🥐 ¡Un maridaje perfecto a bordo! Te sugiero probar nuestro "Croissant Turbulencia de Mantequilla", la "Tarta de Queso Altitud 35,000 FT" o nuestras tostadas de masa madre. También contamos con opciones vegetarianas y leche de almendra o avena.',
        time: timeNow,
        actionButton: {
          label: 'Explorar Menú Completo',
          targetId: 'menu'
        }
      };
    }

    if (lower.includes('wifi') || lower.includes('wi-fi') || lower.includes('trabajar') || lower.includes('laptop') || lower.includes('enchufe')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '💻 ¡Tu oficina de primera clase! Contamos con conexión Wi-Fi 6 satelital ultra rápida y tomacorrientes en cada mesa para que puedas trabajar con total comodidad mientras disfrutas tu café.',
        time: timeNow
      };
    }

    if (lower.includes('perro') || lower.includes('mascota') || lower.includes('pet')) {
      return {
        id: (Date.now() + 1).toString(),
        sender: 'attendant',
        text: '🐾 ¡Por supuesto! Somos una cafetería Pet Friendly. Tu mascota es bienvenida en nuestra área de terraza "Flight Deck Outdoor". ¡Incluso tenemos galletas especiales para ellos!',
        time: timeNow
      };
    }

    return {
      id: (Date.now() + 1).toString(),
      sender: 'attendant',
      text: '✈️ ¡Entendido! Como tu tripulante de cabina, estaré encantada de asistirte. Puedes explorar nuestro Menú Interactivo, reservar una mesa para el Martes de Aviones a Escala, o consultar nuestras especialidades de café recién tostado.',
      time: timeNow,
      actionButton: {
        label: 'Ver Menú Principal',
        targetId: 'menu'
      }
    };
  };

  const handleActionButtonClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'attendant',
        text: '¡Bienvenido a bordo de Altitud Coffee! ✈️ Soy Valeria, tu Tripulante de Cabina. Estoy aquí para hacer tu experiencia de primera clase. ¿En qué puedo ayudarte hoy?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Widget Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        
        {/* Unopened Tooltip Teaser Callout - Visible for 3 seconds */}
        {!isOpen && showTeaser && (
          <div
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            className="mb-3 cursor-pointer hidden sm:flex items-center space-x-3 bg-[#0B1F3A] border-2 border-[#C9A227] text-white p-3 pr-4 rounded-2xl shadow-[0_10px_30px_rgba(201,162,39,0.3)] hover:scale-105 transition-all duration-500 animate-fade-in"
          >
            <div className="w-10 h-10 rounded-full border border-[#C9A227] overflow-hidden flex-shrink-0 bg-[#0B1F3A]">
              <img src={flightAttendantImg} alt="Valeria Tripulante" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-montserrat font-bold text-[#C9A227]">Valeria • Tripulante</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] font-poppins text-gray-200">
                ¿Dudas sobre la promo o reservas? ¡Te ayudo en línea! ✈️
              </p>
            </div>
          </div>
        )}

        {/* Floating Circle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-1.5 rounded-full bg-gradient-to-r from-[#0B1F3A] to-[#163866] border-2 border-[#C9A227] shadow-[0_8px_25px_rgba(201,162,39,0.4)] hover:scale-105 transition-transform duration-300 focus:outline-none"
          aria-label="Abrir Asistente Tripulante de Cabina"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C9A227]/50 flex items-center justify-center bg-[#0B1F3A]">
            {isOpen ? (
              <X className="w-7 h-7 text-[#C9A227]" />
            ) : (
              <img
                src={flightAttendantImg}
                alt="Valeria Tripulante de Cabina"
                className="w-full h-full object-cover rounded-full"
              />
            )}
          </div>

          {/* Active Status Badge */}
          {!isOpen && (
            <span className="absolute top-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C9A227] border-2 border-[#0B1F3A]"></span>
            </span>
          )}

          {/* Golden Wings Indicator Icon */}
          {!isOpen && (
            <div className="absolute -bottom-1 -left-1 bg-[#C9A227] text-[#0B1F3A] rounded-full p-1 border border-[#0B1F3A] shadow-md">
              <Plane className="w-3.5 h-3.5 transform -rotate-45" />
            </div>
          )}
        </button>
      </div>

      {/* Main Interactive Assistant Drawer / Modal Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] bg-[#0B1F3A] border-2 border-[#C9A227] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden font-poppins transition-all duration-300">
          
          {/* Header Panel */}
          <div className="bg-gradient-to-r from-[#071526] via-[#0B1F3A] to-[#102B4E] border-b border-[#C9A227]/30 p-4 px-5 flex items-center justify-between relative">
            
            <div className="flex items-center space-x-3.5">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] overflow-hidden bg-[#071526] p-0.5 shadow-md">
                  <img src={flightAttendantImg} alt="Valeria Assistant" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0B1F3A]" />
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-montserrat font-extrabold text-white text-base tracking-tight">
                    Valeria
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] text-[10px] font-mono uppercase font-bold">
                    Tripulante A-14
                  </span>
                </div>
                <p className="text-xs text-[#5DADE2] font-mono flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Asistente de Vuelo en Línea</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#C9A227] transition-colors"
                title={soundEnabled ? "Silenciar sonido" : "Activar sonido"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
              </button>

              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#C9A227] transition-colors"
                title="Reiniciar conversación"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#C9A227] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Quick Announcement Banner */}
          <div className="bg-[#C9A227]/15 border-b border-[#C9A227]/30 px-4 py-2 flex items-center space-x-2 text-xs text-[#C9A227] font-mono">
            <Gift className="w-4 h-4 flex-shrink-0 animate-pulse" />
            <span className="truncate">
              <strong>Martes de Aviones a Escala:</strong> ¡Modelo gratis en consumos &gt;$50!
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0B1F3A] to-[#071526]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-[#C9A227] text-[#0B1F3A] font-semibold rounded-br-none'
                      : 'bg-[#102B4E] border border-white/10 text-white rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Action Button embedded in reply */}
                  {msg.actionButton && (
                    <button
                      onClick={() => handleActionButtonClick(msg.actionButton!.targetId)}
                      className="mt-3 w-full py-2 px-3 rounded-xl bg-[#C9A227] hover:bg-[#b8921f] text-[#0B1F3A] font-montserrat font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
                    >
                      <span>{msg.actionButton.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <span className="text-[10px] text-gray-400 font-mono mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 bg-[#102B4E] border border-white/10 text-white rounded-2xl rounded-bl-none p-3 w-fit">
                <span className="text-xs text-[#5DADE2] font-mono">Valeria está escribiendo</span>
                <div className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full animate-ping" />
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full animate-ping delay-100" />
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full animate-ping delay-200" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Pills Carousel */}
          <div className="p-2 px-3 bg-[#071526] border-t border-white/10 flex space-x-2 overflow-x-auto no-scrollbar scroll-smooth">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.query)}
                className="whitespace-nowrap flex-shrink-0 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#C9A227]/20 border border-white/10 hover:border-[#C9A227] text-gray-200 hover:text-white text-[11px] font-poppins transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Message Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#071526] border-t border-white/10 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu consulta a cabina..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-400 focus:outline-none focus:border-[#C9A227] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-[#C9A227] text-[#0B1F3A] disabled:opacity-50 hover:bg-[#b8921f] transition-all font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
