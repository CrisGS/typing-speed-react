import React, {useState} from 'react';
import '../assets/inputText.css'

export default function InputText({ startTimer }) {
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const handleInput = () => {
      if (!isTimerRunning) {
        startTimer();
        setIsTimerRunning(true);
      }
    };

    return (
        <div className="typing-area">
          <textarea type="text" id="typeText" className="text" onInput={handleInput}></textarea>
        </div>
    );
}