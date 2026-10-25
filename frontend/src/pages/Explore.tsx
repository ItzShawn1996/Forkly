import DiningCard from "../components/DiningCard";
const diningPosts = [
    {
        id: 1,
        title: "Lunch at Student Center",
        host: "Jibreel",
        time: "12:30 PM",
        spots: 2
    },
    {
        id: 2,
        title: "Dinner at Chipotle",
        host: "Pearce",
        time: "6:00 PM",
        spots: 3
    },
    {
        id: 3,
        title: "Coffee at Starbucks",
        host: "Nicholas",
        time: "10:00 AM",
        spots: 1,
    },
    {
        id: 4,
        title: "Breakfast at IHOP",
        host: "Mindy",
        time: "8:00 AM",
        spots: 4,
    },
    {
        id: 5,
        title: "Lunch at Chik-fil-A",
        host: "Aleem",
        time: "1:00 PM",
        spots: 2,
    },
    {
        id: 6,
        title: "Dinner at Olive Garden",
        host: "Jonathan",
        time: "7:00 PM",
        spots: 3
    },
    {
        id: 7,
        title: "Brunch at Panera",
        host: "Stefan",
        time: "11:00 AM",
        spots: 2
    }
];

function Explore(){
    return (
        <main>
            <h1>Explore Forkly</h1>
            <p>Discover places and meet people to eat with!</p>

            {diningPosts.map((post) => (
                <DiningCard
                    key={post.id}
                    title={post.title}
                    host={post.host}
                    time={post.time}
                    spots={post.spots}
                />
            ))}
        </main>

    );
}

export default Explore;