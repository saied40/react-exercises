import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./000-home/home.page";
import Counter from "./001-counter-app/counter.page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};
