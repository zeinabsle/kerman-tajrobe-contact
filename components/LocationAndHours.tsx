'use client';

import React, { useState } from 'react';
import { Clock, MapPin, Navigation, Compass, Copy, Check } from 'lucide-react';
import { BUSINESS_HOURS, ADDRESS_INFO } from '@/lib/contact';

export function LocationAndHours() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(ADDRESS_INFO.fullAddress);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = ADDRESS_INFO.fullAddress;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <section id="location-and-hours" className="py-5 sm:py-12 md:py-16 scroll-mt-20 relative overflow-hidden">
      {/* Background ambient lighting with subtle orange glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-orange-500/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8 items-center">
          {/* Circular Globe Earth Map Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="glass-panel w-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col items-center text-center">
              {/* Spherical Globe Earth Container (Circular & zooms on hover) */}
              <div className="globe-wrapper my-1 w-full flex justify-center py-1">
                <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80">
                  {/* Outer atmospheric aura */}
                  <div className="globe-atmosphere" aria-hidden="true" />
                  {/* Subtle orbital ring */}
                  <div className="globe-orbit-ring" aria-hidden="true" />

                  {/* Circular Map Frame */}
                  <div className="globe-frame group">
                    <iframe
                      title="موقعیت کرمان تجربه روی نقشه کره زمین"
                      src={ADDRESS_INFO.embedUrl}
                      className="w-full h-full border-0 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      allowFullScreen
                    />
                    {/* Spherical vignette overlay that provides 3D curvature and atmospheric depth */}
                    <div className="globe-spherical-vignette" aria-hidden="true" />

                    {/* Globe Center Pin Label */}
                    <div className="pointer-events-none absolute bottom-2 sm:bottom-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#070b14]/90 border border-orange-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9.5px] sm:text-[10.5px] font-medium text-white shadow-lg backdrop-blur-md whitespace-nowrap z-10">
                      <span>خانه خاطبی · کرمان تجربه</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons right under the globe */}
              <div className="mt-3.5 sm:mt-5 w-full flex flex-row items-center justify-center gap-1.5 sm:gap-2.5">
                <a
                  href={ADDRESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-sm shadow-orange-500/20 transition-all hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 whitespace-nowrap"
                >
                  <Navigation className="size-3 sm:size-3.5 shrink-0 text-white" />
                  <span>مسیریابی با گوگل مپ</span>
                </a>

                <a
                  href={`https://neshan.org/maps/@${ADDRESS_INFO.lat},${ADDRESS_INFO.lng},16z`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/12 bg-white/[0.06] text-[10.5px] sm:text-xs font-semibold text-slate-200 transition-colors hover:bg-white/[0.12] hover:text-white"
                  title="مسیریابی با نشان"
                >
                  نشان
                </a>
                <a
                  href={`https://balad.ir/location?latitude=${ADDRESS_INFO.lat}&longitude=${ADDRESS_INFO.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/12 bg-white/[0.06] text-[10.5px] sm:text-xs font-semibold text-slate-200 transition-colors hover:bg-white/[0.12] hover:text-white"
                  title="مسیریابی با بلد"
                >
                  بلد
                </a>
              </div>
            </div>
          </div>

          {/* Details & Schedules Column: Compact & non-stacked on mobile */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5">
            {/* Business Hours Card */}
            <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-white/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400">
                      <Clock className="size-3.5 sm:size-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white">ساعات کاری و پاسخگویی</h3>
                      <span className="text-[9.5px] sm:text-[10.5px] text-slate-400">پذیرش و پشتیبانی</span>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-400">
                    فعال
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>روزهای کاری:</span>
                    <span className="text-orange-300 font-semibold">{BUSINESS_HOURS.days}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between font-semibold text-white pt-1.5 border-t border-white/10">
                    <span>ساعات پاسخگویی:</span>
                    <span dir="ltr" className="text-emerald-400 font-bold tracking-wide">
                      {BUSINESS_HOURS.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-white/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400">
                      <MapPin className="size-3.5 sm:size-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white">نشانی</h3>
                      <span className="text-[9.5px] sm:text-[10.5px] text-slate-400">محل برگزاری کارگاه‌ها و ایونت‌ها</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/12 bg-white/[0.05] px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-200 transition-colors hover:bg-white/[0.1] hover:text-white"
                    title="کپی متن نشانی"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="size-2.5 text-emerald-400" />
                        <span className="text-emerald-300">کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-2.5 text-slate-300" />
                        <span>کپی</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-slate-200 mb-2">
                  <p className="text-[11px] sm:text-xs leading-relaxed font-medium">
                    {ADDRESS_INFO.fullAddress}
                  </p>
                </div>

                {/* Geographic Coordinates Display */}
                <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-black/25 border border-white/10 text-[9.5px] sm:text-[10.5px] text-slate-300">
                  <div className="flex items-center gap-1">
                    <Compass className="size-2.5 text-orange-400" />
                    <span>عرض:</span>
                    <span dir="ltr" className="font-mono text-white">۳۰.۲۸۳۹</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>طول:</span>
                    <span dir="ltr" className="font-mono text-white">۵۷.۰۷۸۸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
