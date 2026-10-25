import "./DiningCard.css";
import { useState } from "react";

type DiningCardProps = {
    title: string;
    host: string;
    time: string;
    spots: number;
};

function DiningCard({title, host, time, spots}: DiningCardProps){
    const [joined, setJoined] = useState(false);
    const isFull = spots === 0;
    return(
        <div className="dining-card">
            <h3>{title}</h3>
            <p>Posted by {host}</p>
            <p>Time: {time}</p>
            <p>Available spots: {joined ? spots - 1 : spots}</p>
            <button 
                onClick={() => setJoined(!joined)}
                disabled={isFull && !joined}
            >
                {joined ? "Joined!" : isFull ? "Meal Full" : "Join Meal"}
            </button>
        </div>
    );
}

export default DiningCard;