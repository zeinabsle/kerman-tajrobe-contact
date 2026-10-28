'use client';

import React, { useState } from 'react';
import { Phone, Copy, Check, Headphones } from 'lucide-react';
import { TelegramIcon, WhatsAppIcon, BaleIcon, RubikaIcon } from './SocialIcons';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_RAW, PHONE_TEL_URI, CONTACT_CHANNELS } from '@/lib/contact';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PHONE_NUMBER_RAW).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });

    // Notify backend
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'track_click', channel: 'copy_phone' }),
    }).catch(() => {});
  };

  const handleChannelClick = (channelId: string) => {
    // Notify real backend of user channel interaction
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'track_click', channel: channelId }),
    }).catch(() => {});
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'telegram':
        return <TelegramIcon className="size-8 sm:size-10" />;
      case 'whatsapp':
        return <WhatsAppIcon className="size-8 sm:size-10" />;
      case 'bale':
        return <BaleIcon className="size-8 sm:size-10" />;
      case 'rubika':
        return <RubikaIcon className="size-8 sm:size-10" />;
      default:
        return null;
    }
  };

  const getHoverBorder = (id: string) => {
    switch (id) {
      case 'telegram':
        return 'hover:border-[#229ED9]/50 hover:shadow-[0_8px_20px_-5px_rgba(34,158,217,0.25)]';
      case 'whatsapp':
        return 'hover:border-[#25D366]/50 hover:shadow-[0_8px_20px_-5px_rgba(37,211,102,0.25)]';
      case 'bale':
        return 'hover:border-[#00A859]/50 hover:shadow-[0_8px_20px_-5px_rgba(0,168,89,0.25)]';
      case 'rubika':
        return 'hover:border-[#A855F7]/50 hover:shadow-[0_8px_20px_-5px_rgba(168,85,247,0.25)]';
      default:
        return 'hover:border-orange-500/40';
    }
  };

  return (
    <section id="contact-methods" className="py-5 sm:py-10 md:py-14 scroll-mt-20 relative">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        {/* Strictly static centered heading with zero animation or movement */}
        <div className="text-center mb-5 sm:mb-8">
          <h2 className="contact-heading-static text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            راه های ارتباطی
          </h2>
          <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs text-slate-300/80 max-w-md mx-auto">
            پل‌های ارتباطی مستقیم، پیام‌رسان‌ها و خط تماس ویژه پشتیبانی کرمان تجربه
          </p>
          <div className="mt-2 sm:mt-2.5 mx-auto w-10 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-[#f97316] to-transparent rounded-full" aria-hidden="true" />
        </div>

        {/* Primary Phone Contact Flagship Card (Orange-infused glassmorphism) */}
        <div className="mb-3.5 sm:mb-5">
          <div className="glass-panel relative overflow-hidden rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-7 border border-white/12 bg-gradient-to-r from-[#142033]/90 via-[#1b1c31]/85 to-[#142033]/90 shadow-lg">
            {/* Subtle orange accent glow inside card */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-500/12 blur-2xl" />

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-5">
              <div className="flex items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-400 shadow-inner">
                  <Phone className="size-4.5 sm:size-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      تماس تلفنی با پشتیبانی
                    </h3>
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-orange-300">
                      <Headphones className="size-2.5" />
                      مستقیم
                    </span>
                  </div>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-400">
                    پاسخگویی ۱۰:۰۰ تا ۲۴:۰۰
                  </p>
                </div>
              </div>

              {/* Action buttons & phone display */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={PHONE_TEL_URI}
                  onClick={() => handleChannelClick('call_phone')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-xs font-bold text-white shadow-sm shadow-orange-500/20 transition-all hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                  aria-label={`برقراری تماس تلفنی با شماره ${PHONE_NUMBER_DISPLAY}`}
                >
                  <Phone className="size-3 sm:size-3.5 shrink-0 text-white" />
                  <span dir="ltr" className="tracking-wider font-extrabold text-xs sm:text-sm">
                    {PHONE_NUMBER_DISPLAY}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/12 bg-white/[0.06] px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium text-slate-200 transition-all hover:bg-white/[0.12] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 whitespace-nowrap"
                  title="کپی شماره تلفن"
                  aria-label="کپی شماره تماس کرمان تجربه"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-400" />
                      <span className="text-emerald-300 text-[10px] sm:text-[11px]">کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 text-slate-300" />
                      <span className="text-[10px] sm:text-[11px]">کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Messaging Platforms: Official Brand Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 lg:gap-4">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleChannelClick(channel.id)}
              className={`glass-card group flex flex-col justify-between rounded-xl sm:rounded-2xl p-2.5 sm:p-4 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${getHoverBorder(channel.id)}`}
              aria-label={`ارتباط از طریق ${channel.name} کرمان تجربه`}
            >
              <div>
                <div className="mb-2 sm:mb-3">
                  <div className="size-8 sm:size-10 shrink-0 overflow-hidden rounded-xl shadow-sm transition-transform group-hover:scale-105">
                    {getServiceIcon(channel.id)}
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
                  {channel.name}
                </h3>
                <p className="mt-1 text-[9.5px] sm:text-[11px] text-slate-300/80 leading-normal line-clamp-2">
                  {channel.description}
                </p>
              </div>

              <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2.5 border-t border-white/10 flex items-center justify-between text-[9.5px] sm:text-[10.5px] font-medium text-slate-300 group-hover:text-white">
                <span className="truncate">{channel.actionText}</span>
                <span className="text-orange-400 text-xs transition-transform group-hover:-translate-x-1" aria-hidden="true">
                  ←
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
