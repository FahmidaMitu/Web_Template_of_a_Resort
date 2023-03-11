import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Find from "./components/Find";
import Footer from "./components/Footer";
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Find />
      <Footer />
    </div>
  );
}
