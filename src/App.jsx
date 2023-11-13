import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="hero"></div>
      <footer className="absolute inset-x-0 bottom-2 left-1/2"></footer>
    </div>
  );
}

export default App;
