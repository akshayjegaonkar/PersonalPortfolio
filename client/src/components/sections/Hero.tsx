import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const resumeUrl = "/resume.pdf"; // You'll need to add your resume file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Akshay_Jegaonkar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Akshay Jegaonkar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enthusiastic software developer with expertise in Python, Django, and SQL, 
            and a strong foundation in front-end frameworks like React.js. Passionate 
            about learning new technologies, system integration, and automation.
          </p>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button 
              onClick={downloadResume}
              size="lg"
              variant="outline"
              className="group"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;