import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-white dark:bg-[#071526] text-[#0B1F3A] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 text-[#0B1F3A] dark:text-[#5DADE2] text-xs font-mono tracking-widest uppercase">
            <MessageSquareQuote className="w-4 h-4 text-[#C9A227]" />
            <span>BITÁCORA DE RESEÑAS</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Opiniones de nuestros <span className="text-[#C9A227]">Pasajeros</span>
          </h2>

          <p className="font-poppins text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Descubre las valoraciones de capitanes, amantes del café y viajeros frecuentes que disfrutan de la experiencia Altitud.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 dark:bg-[#0B1F3A] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#C9A227]/50 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars & Route */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#C9A227] fill-current" />
                    ))}
                  </div>
                  {review.flightRoute && (
                    <span className="font-mono text-xs text-[#5DADE2] bg-white dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                      {review.flightRoute}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-200 font-poppins text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-white/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A227]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-montserrat font-bold text-base text-[#0B1F3A] dark:text-white flex items-center space-x-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-4 h-4 text-[#5DADE2]" />
                  </h4>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-poppins">{review.role}</div>
                  <div className="text-[10px] text-[#C9A227] font-mono mt-0.5">{review.date}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
