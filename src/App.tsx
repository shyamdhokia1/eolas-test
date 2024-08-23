import { useEffect, useState, ChangeEvent } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { searchProducts, Product } from "./functions/searchProducts";

function App() {
  const [count, setCount] = useState(0);
  const [clockOn, setClockOn] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (clockOn) {
        setCount((count) => count + 1)
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [clockOn]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
          <button className="small-button" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <button className="small-button" onClick={() => setClockOn((clockOn) => clockOn ? false : true)}>
            {clockOn ? 'Pause' : 'Resume'}
          </button>
        </div>
        <div>
          <button className="reset-button" onClick={() => { setClockOn(false); setCount(0); }}>
            Reset
          </button>
        </div>
        <div>
          <input className="search-input" type="text" placeholder="Search for Products" onChange={handleChange}></input>
          <button className="search-button" onClick={() => searchProducts(search)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
