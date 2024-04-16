import { useState, useEffect } from 'react';
import '../assets/timer.css'

export default function Timer() {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 55) {
                clearInterval(interval);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }, 1000);
        // Curățăm intervalul la dezactivarea componentei pentru a evita memory leak-uri
        return () => clearInterval(interval);
      }, [seconds]);

    return (
        <div className="container-timer">
            <span className="time-value">{seconds}</span>
            <span className="time-units">seconds</span>
        </div>
    );
}