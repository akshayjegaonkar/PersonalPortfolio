import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "../AnimatedSection";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and TypeScript",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icons: [SiReact, SiTypescript, SiTailwindcss]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icons: [SiReact, SiTypescript, SiTailwindcss]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icons: [SiReact, SiTypescript, SiTailwindcss]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="h-6 w-6 text-gray-600" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
