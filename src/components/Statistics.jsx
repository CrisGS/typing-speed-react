import '../assets/statistics.css'
import Timer from './Timer';

export default function Statistics() {
    return (
        <div className="container-statistics">
            <Timer />
            <div className="speed-info">
                <span className="speed-value" id="speed-value">60</span>
                <span className="speed-units">words/min</span>
            </div>
            <div className="accuracy-info">
                <span className="accuracy-value" id="accuracy-value">100</span>
                <span className="accuracy-units">%</span>
            </div>
        </div>
    );
}