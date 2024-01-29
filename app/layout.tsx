import type { Metadata } from 'next';
import '@/app/ui/global.css';
import { poppins } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Integrasi Numerik',
  description:
    'Ini adalah tugas akhir mata kuliah metode numerik yang dikerjakan oleh kelompok 6.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
