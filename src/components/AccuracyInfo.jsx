import { useState } from "react"
import "../assets/accuracyInfo.css"

export default function AccuracyInfo() {
    const [accuracy, setAccuracy] = useState(0);

    return (
        <div className="accuracy-info">
            <span className="accuracy-value" id="accuracy-value">{accuracy}</span>
            <span className="accuracy-units">%</span>
        </div>
    )
}