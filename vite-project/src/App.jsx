import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Collection from "./Components/Collection";
import Footer from './Components/Footer';
import InfoItem from "./Components/InfoItem";
import "./i18n"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/infoitem/:id" element={<InfoItem />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
