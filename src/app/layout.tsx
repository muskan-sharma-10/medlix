import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "../style/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Home - Medlix Hospital",
  description: "Medical Specialities Expert care, personalized treatments. Medlix Hospital Services is here to guide you through every step of your wellness journey.",
  keywords: "Medlix Hospital, Medlix Aarvy Hospital, Medlix Manavta, Hospital Gurugram, Cardiology, Dialysis, Emergency ICU, Super Specialty Hospital",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=medlix" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=medlix" />
        <link rel="shortcut icon" href="/favicon.ico?v=medlix" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=medlix" />
        <meta name="msapplication-TileImage" content="/mstile-270x270.png?v=medlix" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${manrope.className} font-sans antialiased text-slate-700 bg-[#F8FAFB] selection:bg-[#C9F5F3] selection:text-[#0A5F6B]`}>
        {children}
      </body>
    </html>
  );
}

