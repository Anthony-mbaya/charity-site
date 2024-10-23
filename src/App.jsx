import { Home } from "./pages/home";
import { Donate } from "./pages/donate";
import { Projects } from "./pages/projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App =()=> {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}