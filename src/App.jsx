import "./App.css";
import Hero_About from "./components/Hero_About";
import Lenis from "lenis";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainPage = ()=>{
  return(
    <div>
      <Navbar />
      <Hero />
      <Hero_About />
      <Work />
    </div>
  )
}
const Aboutpage = ()=>{
  return(
    <div>
      <Navbar />
      <About />
    </div>
  )
}
function App() {
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => t,
  smooth: true,
});
  lenis.on("scroll", (e) => {
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  

  return (
    <div className="main-div">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
