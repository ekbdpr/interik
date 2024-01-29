'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import Logo from '@/public/hero-unitama.png';

const links = [
  { id: 1, name: 'Riemann', href: '/main/interik/riemann' },
  { id: 2, name: 'Simpson', href: '/main/interik/simpson' },
  { id: 3, name: 'Trapezoida', href: '/main/interik/trapezoida' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
      <div className="container flex py-2 px-2 md:px-6  mx-auto flex-col md:flex-row">
        {/* logo */}
        <Link
          href="/"
          className="flex items-center justify-center font-medium text-gray-900 title-font mb-0"
        >
          <div className="flex flex-row gap-4">
            <Image
              src={Logo}
              width={0}
              height={0}
              alt="logo"
              className="w-20 md:w-10 mx-auto"
            />

            <p className="font-bold leading-10 text-xl text-blue-950 hidden md:block">
              UNITAMA
            </p>
          </div>
        </Link>
        {/* end logo */}

        {/* navigation */}
        <nav className="flex flex-wrap gap-12 items-center justify-center text-base md:ml-auto leading-10">
          <p className="font-bold hidden md:block">Metode :</p>

          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  'px-4 py-3 mt-5 md:mt-0 text-sm md:text-base hover:text-blue-500',
                  {
                    'bg-blue-500 text-white shadow-lg rounded-lg pointer-events-none':
                      pathname == link.href,
                  }
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* end navigation */}
      </div>
    </header>
  );
}
