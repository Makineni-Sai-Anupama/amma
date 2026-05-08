import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;