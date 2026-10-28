'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-5 sm:py-12 md:py-16">
      <div className="relative mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        {/* Animated thin orange border beam wrapper */}
        <div className="hero-beam-wrapper">
          {/* Border tracer line masked strictly to 1.5px border track (0% light inside box) */}
          <div className="hero-border-line" aria-hidden="true">
            <div className="hero-beam-tracer" />
          </div>

          {/* Inner card content - 100% clean interior without any rotating aura */}
          <div className="glass-panel relative z-10 w-full rounded-[calc(1.25rem-1.5px)] sm:rounded-[calc(1.75rem-1.5px)] p-5 sm:p-9 md:p-12 text-center shadow-lg border border-white/10">
            {/* Subtle top indicator with orange accent */}
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 rounded-full border border-orange-500/25 bg-orange-500/[0.07] px-3 py-1 text-[9.5px] sm:text-[11px] font-semibold text-orange-300 backdrop-blur-md">
              <Sparkles className="size-2.5 sm:size-3 text-orange-400" />
              <span>پلتفرم رویدادها و تجربه‌های بومی استان کرمان</span>
            </div>

            <h1 className="text-lg sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-balance leading-snug sm:leading-tight mb-2.5 sm:mb-4">
              کرمان تجربه؛ درگاه ارتباطی و راهنمای همراه شما
            </h1>

            <p className="mx-auto max-w-xl text-[11px] sm:text-sm text-slate-300/90 leading-relaxed">
              برای ارتباط مستقیم، مشاوره در انتخاب و رزرو کارگاه‌های هنری، بازی‌های گروهی، تورها و دورهمی‌های خلاقانه در شهر تاریخی کرمان، با کارشناسان ما گفتگو کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
