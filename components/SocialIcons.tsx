import React from 'react';
import Image from 'next/image';

/**
 * Official Telegram (تلگرام) authentic full-color logo
 */
export function TelegramIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#229ED9" />
      <path
        d="M23.15 9.4L6.85 15.68C5.73 16.13 5.74 16.75 6.65 17.03L10.82 18.33L20.48 12.24C20.94 11.96 21.36 12.11 21.01 12.42L13.19 19.48L12.88 23.83C13.31 23.83 13.5 23.63 13.74 23.4L15.8 21.4L20.07 24.55C20.86 24.99 21.42 24.76 21.62 23.82L24.42 10.63C24.71 9.47 23.98 8.95 23.15 9.4Z"
        fill="#ffffff"
      />
    </svg>
  );
}

/**
 * Official WhatsApp (واتساپ) authentic full-color logo with precise vector path
 */
export function WhatsAppIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C10.477 6 6 10.477 6 16C6 17.886 6.523 19.65 7.433 21.162L6.2 25.8L10.96 24.588C12.43 25.438 14.152 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM21.18 19.866C20.913 20.618 19.846 21.26 19.18 21.326C18.68 21.376 18.046 21.41 15.526 20.366C12.306 19.033 10.226 15.766 10.06 15.546C9.9 15.326 8.76 13.813 8.76 12.246C8.76 10.68 9.553 9.913 9.873 9.593C10.193 9.273 10.566 9.206 10.8 9.206C11.033 9.206 11.266 9.213 11.46 9.223C11.666 9.233 11.946 9.146 12.22 9.806C12.5 10.466 13.18 12.126 13.26 12.293C13.346 12.46 13.413 12.693 13.3 12.913C13.186 13.133 13.1 13.266 12.933 13.46C12.766 13.653 12.58 13.886 12.426 14.033C12.26 14.193 12.08 14.366 12.273 14.693C12.466 15.02 13.133 16.113 14.113 16.986C15.373 18.113 16.4 18.473 16.733 18.613C17.066 18.753 17.26 18.726 17.453 18.506C17.646 18.286 18.28 17.54 18.5 17.133C18.72 16.726 18.94 16.793 19.24 16.906C19.54 17.02 21.18 17.826 21.513 17.993C21.846 18.16 22.066 18.24 22.146 18.38C22.226 18.52 22.226 19.113 21.18 19.866Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Exact Bale (بله) logo using the user-provided image asset
 */
export function BaleIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src="/assets/aistudio/280x280_585137d8.jpg"
        alt="لوگوی بله"
        width={40}
        height={40}
        className="w-full h-full object-cover rounded-lg"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

/**
 * Exact Rubika (روبیکا) logo using the user-provided image asset
 */
export function RubikaIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src="/assets/aistudio/app.rbmain.a-1834b304-e703-409a-bd63-18d70717c186_512x512_7b7ba52c.webp"
        alt="لوگوی روبیکا"
        width={40}
        height={40}
        className="w-full h-full object-cover rounded-lg"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
