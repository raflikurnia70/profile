import { useEffect } from "react";
import { AtmosphereOverlay } from "./components/AtmosphereOverlay";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Credentials } from "./sections/Credentials";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Timeline } from "./sections/Timeline";

function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    // Sections mount after this effect fires; wait a tick before jumping.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      // Temporarily disable CSS smooth-scroll so the initial deep-link jump is instant,
      // not an animated scroll (smooth scroll is reserved for in-page nav clicks).
      const root = document.documentElement;
      const prevBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      el.scrollIntoView();
      root.style.scrollBehavior = prevBehavior;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AtmosphereOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
