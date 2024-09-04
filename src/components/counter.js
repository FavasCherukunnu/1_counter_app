import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="counter-controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="counter-step">
        <label htmlFor="step">Step:</label>
        <input
          type="number"
          id="step"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Counter;
