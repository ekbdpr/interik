'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/hero-unitama.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div
        data-aos="fade-down"
        className="flex flex-col h-40 shrink-0 items-start justify-end rounded-lg bg-blue-950 p-4"
      >
        {/* title */}
        <h1 className="px-16 text-xl md:text-2xl font-bold text-white">
          Kelompok 6 - Metode Numerik
        </h1>
        <h2 className="px-16 text-3xl md:text-4xl font-bold text-white">
          Universitas Teknologi Akba Makassar
        </h2>
        {/* end title */}
      </div>

      <div className="mt-4 flex grow flex-col md:flex-row gap-4">
        {/* content */}
        <div className="flex order-2 md:order-1 flex-col justify-center gap-6 rounded-lg bg-gray-50 py-10 w-full md:w-2/5 px-20">
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="text-gray-800 text-2xl leading-normal"
          >
            <strong>Selamat Datang di InteRik.</strong> Ini adalah aplikasi yang
            akan melakukan operasi numerik dengan menggunakan{' '}
            <span className="text-red-500">Metode Integrasi Numerik</span>,
            dibuat oleh Kelompok 6.
          </p>
          <Link
            data-aos="fade-down"
            data-aos-duration="2000"
            href="/main"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3  font-medium text-white transition-colors hover:bg-blue-400 text-base"
          >
            <span>Lanjutkan</span> <ArrowRightIcon className="w-6" />
          </Link>
        </div>
        {/* end content */}

        {/* hero */}
        <div className="flex order-1 md:order-2 items-center justify-center p-6 w-full md:w-3/5 px-28 py-12">
          <Image
            data-aos="fade-left"
            data-aos-duration="2000"
            src={HeroImage}
            width={300}
            alt="Hero Image"
          />
        </div>
        {/* end hero */}
      </div>
    </main>
  );
}
