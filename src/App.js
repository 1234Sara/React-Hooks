import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
