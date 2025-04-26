import './App.css';

import React, { useState } from 'react';

import logo from './394-2025-Logo.svg';
import Timer from './components/Timer';

function App() {
  const [selectedTime, setSelectedTime] = useState(60);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Time to Code!</h1>
      </header>
      <Timer secondsDuration={selectedTime} />
      <div className="timer-controls">
        <label htmlFor="time-select" className="time-select-label">
          <h2> Select Timer Duration:</h2>
        </label>
        <select
          name="time-select"
          id="time-select"
          onChange={(e) => {
            setSelectedTime(Number(e.target.value) * 60);
          }} // Convert minutes to seconds
          className="time-select"
        >
          <option value={1 / 6}>10 seconds</option>
          <option value={5}>5 minutes</option>
          <option value={10}>10 minutes</option>
          <option value={15}>15 minutes</option>
          <option value={20}>20 minutes</option>
          <option value={30}>30 minutes</option>
        </select>
        <button className="timer-button">Start</button>
        <button className="timer-button">Stop</button>
        <button className="timer-button">Reset</button>
      </div>
    </div>
  );
}

export default App;
