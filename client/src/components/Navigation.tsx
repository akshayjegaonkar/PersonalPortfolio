import { Link } from "wouter";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">Portfolio</a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;