import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(87);
  return (
    <div className="App">
      <h3 style={{ color: `${count % 2 ? "red" : "green"}` }}>
        Counter : {count}
      </h3>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increament
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(count * 2);
          }}
        >
          Double
        </button>
      </div>
    </div>
  );
}

export default App;
