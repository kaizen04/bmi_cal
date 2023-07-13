import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [msg, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid Weight and Height");
    } else {
      let bmi = ((weight / (height * height)) * 10000);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.4) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are a healthy Weight");
      }
      else if(bmi >= 25 && bmi < 39.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("You are Obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Please enter your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Please enter your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
