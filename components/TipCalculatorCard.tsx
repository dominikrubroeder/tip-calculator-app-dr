import React, { useState } from 'react';

const TipCalculatorCard: React.FC = () => {
  const [tip, setTip] = useState(5);

  const tipData = [0.05, 0.1, 0.15, 0.25, 0.5];

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
            {tipData.map((tip, index) => (
              <li
                key={index}
                onClick={() => console.log(tip)}
                className="bg-app-teal-900 text-white rounded-lg px-6 py-2 text-center cursor-pointer"
              >{`${tip * 100}%`}</li>
            ))}

            <li className="rounded-lg bg-app-teal-100 px-6 py-2 text-app-teal-600 cursor-pointer">
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
              type="number"
              placeholder="0"
              aria-label="Number of people"
              className="text-right w-full bg-app-teal-100 p-4 rounded-lg"
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

            <div className="text-app-accent text-5xl">€0,00</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2>Total</h2>
              <span className="text-[.8125rem] opacity-30">/ Person</span>
            </div>

            <div className="text-app-accent text-5xl">€0,00</div>
          </div>
        </div>

        <button className="text-center w-full bg-app-accent p-2 rounded-xl">
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculatorCard;
