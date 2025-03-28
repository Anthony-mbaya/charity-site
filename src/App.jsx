import { Home } from "./pages/home";
import { Donate } from "./pages/donate";
import { Projects } from "./pages/projects";
import { AboutUs } from "./pages/about";
import { ContactUs } from "./pages/contacts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App =()=> {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}