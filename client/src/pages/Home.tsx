import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;