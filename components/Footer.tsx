'use client';

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 sm:mt-14 border-t border-white/12 bg-[#0c1629]/92 backdrop-blur-xl py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center pb-5 sm:pb-6 border-b border-white/10 text-center md:text-start">
          {/* Brand & mission */}
          <div className="md:col-span-8 flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <BrandLogo size={32} className="sm:w-[38px] sm:h-[38px]" />
              <div className="text-center md:text-start">
                <span className="text-sm sm:text-base font-extrabold text-white">کرمان تجربه</span>
                <p className="text-[9.5px] sm:text-[11px] text-orange-300/90">
                  سامانه معرفی و رزرو رویدادها، بازی‌ها و تفریحات بومی کرمان
                </p>
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300/80 max-w-md leading-relaxed text-center md:text-start mx-auto md:mx-0">
              کرمان تجربه بستری برای خلق خاطرات ماندگار و ارائه خدمات گردشگری و تفریحی خلاقانه در بافت کهن کرمان است.
            </p>
          </div>

          {/* Back to top */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-1 rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[10px] sm:text-[11px] font-medium text-slate-200 transition-colors hover:bg-white/[0.12] hover:text-white"
              aria-label="بازگشت به ابتدای صفحه"
            >
              <span>بازگشت به بالا</span>
              <ArrowUp className="size-2.5" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-4 flex items-center justify-center text-[10px] sm:text-[11px] text-slate-400 text-center">
          <span>تمامی حقوق متعلق به مجموعه «کرمان تجربه» است.</span>
        </div>
      </div>
    </footer>
  );
}
