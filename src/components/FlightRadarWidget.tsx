import React from 'react';
import { Compass, Wind, Thermometer, ShieldCheck } from 'lucide-react';

export const FlightRadarWidget: React.FC = () => {
  return (
    <div className="bg-[#0B1F3A]/90 backdrop-blur-md rounded-2xl border border-[#C9A227]/30 p-4 sm:p-6 shadow-2xl text-white max-w-sm w-full font-mono">
      {/* Instrument Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold tracking-wider text-[#5DADE2]">COCKPIT TELEMETRY</span>
        </div>
        <span className="text-[10px] bg-[#C9A227]/20 text-[#C9A227] px-2 py-0.5 rounded border border-[#C9A227]/30">
          ALT-747 ACTIVE
        </span>
      </div>

      {/* Radar Dial */}
      <div className="relative w-36 h-36 mx-auto mb-4 rounded-full border-2 border-[#5DADE2]/40 p-2 flex items-center justify-center overflow-hidden bg-radial from-[#0B1F3A] via-[#0B1F3A]/80 to-[#102a4e]">
        {/* Radar Scanning Line */}
        <div className="absolute inset-0 rounded-full border border-[#5DADE2]/20" />
        <div className="absolute inset-2 rounded-full border border-dashed border-[#5DADE2]/30" />
        <div className="absolute inset-[30px] rounded-full border border-[#5DADE2]/20" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5DADE2]/20" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#5DADE2]/20" />

        {/* Sweep line */}
        <div className="absolute top-0 left-0 w-full h-full animate-radar origin-center bg-gradient-to-tr from-transparent via-[#5DADE2]/20 to-transparent pointer-events-none" />

        {/* Center Target Indicator */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Compass className="w-6 h-6 text-[#C9A227] animate-spin" style={{ animationDuration: '20s' }} />
          <span className="text-xs font-bold mt-1 text-white">2,100 M</span>
          <span className="text-[9px] text-[#BFC9CA]">ALTITUD TUESTE</span>
        </div>
      </div>

      {/* Telemetry Grid Stats */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center space-x-2">
          <Thermometer className="w-4 h-4 text-[#C9A227]" />
          <div>
            <div className="text-[10px] text-[#BFC9CA]">TEMP AGUA</div>
            <div className="font-bold text-white">93.5 °C</div>
          </div>
        </div>

        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center space-x-2">
          <Wind className="w-4 h-4 text-[#5DADE2]" />
          <div>
            <div className="text-[10px] text-[#BFC9CA]">PRESIÓN BARR.</div>
            <div className="font-bold text-white">9.0 BAR</div>
          </div>
        </div>

        <div className="col-span-2 bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] text-[#BFC9CA]">GRANO 100% ARÁBICA ESPECIALIDAD</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold">100/100 Q</span>
        </div>
      </div>
    </div>
  );
};
