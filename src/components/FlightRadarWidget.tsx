import React, { useState, useEffect } from 'react';
import { Plane, Radio, Clock, Globe, ShieldCheck, Navigation, MapPin } from 'lucide-react';

export const FlightRadarWidget: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [selectedHub, setSelectedHub] = useState<'MIA' | 'MAD' | 'JFK' | 'BOG'>('MIA');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format local/national time and date
  const localTimeString = time.toLocaleTimeString('es-EC', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const localDateString = time.toLocaleDateString('es-EC', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();

  // Calculate international times for aviation hubs
  const getInternationalTime = (timeZone: string) => {
    try {
      const intlTime = new Date().toLocaleTimeString('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      const intlDate = new Date().toLocaleDateString('es-EC', {
        timeZone,
        day: '2-digit',
        month: 'short'
      }).toUpperCase();
      return { time: intlTime, date: intlDate };
    } catch {
      return { time: localTimeString, date: localDateString };
    }
  };

  const hubTimeZones: Record<string, { zone: string; city: string; flag: string }> = {
    MIA: { zone: 'America/New_York', city: 'Miami (MIA)', flag: '🇺🇸' },
    MAD: { zone: 'Europe/Madrid', city: 'Madrid (MAD)', flag: '🇪🇸' },
    JFK: { zone: 'America/New_York', city: 'Nueva York (JFK)', flag: '🇺🇸' },
    BOG: { zone: 'America/Bogota', city: 'Bogotá (BOG)', flag: '🇨🇴' }
  };

  const currentHub = hubTimeZones[selectedHub];
  const intlData = getInternationalTime(currentHub.zone);

  return (
    <div className="bg-[#0B1F3A]/95 backdrop-blur-md rounded-2xl border-2 border-[#C9A227]/40 p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] text-white max-w-sm w-full font-mono">
      
      {/* Instrument Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold tracking-wider text-[#5DADE2] flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#C9A227]" />
            RADAR TRÁFICO AÉREO
          </span>
        </div>
        <span className="text-[10px] bg-[#C9A227]/20 text-[#C9A227] px-2 py-0.5 rounded border border-[#C9A227]/40 font-bold">
          LIVE RADAR
        </span>
      </div>

      {/* Radar Dial with Live Planes */}
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full border-2 border-[#5DADE2]/50 p-2 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#071526] via-[#0B1F3A] to-[#0A2342]">
        
        {/* Radar Concentric Rings */}
        <div className="absolute inset-0 rounded-full border border-[#5DADE2]/20" />
        <div className="absolute inset-3 rounded-full border border-dashed border-[#5DADE2]/30" />
        <div className="absolute inset-[32px] rounded-full border border-[#5DADE2]/20" />
        <div className="absolute inset-[54px] rounded-full border border-[#5DADE2]/25" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5DADE2]/20" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#5DADE2]/20" />

        {/* Sweep line */}
        <div className="absolute top-0 left-0 w-full h-full animate-radar origin-center bg-gradient-to-tr from-transparent via-[#5DADE2]/30 to-transparent pointer-events-none" />

        {/* Aircraft 1: LATAM LA-2401 */}
        <div className="absolute top-6 left-10 flex items-center space-x-1 animate-pulse">
          <Plane className="w-3.5 h-3.5 text-[#C9A227] transform -rotate-45" />
          <span className="text-[9px] font-bold text-[#C9A227] bg-[#0B1F3A]/80 px-1 rounded border border-[#C9A227]/30">
            LA-2401
          </span>
        </div>

        {/* Aircraft 2: Avianca AV-504 */}
        <div className="absolute bottom-8 right-6 flex items-center space-x-1 animate-pulse delay-300">
          <Plane className="w-3.5 h-3.5 text-[#5DADE2] transform rotate-45" />
          <span className="text-[9px] font-bold text-[#5DADE2] bg-[#0B1F3A]/80 px-1 rounded border border-[#5DADE2]/30">
            AV-504
          </span>
        </div>

        {/* Aircraft 3: AA-912 */}
        <div className="absolute top-12 right-7 flex items-center space-x-1 animate-pulse delay-700">
          <Plane className="w-3 h-3 text-emerald-400 transform -rotate-90" />
          <span className="text-[8px] font-bold text-emerald-400 bg-[#0B1F3A]/80 px-1 rounded">
            AA-912
          </span>
        </div>

        {/* Center Target: Altitud Coffee Hub */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center bg-[#0B1F3A]/90 p-1.5 rounded-full border border-[#C9A227]/60 shadow-lg">
          <Navigation className="w-4 h-4 text-[#C9A227] animate-pulse" />
          <span className="text-[10px] font-extrabold text-white leading-tight">ALTITUD</span>
          <span className="text-[8px] text-[#5DADE2] font-semibold">HUB 01</span>
        </div>

      </div>

      {/* Radar Flight Status Indicator */}
      <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded-lg border border-white/10 mb-3">
        <span className="text-gray-300 flex items-center gap-1.5">
          <Plane className="w-3.5 h-3.5 text-[#C9A227]" />
          Aviones en Enfoque:
        </span>
        <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          3 En Aproximación
        </span>
      </div>

      {/* Replaced Clocks: Hora y Fecha Nacional e Internacional */}
      <div className="space-y-2 text-xs">
        
        {/* Hora y Fecha Nacional */}
        <div className="bg-white/5 p-2.5 rounded-xl border border-[#C9A227]/40 flex items-center justify-between shadow-inner">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0 animate-pulse" />
            <div>
              <div className="text-[10px] text-[#C9A227] font-bold flex items-center gap-1">
                <span>🇪🇨 HORA NACIONAL</span>
                <span className="text-[9px] text-gray-400">(LOCAL)</span>
              </div>
              <div className="text-[10px] text-gray-300">{localDateString}</div>
            </div>
          </div>
          <div className="text-right font-mono font-extrabold text-white text-sm tracking-wider">
            {localTimeString}
          </div>
        </div>

        {/* Hora y Fecha Internacional (Selectable Hubs) */}
        <div className="bg-white/5 p-2.5 rounded-xl border border-[#5DADE2]/40 space-y-2">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <Globe className="w-4 h-4 text-[#5DADE2]" />
              <span className="text-[10px] text-[#5DADE2] font-bold uppercase">
                HORA INTERNACIONAL
              </span>
            </div>

            {/* Hub Selector Pills */}
            <div className="flex space-x-1">
              {(['MIA', 'MAD', 'JFK', 'BOG'] as const).map((hub) => (
                <button
                  key={hub}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-[9px] px-1.5 py-0.5 rounded font-bold transition-colors ${
                    selectedHub === hub
                      ? 'bg-[#5DADE2] text-[#0B1F3A]'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {hub}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-white/10">
            <div>
              <div className="text-[11px] font-bold text-white flex items-center gap-1">
                <span>{currentHub.flag}</span>
                <span>{currentHub.city}</span>
              </div>
              <div className="text-[10px] text-gray-300">{intlData.date}</div>
            </div>
            <div className="text-right font-mono font-extrabold text-[#5DADE2] text-sm tracking-wider">
              {intlData.time}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
