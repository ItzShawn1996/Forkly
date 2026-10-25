import Navbar from "./components/Navbar";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <section className="hero">
              <h1>Welcome to Forkly... by K. Lalwah</h1>
              <h2>Meet. Connect. Enjoy.</h2>
              <p>Connecting students through food</p>

              <button className="get-started-btn">Get Started</button>

            </section>
          </main> }
        />

        <Route path="/explore" element={<Explore />} />
      </Routes>        
    </div>
  );
}

export default App;