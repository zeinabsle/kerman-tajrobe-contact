'use client';

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageSquareText } from 'lucide-react';

export function Header() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact-methods');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav px-3 sm:px-8 py-2.5 sm:py-3.5 transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Brand identity (Right side in RTL) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <BrandLogo size={38} className="sm:w-[46px] sm:h-[46px]" />
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-white sm:text-xl">
              کرمان تجربه
            </span>
            <span className="text-[10px] sm:text-[11px] text-orange-300/80 hidden sm:inline-block">
              مرجع رویدادها، بازی‌ها و تجربه‌های بومی
            </span>
          </div>
        </div>

        {/* Contact link (Positioned on the LEFT side of the desktop header) */}
        <div className="flex items-center">
          <a
            href="#contact-methods"
            onClick={scrollToContact}
            className="group flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-orange-500/30 bg-orange-500/[0.08] px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-orange-200 shadow-sm backdrop-blur-md transition-all hover:border-orange-500/60 hover:bg-orange-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="رفتن به بخش راه های ارتباطی"
          >
            <MessageSquareText className="size-3.5 sm:size-4 text-orange-400 transition-transform group-hover:scale-110" />
            <span>ارتباط با ما</span>
          </a>
        </div>
      </div>
    </header>
  );
}
