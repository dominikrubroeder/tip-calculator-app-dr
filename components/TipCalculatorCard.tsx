import React, { useMemo, useState } from 'react';

const tipData = [0.05, 0.1, 0.15, 0.25, 0.5];

const TipCalculatorCard: React.FC = () => {
  const [tip, setTip] = useState<number>(0.15);
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);

  const handleCustomTip = () => {
    setTip('Custom');
  };

  const tipAmountPerPerson = useMemo(
    () => ((bill * tip) / people).toFixed(2),
    [bill, tip, people]
  );

  const totalAmount = useMemo(
    () => ((bill + bill * tip) / people).toFixed(2),
    [bill, tip, people]
  );

  return (
    <div className="grid grid-cols-2 gap-8 w-full p-8 bg-white rounded-3xl">
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
              onChange={(event) => setBill(+event.target.value)}
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
                onClick={() => setTip(currTip)}
                className={`text-white rounded-lg px-6 py-2 text-center cursor-pointer transition hover:scale-105 ${
                  currTip === tip ? 'bg-app-accent' : 'bg-app-teal-900'
                }`}
              >{`${currTip * 100}%`}</li>
            ))}

            <li
              className={`rounded-lg  px-6 py-2 cursor-pointer transition hover:scale-105 ${
                tip === 'Custom'
                  ? 'text-white bg-app-accent'
                  : 'text-app-teal-600 bg-app-teal-100'
              }`}
              onClick={handleCustomTip}
            >
              Custom
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h2>Number of people</h2>
          <div className="relative">
            <label htmlFor="people" className="absolute left-4 top-4">
              €
            </label>
            <input
              id="people"
              name="people"
              value={people}
              onChange={(event) => setPeople(+event.target.value)}
              type="number"
              placeholder="0"
              aria-label="Number of people"
              className="text-right w-full bg-app-teal-100 p-4 rounded-lg transition hover:outline-app-accent focus:outline-app-accent"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between flex-col bg-app-teal-900 rounded-xl text-white p-10">
        <div className="grid gap-8 w-full">
          <div className="flex items-center justify-between">
            <div>
              <h2>Tip Amount</h2>
              <span className="text-[.8125rem] opacity-30">/ Person</span>
            </div>

            <div className="text-app-accent text-5xl">
              €{tipAmountPerPerson}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2>Total</h2>
              <span className="text-[.8125rem] opacity-30">/ Person</span>
            </div>

            <div className="text-app-accent text-5xl">€{totalAmount}</div>
          </div>
        </div>

        <button className="text-center w-full bg-app-accent p-2 rounded-xl transition hover:scale-105">
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculatorCard;
