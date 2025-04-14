import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(0);
  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef = setInterval(() => {
      setData((prev) => prev + 0.1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (data === 1) {
      clearInterval(intervalRef);
    }
  }, [data]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>This is a progress bar</h2>
      <label htmlFor="progressBar">Updating: </label>
      <progress id="progresBar" value={data} />
    </div>
  );
}
