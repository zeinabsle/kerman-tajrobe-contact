/**
 * Pure helper functions for Kerman Tajrobe contact and navigation logic
 */

export interface ContactChannel {
  id: string;
  name: string;
  category: 'messenger' | 'social' | 'phone';
  url: string;
  actionText: string;
  description: string;
  badge?: string;
  color: string;
}

export const PHONE_NUMBER_DISPLAY = '0901 370 2037';
export const PHONE_NUMBER_FA = '۰۹۰۱ ۳۷۰ ۲۰۳۷';
export const PHONE_NUMBER_RAW = '09013702037';
export const PHONE_TEL_URI = 'tel:09013702037';

export const BUSINESS_HOURS = {
  days: 'شنبه تا پنجشنبه',
  hours: '۱۰:۰۰ تا ۲۴:۰۰',
  fullSchedule: 'شنبه تا پنجشنبه: ۱۰:۰۰ تا ۲۴:۰۰',
};

export const ADDRESS_INFO = {
  city: 'کرمان',
  district: 'خیابان زریسف',
  fullAddress: 'کرمان، خیابان زریسف، خیابان برزو آمیغی، کوچه شماره ۱، انتهای کوچه، خانه خاطبی (کرمان تجربه)',
  lat: 30.2839,
  lng: 57.0788,
  googleMapsUrl: 'https://maps.google.com/?q=30.2839,57.0788',
  embedUrl: 'https://maps.google.com/maps?q=30.2839,57.0788&z=16&output=embed',
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'telegram',
    name: 'تلگرام',
    category: 'messenger',
    url: 'https://t.me/+989013702037',
    actionText: 'گفتگو در تلگرام',
    description: 'ارتباط مستقیم و ارسال پیام به خط پشتیبانی در پیام‌رسان تلگرام',
    color: '#229ED9',
  },
  {
    id: 'whatsapp',
    name: 'واتساپ',
    category: 'messenger',
    url: 'https://wa.me/989013702037',
    actionText: 'ارسال پیام در واتساپ',
    description: 'چت آنلاین و مشاوره مستقیم با شماره پشتیبانی در واتساپ',
    color: '#25D366',
  },
  {
    id: 'bale',
    name: 'بله',
    category: 'messenger',
    url: 'https://ble.ir/kermantajrobeh',
    actionText: 'مشاهده در پیام‌رسان بله',
    description: 'کانال رسمی اطلاع‌رسانی رویدادها و ارتباط در بله',
    color: '#00A859',
  },
  {
    id: 'rubika',
    name: 'روبیکا',
    category: 'social',
    url: 'https://rubika.ir/kermantajrobeh',
    actionText: 'صفحه رسمی در روبیکا',
    description: 'کانال رسمی، تصاویر ایونت‌ها و ویدیوهای تجربه‌ها در روبیکا',
    color: '#9E00FF',
  },
];

/**
 * Validates Iranian mobile phone number format
 */
export function isValidIranianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return /^(0098|\+98|0)?9\d{9}$/.test(cleaned);
}

/**
 * Standardizes phone number to tel: format
 */
export function formatTelLink(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return `tel:${cleaned}`;
}

/**
 * Creates Google Maps navigation direction URL
 */
export function getNavigationUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
