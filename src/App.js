import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
