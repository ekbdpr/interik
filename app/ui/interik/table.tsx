'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import clsx from 'clsx';

export default function Table(props: {
  tableContent: { id: number; iterasi: number; x: number; fx: number }[];
  hValue: number;
  totalFx: number;
  numerikVal: number;
  eksakVal: number;
  errorVal: number;
}) {
  const tableContent = props.tableContent;

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [tableContent]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className={clsx('pb-5 md:p-8', {
        hidden: tableContent.length === 0,
      })}
    >
      <div className="flex flex-col gap-8">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-center font-bold text-lg">Tabel Hasil</h1>
          <span
            className="flex-grow block border-t border-gray-400"
            aria-hidden="true"
            role="presentation"
          ></span>
        </div>
        {/* end title */}

        {/* table */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-black">
          {/* table head */}
          <thead className=" text-base text-gray-700 bg-gray-50 dark:bg-blue-950 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Iterasi
              </th>
              <th scope="col" className="py-3 px-6">
                x
              </th>
              <th scope="col" className="py-3 px-6">
                f(x)
              </th>
            </tr>
          </thead>
          {/* end table head */}

          <tbody>
            {/* table content */}
            {tableContent.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:border-blue-700"
                >
                  <td className="py-4 px-6">{item.iterasi}</td>
                  <td className="py-4 px-6">{item.x.toFixed(2)}</td>
                  <td className="py-4 px-6">{item.fx.toFixed(2)}</td>
                </tr>
              );
            })}
            {/* end table content */}

            {/* table total */}
            <tr className="bg-white font-bold">
              <td className="py-4 px-6">Total</td>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">{props.totalFx.toFixed(2)}</td>
            </tr>
            {/* end table total */}
          </tbody>
        </table>
        {/* end table */}

        <div>
          <p>
            Dengan mengambil nilai{' '}
            <span className="font-bold">h = {props.hValue}</span> maka diperoleh
            tabel diatas !
          </p>
          <br></br>
          <p>
            Solusi Numerik yang diperoleh{' '}
            <span className="font-bold">L = {props.numerikVal.toFixed(3)}</span>
          </p>

          <p>
            Solusi Eksak yang diperoleh{' '}
            <span className="font-bold">L = {props.eksakVal.toFixed(3)}</span>
          </p>

          <p>
            Terdapat kesalahan{' '}
            <span className="font-bold">e = {props.errorVal.toFixed(3)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
