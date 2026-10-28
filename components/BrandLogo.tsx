'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = '', size = 48 }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#18283B] to-[#101827] border border-white/20 text-[#9FE7F5] font-bold shadow-md ${className}`}
        style={{ width: size, height: size }}
        aria-label="لوگوی کرمان تجربه"
      >
        <span className="text-sm select-none">ک‌ت</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/60 p-1 shadow-md transition-all hover:border-[#6DA9D6]/50 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-kerman-tajrobe.jpg"
        alt="لوگوی رسمی کرمان تجربه"
        width={size}
        height={size}
        className="h-full w-full object-cover rounded-xl"
        onError={() => setHasError(true)}
        priority
      />
    </div>
  );
}
