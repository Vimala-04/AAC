import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const generateColor = () => {
    const hex ="#" + Math.floor(Math.random() * 0xFFFFFF)
     .toString(16)
     .padStart(6, "0");
     setColor(hex);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1> Color Generator</h1>
      <button onClick={generateColor}>My Color</button>
      <p>{color}</p>
    </div>
  );
}
export default App;