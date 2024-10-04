import "./App.css";
import Works from "./components/Works";
import Lenis from "lenis";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
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
      <Navbar />
      <Hero />
      <Works />
    </div>
  );
}

export default App;
