import "./DiningCard.css";


type DiningCardProps = {
    title: string;
    host: string;
    time: string;
    spots: number;
    joined: boolean;
    onToggleJoin: () => void;
};

function DiningCard({title, host, time, spots, joined, onToggleJoin}: DiningCardProps){
    const isFull = spots === 0;
    return(
        <div className="dining-card">
            <h3>{title}</h3>
            <p>Posted by {host}</p>
            <p>Time: {time}</p>
            <p>Available spots: {spots}</p>
            <button 
                onClick={(onToggleJoin)}
                disabled={isFull && !joined}
            >
                {joined ? "Leave Meal" : isFull ? "Meal Full" : "Join Meal"}
            </button>
        </div>
    );
}

export default DiningCard;