import "../assets/speedInfo.css"
import { useState } from "react";

export default function SpeedInfo() {
    const [speed, setSpeed] = useState(0);
    return (
        <div className="speed-info">
            <span className="speed-value" id="speed-value">{speed}</span>
            <span className="speed-units">words/min</span>
        </div>
    )
}