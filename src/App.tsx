import './App.css';

import React, { useState } from 'react';

import logo from './394-2025-Logo.svg';
import Timer from './components/Timer';

function App() {
  const [selectedTime, setSelectedTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  function handleFinish() {
    setIsFinished(true);
    setIsRunning(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Time to Code!</h1>
      </header>
      <Timer
        secondsDuration={selectedTime}
        isRunning={isRunning}
        isPaused={isPaused}
        isReset={isReset}
        complete={handleFinish}
      />
      <div className="timer-controls">
        <label htmlFor="time-select" className="time-select-label">
          <h2> Select Timer Duration:</h2>
        </label>
        <select
          name="time-select"
          id="time-select"
          onChange={(e) => {
            setSelectedTime(Number(e.target.value) * 60);
            setIsFinished(false);
            setIsRunning(false);
            setIsPaused(false);
            setIsReset(true);
          }} // Convert minutes to seconds
          className="time-select"
        >
          <option value={1}>1 minute</option>
          <option value={5}>5 minutes</option>
          <option value={10}>10 minutes</option>
          <option value={15}>15 minutes</option>
          <option value={20}>20 minutes</option>
          <option value={30}>30 minutes</option>
        </select>
        {isFinished ? <h2>Time&apos;s up!</h2> : null}
        <button
          className="timer-button"
          onClick={() => {
            setIsPaused(false);
            setIsRunning(true);
            setIsReset(false);
          }}
        >
          Start
        </button>
        <button className="timer-button" onClick={() => setIsPaused(true)}>
          Stop
        </button>
        <button
          className="timer-button"
          onClick={() => {
            setIsReset(true);
            setIsRunning(false);
            setIsPaused(true);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
