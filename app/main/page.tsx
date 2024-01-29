'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Card from '@/app/ui/interik/card';

import Riemann from '@/public/riemann.jpg';
import Simpson from '@/public/simpson.jpg';
import Trapezoida from '@/public/trapezoida.jpg';

export default function Page() {
  const Content = [
    {
      id: 1,
      title: 'Metode Integral Riemann',
      desc: 'Menyelesaikan operasi numerik dengan menggunakan Metode Integral Riemann',
      link: '/main/interik/riemann',
      image: Riemann,
    },
    {
      id: 2,
      title: 'Metode Integral Simpson',
      desc: 'Menyelesaikan operasi numerik dengan menggunakan Metode Integral Simpson',
      link: '/main/interik/simpson',
      image: Simpson,
    },
    {
      id: 3,
      title: 'Metode Integral Trapezoida',
      desc: 'Menyelesaikan operasi numerik dengan menggunakan Metode Integral Trapezoida',
      link: '/main/interik/trapezoida',
      image: Trapezoida,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-50">
      {/* main content nav */}
      <nav className="flex flex-col w-4/6 md:w-3/5 items-center justify-center mx-auto my-20 md:m-auto">
        {/* title */}
        <h1
          data-aos="fade-down"
          className="text-gray-800 font-bold text-xl md:text-3xl leading-normal py-6 text-center"
        >
          Pilih Metode Integrasi Numerik:{' '}
        </h1>
        {/* end title */}

        {/* cards */}
        <div
          data-aos="zoom-in"
          className="flex flex-col md:flex-row justify-center gap-5"
        >
          {Content.map(({ id, title, desc, link, image }) => (
            <Card
              key={id}
              title={title}
              description={desc}
              link={link}
              image={image}
            />
          ))}
        </div>
        {/* end cards */}
      </nav>
      {/* end main content nav */}
    </main>
  );
}
