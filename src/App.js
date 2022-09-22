import "./App.css";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(70);
  const [tempColor, setTempColor] = useState("warm");

  const increaseTemp = () => {
    setTemp((prevTemp) => prevTemp + 1);
    if (temp >= 79) {
      console.log(`temp is ${temp}`);
      setTempColor("hot");
    } else if (temp < 81 && temp >= 70) {
      console.log(`temp is ${temp}`);
      setTempColor("warm");
    } else {
      console.log(`temp is ${temp}`);
      setTempColor("cold");
    }
  };

  const decreaseTemp = () => {
    setTemp((prevTemp) => prevTemp - 1);
    if (temp >= 79) {
      console.log(`temp is ${temp}`);
      setTempColor("hot");
    } else if (temp < 80 && temp > 70) {
      console.log(`temp is ${temp}`);
      setTempColor("warm");
    } else {
      console.log(`temp is ${temp}`);
      setTempColor("cold");
    }
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
