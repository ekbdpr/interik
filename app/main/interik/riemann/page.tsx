'use client';

import { useEffect, useState } from 'react';

import Form from '@/app/ui/interik/form';
import Table from '@/app/ui/interik/table';

import { create, all } from 'mathjs';

const math = create(all);

export default function Page() {
  const metodeName = 'Metode Riemann';

  const [fxValue, setFxValue] = useState<string>('');
  const [sumbuXValue, setSumbuXValue] = useState<number>(NaN);
  const [sumbuYValue, setSumbuYValue] = useState<number>(NaN);
  const [nValue, setNValue] = useState<number>(NaN);
  const [hValue, setHValue] = useState<number>(NaN);

  const [tableContent, setTableContent] = useState<
    { id: number; iterasi: number; x: number; fx: number }[]
  >([]);

  const [totalFx, setTotalFx] = useState<number>(0);
  const [numerikVal, setNumerikVal] = useState<number>(0);
  const [eksakVal, setEksakVal] = useState<number>(0);
  const [errorVal, setErrorVal] = useState<number>(0);

  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);

  // mengambil nilai f(x)
  const getFxValue = (xVal: number): number => {
    try {
      const compiledExpression = math.compile(fxValue);

      return compiledExpression.evaluate({ x: xVal });
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return NaN;
    }
  };

  // ekstraksi coeff dan exponent
  const extractCoeffAndExponent = (expression: string) => {
    const match = expression.match(/(\d*)x\^(\d*)/);

    if (match) {
      const coefficient = match[1] ? parseInt(match[1]) : 1;
      const exponent = match[2] ? parseInt(match[2]) : 1;

      return { coefficient, exponent };
    }

    return null;
  };

  // hitung nilai h
  const calcHValue = (): number => {
    return (sumbuYValue - sumbuXValue) / nValue;
  };

  // set array object riemann
  let riemannArr: { id: number; iterasi: number; x: number; fx: number }[] = [];

  const iterationObj = (): void => {
    let xVal = sumbuXValue;

    for (let i = 0; i < nValue + 1; i++) {
      if (i === 0) {
        let obj = {
          id: i + 1,
          iterasi: i,
          x: xVal,
          fx: getFxValue(xVal),
        };

        riemannArr.push(obj);
      } else {
        let obj = {
          id: i + 1,
          iterasi: i,
          x: xVal + calcHValue(),
          fx: getFxValue(xVal + calcHValue()),
        };

        xVal += calcHValue();
        riemannArr.push(obj);
      }
    }
  };

  // hitung total f(x)
  const countTotalFx = (): number => {
    let totalFx: number = 0;

    riemannArr.map((item) => (totalFx += item.fx));

    return totalFx;
  };

  // hitung solusi numerik
  const countNumerikSolution = (): number => calcHValue() * countTotalFx();

  // hitung solusi eksak
  const countEksakSolution = (): number => {
    const result = extractCoeffAndExponent(fxValue);

    if (result) {
      const coeffIntegral = result.coefficient;
      const exponentIntegral = result.exponent;

      return (
        (coeffIntegral / (exponentIntegral + 1)) *
          Math.pow(sumbuYValue, exponentIntegral + 1) -
        (coeffIntegral / (exponentIntegral + 1)) *
          Math.pow(sumbuXValue, exponentIntegral + 1)
      );
    }

    return 0;
  };

  // hitung kesalahan
  const countErrorVal = (): number =>
    Math.abs(countNumerikSolution() - countEksakSolution());

  // handle submit klik
  const handleCountClick = (): void => {
    setHValue(calcHValue());
    iterationObj();
    setTableContent(riemannArr);
    setTotalFx(countTotalFx());
    setNumerikVal(countNumerikSolution());
    setEksakVal(countEksakSolution());
    setErrorVal(countErrorVal());
  };

  // validasi input
  const inputValidation = () => {
    if (
      fxValue === '' ||
      Number.isNaN(sumbuXValue) ||
      Number.isNaN(sumbuYValue) ||
      Number.isNaN(nValue)
    ) {
      setIsInputEmpty(true);
      return;
    }

    setIsInputEmpty(false);
  };

  useEffect(
    () => inputValidation(),
    [fxValue, sumbuXValue, sumbuYValue, nValue]
  );

  return (
    <div className="flex flex-col w-full xl:flex-row gap-20">
      {/* form */}
      <Form
        name={metodeName}
        isInputEmpty={isInputEmpty}
        setFxValue={setFxValue}
        setXValue={setSumbuXValue}
        setYValue={setSumbuYValue}
        setNValue={setNValue}
        handleCountClick={handleCountClick}
      />
      {/* end form */}

      {/* table */}
      <Table
        tableContent={tableContent}
        hValue={hValue}
        totalFx={totalFx}
        numerikVal={numerikVal}
        eksakVal={eksakVal}
        errorVal={errorVal}
      />
      {/* end table */}
    </div>
  );
}
