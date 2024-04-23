import { useState, useEffect } from 'react';
import '../assets/timer.css'

export default function Timer({ isTimerRunning }) {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(seconds => seconds - 1);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds, isTimerRunning]);

    return (
        <div className="container-timer">
            <span className="time-value">{seconds}</span>
            <span className="time-units">seconds</span>
        </div>
    );
}