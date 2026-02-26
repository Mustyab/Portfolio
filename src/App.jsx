import { useEffect } from "react";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0
        ? (scrollTop / docHeight) * 100
        : 0;

      bar.style.width = `${progress}%`;
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  
  useEffect(() => {
    const sectionIds = ["home", "projects", "contact"];
    const navLinks = document.querySelectorAll(".nav-link");
  
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.link === id);
      });
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // section must be 50% visible
      }
    );
  
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-progress" />

      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App







