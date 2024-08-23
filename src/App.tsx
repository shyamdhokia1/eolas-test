import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clockOn, setClockOn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (clockOn) {
        setCount((count) => count + 1)
      }
    }, 2000);
    return () => clearInterval(timer);
  },[clockOn]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Eolas Test</h1>
      <div className="card">
        <div className="top-buttons">
          <button className = "small-button" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <button className = "small-button" onClick={() => setClockOn((clockOn)=> clockOn ? false : true)}>
            {clockOn ? 'Pause' : 'Resume'}
          </button>
        </div>
        <button className="large-button" onClick={()=> {setClockOn(false); setCount(0);}}>
            Reset
        </button>
      </div>
    </>
  );
}

export default App;
