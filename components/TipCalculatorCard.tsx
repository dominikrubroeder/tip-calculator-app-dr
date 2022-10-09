import React, { useMemo, useState } from 'react';

const tipData = [0.05, 0.1, 0.15, 0.25, 0.5];

const TipCalculatorCard: React.FC = () => {
  const [tip, setTip] = useState<null | number>(0.15);
  const [customTip, setCustomTip] = useState<null | number>(null);
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);

  const tipAmountPerPerson = useMemo(
    () => ((bill * tip) / people).toFixed(2),
    [bill, tip, people]
  );

  const totalAmount = useMemo(
    () => ((bill + bill * tip) / people).toFixed(2),
    [bill, tip, people]
  );

  const reset = () => {
    setTip(tipData[0]);
    setBill(0);
    setPeople(1);
  };

  return (
    <div className="grid gap-8 w-full p-8 bg-white rounded-3xl md:grid-cols-2">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h2>Bill</h2>
          <div className="relative">
            <label htmlFor="euro" className="absolute left-4 top-4">
              €
            </label>
            <input
              id="euro"
              name="euro"
              value={bill}
              onChange={(event) =>
                setBill(isNaN(+event.target.value) ? 0 : +event.target.value)
              }
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
          <ul className="grid grid-cols-3 gap-2">
            {tipData.map((currTip, index) => (
              <li
                key={index}
                onClick={() => {
                  setCustomTip(null);
                  setTip(currTip);
                }}
                className={`text-white rounded-lg px-6 py-2 text-center cursor-pointer transition hover:scale-105 ${
                  currTip === tip && customTip === null
                    ? 'bg-app-accent'
                    : 'bg-app-teal-900'
                }`}
              >{`${currTip * 100}%`}</li>
            ))}

            <li>
              <input
                id="custom"
                name="custom"
                value={customTip ?? ''}
                onChange={(event) => setCustomTip(+event.target.value)}
                type="number"
                placeholder="Custom"
                aria-label="Custom tip percentage"
                className={`w-full rounded-lg px-6 py-2 cursor-pointer transition hover:scale-105 ${
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
              className="bg-app-teal-100 rounded-lg p-4 text-app-accent"
              onClick={() => setPeople((previousState) => --previousState)}
            >
              -
            </button>
            <div className="flex-1 relative">
              <label htmlFor="people" className="absolute left-4 top-4">
                €
              </label>
              <input
                id="people"
                name="people"
                value={people}
                onChange={(event) =>
                  setPeople(
                    isNaN(+event.target.value)
                      ? 1
                      : Math.floor(+event.target.value)
                  )
                }
                type="number"
                min={1}
                placeholder="0"
                aria-label="Number of people"
                className="text-center w-full bg-app-teal-100 p-4 rounded-lg transition hover:outline-app-accent focus:outline-app-accent"
              />
            </div>
            <button
              className="bg-app-teal-100 rounded-lg p-4 text-app-accent"
              onClick={() => setPeople((previousState) => ++previousState)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-16 flex-col bg-app-teal-900 rounded-xl text-white p-10">
        <div className="grid gap-8 w-full">
          <div className="flex items-center gap-4 justify-between">
            <h2 className="mb-4">Tip Amount</h2>

            <div>
              <div className="text-app-accent text-5xl">
                €{tipAmountPerPerson}
              </div>
              <span className="text-[.8125rem] opacity-30 text-right w-full block">
                / Person
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <h2 className="mb-4">Total</h2>

            <div>
              <div className="text-app-accent text-5xl">€{totalAmount}</div>
              <span className="text-[.8125rem] opacity-30 text-right w-full block">
                / Person
              </span>
            </div>
          </div>
        </div>

        <button
          className="text-center w-full bg-app-accent p-2 rounded-xl transition hover:scale-105"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculatorCard;
