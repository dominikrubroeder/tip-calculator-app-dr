import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import PeopleIcon from './svg/PeopleIcon';

const tipData = [0.05, 0.1, 0.15, 0.25, 0.5];

const TipCalculatorCard: React.FC = () => {
  const [tip, setTip] = useState<null | number>(0.15);
  const [customTip, setCustomTip] = useState<null | number>(null);
  const [bill, setBill] = useState<null | number>(null);
  const [people, setPeople] = useState<number>(1);

  const tipAmountPerPerson = useMemo(() => {
    if (tip && bill) return ((bill * tip) / people).toFixed(2);

    if (customTip && bill)
      return ((bill * (customTip / 100)) / people).toFixed(2);

    return '0.00';
  }, [bill, tip, people, customTip]);

  const totalAmount = useMemo(() => {
    if (tip && bill) return ((bill + bill * tip) / people).toFixed(2);
    if (customTip && bill)
      return ((bill + bill * (customTip / 100)) / people).toFixed(2);

    return '0.00';
  }, [bill, tip, people, customTip]);

  const validateBillInput = (event: any) => {
    return isNaN(+event.target.value) || +event.target.value === 0
      ? null
      : +event.target.value < 0
      ? +event.target.value * -1
      : +event.target.value;
  };

  const validatePeopleInput = (event: any) => {
    return isNaN(+event.target.value) || +event.target.value < 1
      ? 1
      : Math.floor(+event.target.value);
  };

  const reset = () => {
    setTip(tipData[0]);
    setCustomTip(null);
    setBill(null);
    setPeople(1);
  };

  return (
    <div className="grid gap-8 w-full p-8 bg-white opacity-0 invisible rounded-tl-3xl rounded-tr-3xl animate-fadeUp md:rounded-3xl md:grid-cols-2">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h2>Bill</h2>
          <div className="relative">
            <label
              htmlFor="euro"
              className="absolute left-4 top-4 text-app-teal-400 text-xl z-10"
            >
              €
            </label>
            <input
              id="euro"
              name="euro"
              value={bill ?? ''}
              onChange={(event) => setBill(validateBillInput(event))}
              min={0}
              type="number"
              placeholder="0"
              aria-label="Euro"
              className="text-right w-full bg-app-teal-100 p-4 rounded-lg"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <h2>Select tip %</h2>

          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {tipData.map((currTip, index) => (
              <li key={index}>
                <button
                  className={`w-full text-white rounded-lg px-6 py-2 text-center font-bold ${
                    currTip === tip && customTip === null
                      ? 'bg-app-accent'
                      : 'bg-app-teal-900'
                  }`}
                  onClick={() => {
                    setCustomTip(null);
                    setTip(currTip);
                  }}
                >{`${currTip * 100}%`}</button>
              </li>
            ))}

            <li>
              <input
                id="custom"
                name="custom"
                value={customTip ?? ''}
                onChange={(event) => {
                  setCustomTip(+event.target.value);
                  setTip(null);
                }}
                type="number"
                placeholder="Custom"
                aria-label="Custom tip percentage"
                className={`w-full rounded-lg px-6 py-2 cursor-pointer text-center font-bold ${
                  customTip !== null
                    ? 'text-white bg-app-accent'
                    : 'text-app-teal-600 bg-app-teal-100'
                }`}
              />
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h2>Number of people</h2>

          <div className="flex gap-2">
            <button
              className={`rounded-lg p-4 ${
                people > 1
                  ? 'cursor-pointer opacity-100'
                  : 'cursor-not-allowed opacity-30'
              }`}
              onClick={() =>
                setPeople((previousState) => {
                  if (previousState > 1) {
                    return --previousState;
                  } else {
                    return 1;
                  }
                })
              }
              disabled={people === 1}
            >
              -
            </button>
            <div className="flex-1 relative">
              <label
                htmlFor="people"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
              >
                <PeopleIcon />
              </label>
              <input
                id="people"
                name="people"
                value={people}
                onChange={(event) => setPeople(validatePeopleInput(event))}
                type="number"
                min={1}
                placeholder="0"
                aria-label="Number of people"
                className="text-center w-full bg-app-teal-100 p-4 rounded-lg"
              />
            </div>
            <button
              className="rounded-lg p-4"
              onClick={() => setPeople((previousState) => ++previousState)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-10 flex-col bg-app-teal-900 rounded-xl text-white p-10 opacity-0 invisible animate-scaleUp md:gap-16">
        <div className="grid gap-4 w-full md:gap-8">
          <div className="flex items-center justify-between md:gap-4">
            <h2 className="mb-4">Tip Amount</h2>

            <div>
              <div className="text-app-accent text-[2rem] font-bold md:text-5xl">
                €{tipAmountPerPerson}
              </div>
              <span className="text-[.8125rem] opacity-30 text-right w-full block">
                / Person
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between md:gap-4">
            <h2 className="mb-4">Total</h2>

            <div>
              <div className="text-app-accent text-[2rem] font-bold md:text-5xl">
                €{totalAmount}
              </div>
              <span className="text-[.8125rem] opacity-30 text-right w-full block">
                / Person
              </span>
            </div>
          </div>
        </div>

        <button
          className="text-center w-full bg-app-accent text-xl p-2 rounded-xl uppercase text-app-teal-900 font-bold"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculatorCard;
