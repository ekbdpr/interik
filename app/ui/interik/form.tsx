'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import clsx from 'clsx';

export default function Form(props: {
  name: string;
  fxValue: string;
  sumbuXValue: number;
  sumbuYValue: number;
  nValue: number;
  hValue: number;
  setFxValue: React.Dispatch<React.SetStateAction<string>>;
  setXValue: React.Dispatch<React.SetStateAction<number>>;
  setYValue: React.Dispatch<React.SetStateAction<number>>;
  setNValue: React.Dispatch<React.SetStateAction<number>>;
  handleCountClick: () => void;
  handleResetClick: () => void;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" data-aos-duration="500">
      <div className="flex flex-col justify-center gap-12 w-full mx-0 bg-gray-50 p-0 md:p-8 rounded-lg shadow-md">
        {/* title */}
        <div className="flex flex-col gap-2 p-6">
          <h1 className="text-center font-bold text-base md:text-lg">
            {props.name}
          </h1>
          <span
            className="flex-grow block border-t border-gray-400"
            aria-hidden="true"
            role="presentation"
          ></span>
        </div>
        {/* end title */}

        {/* input-box f(x) */}
        <div className="flex flex-col gap-2 p-6">
          <p className="font-bold leading-10 indent-4 underline underline-offset-8">
            f(x)
          </p>
          <input
            className="h-10 min-w-[12rem] rounded-lg border-blue-950 indent-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-950"
            placeholder="Masukkan Nilai f(x)"
            onChange={(event) => props.setFxValue(event.currentTarget.value)}
            value={props.fxValue}
          />
        </div>
        {/* end input-box f(x) */}

        <div className="flex flex-col xl:flex-row gap-6 p-6">
          {/* input-box x */}
          <div className="flex flex-col gap-2">
            <p className="font-bold leading-10 indent-4 underline underline-offset-8">
              Sumbu x
            </p>
            <input
              type="number"
              className="[&::-webkit-inner-spin-button]:appearance-none h-10 min-w-[12rem] rounded-lg border-blue-950 indent-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-950"
              placeholder="Masukkan Nilai x"
              value={props.sumbuXValue}
              onChange={(event) =>
                props.setXValue(parseFloat(event.currentTarget.value))
              }
            />
          </div>
          {/* end input-box x */}

          {/* input-box y */}
          <div className="flex flex-col gap-2">
            <p className="font-bold leading-10 indent-4 underline underline-offset-8">
              Sumbu y
            </p>
            <input
              type="number"
              className="[&::-webkit-inner-spin-button]:appearance-none h-10 min-w-[12rem] rounded-lg border-blue-950 indent-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-950"
              placeholder="Masukkan Nilai y"
              value={props.sumbuYValue}
              onChange={(event) =>
                props.setYValue(parseFloat(event.currentTarget.value))
              }
            />
          </div>
          {/* end input-box y */}
        </div>

        {/* input-box N */}
        <div className="flex flex-col gap-2 p-6">
          <p className="font-bold leading-10 indent-4 underline underline-offset-8">
            N
          </p>
          <input
            type="number"
            className="[&::-webkit-inner-spin-button]:appearance-none h-10 min-w-[12rem] rounded-lg border-blue-950 indent-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-950"
            placeholder="Masukkan Nilai N"
            value={props.nValue}
            onChange={(event) =>
              props.setNValue(parseFloat(event.currentTarget.value))
            }
          />
        </div>
        {/* end input-box N */}

        <div className="flex flex-row gap-2 p-6 justify-around md:justify-normal">
          {/* reset button */}
          <button
            type="reset"
            tabIndex={-1}
            className="h-10 min-w-[8rem] rounded-lg border-2 border-gray-200 bg-gray-50 text-black shadow-lg hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-black"
            onClick={props.handleResetClick}
          >
            Reset
          </button>
          {/* end reset button */}

          {/* calculate button */}
          <button
            type="submit"
            tabIndex={-1}
            className={clsx(
              'h-10 min-w-[8rem] rounded-lg border-2 bg-blue-600 text-white shadow-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-950',
              {
                'pointer-events-none bg-gray-400': props.fxValue === '',
              }
            )}
            onClick={props.handleCountClick}
          >
            Hitung
          </button>
          {/* end calculate button */}
        </div>
      </div>
    </div>
  );
}
