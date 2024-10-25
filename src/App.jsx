import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer1"
import Sponsors from "./components/Sponsors";
import Host from "./pages/Host";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/host" element={<Host />} />
      </Routes>
      <Sponsors/>
      <Footer/>
    </Router>
    
  );
}

export default App;
