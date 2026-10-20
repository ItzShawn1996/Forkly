import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="hero">
          <h1>Welcome to Forkly... by K. Lalwah</h1>
          <h2>Meet. Connect. Enjoy.</h2>
          <p>Connecting students through food</p>

          <button className="get-started-btn">Get Started</button>

        </section>
      </main>
      
    </div>
  );
}

export default App;