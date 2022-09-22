import "./App.css";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(70);
  const [tempColor, setTempColor] = useState("warm");

  const increaseTemp = () => {
    if (temp > 78) {
      setTempColor("hot");
    } else if (temp < 81 && temp > 68) {
      setTempColor("warm");
    } else if (temp < 70) {
      setTempColor("warm");
    }
    setTemp((prevTemp) => prevTemp + 1);
  };

  const decreaseTemp = () => {
    if (temp < 81 && temp > 70) {
      setTempColor("warm");
    } else if (temp < 72) {
      setTempColor("cold");
    }
    setTemp((prevTemp) => prevTemp - 1);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}°F</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;
