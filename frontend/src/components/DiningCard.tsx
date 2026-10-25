import "./DiningCard.css";

type DiningCardProps = {
    title: string;
    host: string;
    time: string;
    spots: number;
};

function DiningCard({title, host, time, spots}: DiningCardProps){
    return(
        <div className="dining-card">
            <h3>{title}</h3>
            <p>Posted by {host}</p>
            <p>Time: {time}</p>
            <p>Available spots: {spots}</p>
            <button>Join Meal</button>
        </div>
    );
}

export default DiningCard;