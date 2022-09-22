import "./App.css";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(70);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temp}°F</div>
      </div>
      <div className="button-container">
        <button onClick={() => setTemp((prevTemp) => prevTemp + 1)}>+</button>
        <button onClick={() => setTemp((prevTemp) => prevTemp - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
