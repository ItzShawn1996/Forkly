import DiningCard from "../components/DiningCard";
import "./Explore.css";
import {useState} from "react";
import CreateMealForm from "../components/CreateMealForm";

const initialDiningPosts = [
    {
        id: "1",
        title: "Lunch at Student Center",
        host: "Jibreel",
        time: "12:30 PM",
        spots: 0
    },
    {
        id: "2",
        title: "Dinner at Chipotle",
        host: "Pearce",
        time: "6:00 PM",
        spots: 3
    },
    {
        id: "3",
        title: "Coffee at Starbucks",
        host: "Nicholas",
        time: "10:00 AM",
        spots: 1,
    },
    {
        id: "4",
        title: "Breakfast at IHOP",
        host: "Mindy",
        time: "8:00 AM",
        spots: 4,
    },
    {
        id: "5",
        title: "Lunch at Chik-fil-A",
        host: "Aleem",
        time: "1:00 PM",
        spots: 2,
    },
    {
        id: "6",
        title: "Dinner at Olive Garden",
        host: "Jonathan",
        time: "7:00 PM",
        spots: 3
    },
    {
        id: "7",
        title: "Brunch at Panera",
        host: "Stefan",
        time: "11:00 AM",
        spots: 2
    }
];

function Explore(){
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [diningPosts, setDiningPosts] = useState(initialDiningPosts);
    const [showCreateForm, setShowCreateForm] = useState(false);

    function handleCreateMeal(meal: {title: string; host: string; time: string; spots: number; }){
        const newPost = {
            id: crypto.randomUUID(),
            ...meal
        };
        setDiningPosts((previousPosts) => [
            ...previousPosts,
            newPost
        ]);

        setShowCreateForm(false);
    }

    const filteredPosts = diningPosts.filter((post) => {
        const matchesAvailability = filter === "all" || post.spots > 0;
        const matchesSearch = post.title
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesAvailability && matchesSearch;
    });

    return (
        <main className="explore-page">
            <header className="explore-header">
                <h1>Explore Forkly</h1>
                <p>Discover places and meet people to eat with!</p>
            </header>

            <button
                className="create-meal-toggle"
                onClick={() => setShowCreateForm(!showCreateForm)}
            >
                {showCreateForm? "Close Form" : "+ Create Meal"}
            </button>

            {showCreateForm && (
                <CreateMealForm onCreateMeal={handleCreateMeal} />
            )}

            <div className="explore-search">
                <input
                    type="text"
                    placeholder="Search Meals"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="explore-filters">
                <button 
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All Meals
                </button>

                <button
                    className={filter === "available" ? "active" : ""}
                    onClick={() => setFilter("available")}
                >
                    Available Meals
                </button>
            </div>

            {filteredPosts.length === 0 ? (
                <p className="no-results">
                    No meals found. Try another search or filter
                </p>
            ) : (
                <div className="dining-grid">
                    {filteredPosts.map((post) => (
                        <DiningCard
                            key={post.id}
                            title={post.title}
                            host={post.host}
                            time={post.time}
                            spots={post.spots}
                        />
                    ))}
                </div>
                )
            }
        </main>

    );
}

export default Explore;