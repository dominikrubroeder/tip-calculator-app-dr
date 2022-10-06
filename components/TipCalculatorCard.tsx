import React, { useState } from 'react';

const TipCalculatorCard: React.FC = () => {
  const [tip, setTip] = useState(5);

  const tipData = [0.05, 0.1, 0.15, 0.25, 0.5];

  return (
    <div className="grid grid-cols-2 gap-8 w-full p-8 bg-white rounded-3xl">
      <div>
        <div className="grid gap-2">
          <h2>Bill</h2>
          <div>
            <label htmlFor="euro">€</label>
            <input
              id="euro"
              name="euro"
              type="number"
              placeholder="0"
              aria-label="Euro"
              className="text-right"
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
      </div>

      <div className="bg-app-teal-900 rounded-xl text-white p-4">2</div>
    </div>
  );
};

export default TipCalculatorCard;
