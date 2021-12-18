import { Route, Routes } from "react-router";
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Article from './components/Article.js';
import Navbar from './components/Navbar.js';
import Footer from "./components/Footer.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact/*" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/article/:id" element={<Article/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
