import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  const [step, setstep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="step">
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => setstep(Number(e.target.value))}
          value={step}
        />
        <span>step : {step}</span>
      </div>

      <div className="count">
        <button onClick={() => setcount(count + step)}>+</button>
        <span>count : {count}</span>
        <button onClick={() => setcount(count - step)}>-</button>
      </div>

      <div className="output">
        <h3>
          {count === 0
            ? "Today is: "
            : `${
                count > 0
                  ? `${count} days from today is`
                  : `${Math.abs(count)} days ago was `
              } `}{" "}
          {date.toDateString()}
        </h3>
      </div>
    </div>
  );
}
