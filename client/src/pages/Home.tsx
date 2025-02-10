import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
