import React from "react";
import svg from "./images/logo.svg";
import illustration from "./images/illustration-dashboard.png";
import { useState } from "react";

export default function App() {
  const [valid, setValid] = useState(true);
  const [value, SetValue] = useState("");

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  const checker = () => {
    if (value.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  return (
    <div className="container">
      <header>
        <img src={svg} alt="logo"></img>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <h3>Subscribe and get notified</h3>

        <div className="form">
          <input
            type="email"
            id="message"
            name="message"
            placeholder="Email Address"
            onChange={handleChange}
            value={value}
            autoComplete="off"
            style={{ border: !valid && "1px solid var(--LightRed)" }}
          />
          <button onClick={checker}>Notify Me</button>
          {!valid ? <p className="alert">Not a valid Email</p> : ""}
        </div>
      </header>
      <img src={illustration} alt="illustration" />
      <footer>&copy; Copyright Ping. All rights reserved.</footer>
    </div>
  );
}
