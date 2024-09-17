import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import "./counter.css";
import { WEBSITE_TITLE } from '../constants';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const numInput = useRef(null);

  const handleCounterChange = (method='+'||'-') => {
    if (!numInput.current || !numInput.current.value) return;
    const value = parseInt(numInput.current.value, 10);
    setCounter(counter + (method === '+' ? value : -value));
    numInput.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>001 Counter App | {WEBSITE_TITLE}</title>
      </Helmet>
      <div className="text-center w-fit m-auto flex flex-col items-center gap-6 *:w-full">
        <h1>#01 - Counter App</h1>
        <div className="flex items-center justify-between gap-4 text-4xl min-w-fit">
          <button
            onClick={() => setCounter(counter - 1)}
            className="btn border-red-700 text-red-700"
          >
            -
          </button>
          <h1
            className={
              counter > 0 ? "text-green-700" : counter < 0 ? "text-red-700" : ""
            }
          >
            {counter}
          </h1>
          <button
            onClick={() => setCounter(counter + 1)}
            className="btn border-green-700 text-green-700"
          >
            +
          </button>
        </div>
        <div className="flex-center flex-col w-full gap-8 text-center">
          <input
            type="number"
            ref={numInput}
            className="text-black text-center"
          />
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => handleCounterChange("-")}
              className="text-red-600 border border-red-700 rounded-full py-2 px-4"
            >
              Decrease
            </button>
            <button
              onClick={() => handleCounterChange("+")}
              className="text-green-600 border border-green-700 rounded-full py-2 px-4"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
