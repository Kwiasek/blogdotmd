import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  window.addEventListener("keydown", (e) => {
    if (e.key == "x") {
      window.open(
        "https://www.youtube.com/watch?v=0qzLRlQFFQ4&ab_channel=VerbumDei"
      );
    }
  });
  return (
    <>
      <Navbar />
      <div className="hero"></div>
    </>
  );
}

export default App;
