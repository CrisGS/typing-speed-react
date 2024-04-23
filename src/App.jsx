import './App.css';
import { useState } from 'react';
import Timer from "./components/Timer";
import SpeedInfo from './components/SpeedInfo';
import AccuracyInfo from './components/AccuracyInfo';
import GivenText from './components/GivenText';
import InputText from './components/InputText';


export default function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  return (
    <div className='app-container'>
      <div className="container-statistics">
        <Timer isTimerRunning={isTimerRunning} />
        <SpeedInfo />
        <AccuracyInfo />
      </div>
      <GivenText />
      <InputText startTimer={startTimer}/>
    </div>
  )
}