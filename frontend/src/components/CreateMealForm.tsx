import "./CreateMealForm.css";
import {useState} from "react";

type NewMeal = {
    title: string;
    host: string;
    time: string;
    spots: number;
};

type CreateMealFormProps = {
    onCreateMeal: (meal: NewMeal) => void;
};

function CreateMealForm({ onCreateMeal }: CreateMealFormProps){

    const [title, setTitle] = useState("");
    const [host, setHost] = useState("");
    const [time, setTime] = useState("");
    const [spots, setSpots] = useState("");

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        const newMeal = {
            title: title,
            host: host,
            time: time,
            spots: Number(spots)
        };

        onCreateMeal(newMeal);

        setTitle("");
        setHost("");
        setTime("");
        setSpots("");
    }

    return(
        <form className= "create-meal-form" onSubmit={handleSubmit}>
            <h2>Create Meal</h2>

            <input
                type="text"
                placeholder="Meal Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Host Name"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Available Spots"
                value={spots}
                onChange={(e) => setSpots(e.target.value)}
                min="1"
                required
            />

            <button type="submit">
                Create Meal
            </button>
        </form>
    );
}

export default CreateMealForm;
