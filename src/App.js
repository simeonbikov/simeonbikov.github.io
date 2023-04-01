import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
