import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'کرمان تجربه | راه‌های ارتباطی و اطلاعات تماس',
  description: 'درگاه رسمی راه‌های ارتباطی، نشانی، ساعات کاری و نقشه کرمان تجربه',
  openGraph: {
    title: 'کرمان تجربه | راه‌های ارتباطی و اطلاعات تماس',
    description: 'درگاه رسمی راه‌های ارتباطی، نشانی، ساعات کاری و نقشه کرمان تجربه',
    type: 'website',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کرمان تجربه | راه‌های ارتباطی و اطلاعات تماس',
    description: 'درگاه رسمی راه‌های ارتباطی، نشانی، ساعات کاری و نقشه کرمان تجربه',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-[#0d1424] text-slate-100 antialiased selection:bg-[#6DA9D6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
