import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="date-counter">
      <div className="step-holder">
        <button className="minus" onClick={() => setStep((s) => --s)}>
          -
        </button>
        <span className="stepper">Step: {step}</span>
        <button className="plus" onClick={() => setStep((s) => ++s)}>
          +
        </button>
      </div>
      <div className="count-holder">
        <button className="minus" onClick={() => setCount((c) => (c -= step))}>
          -
        </button>
        <span className="counter">Count: {count}</span>
        <button className="plus" onClick={() => setCount((c) => (c += step))}>
          +
        </button>
      </div>

      <div className="date-holder">
        <span className="date">
          {`${
            date === new Date()
              ? "Today is "
              : date < new Date()
              ? `${count} days ago was `
              : `${count} days from today is `
          } ${date.toDateString()}`}
        </span>
      </div>
    </div>
  );
}

export default App;
