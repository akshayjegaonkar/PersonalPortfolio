import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "../AnimatedSection";
import { SiReact, SiTypescript, SiTailwindcss, SiPython, SiDjango, SiSqlite, SiHtml5, SiCss3, SiBootstrap, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "EmpTrack — Employee Management System",
    description: "Built a system for adding, removing, and managing employees with secure authentication, role-based access, and real-time updates. Features include department assignments, salary management, and a user-friendly dashboard.",
    tech: ["Django", "HTML", "CSS", "Bootstrap", "JavaScript", "SQLite"],
    icons: [SiDjango, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiSqlite]
  },
  {
    title: "Tweeeet — Microblogging Platform",
    description: "Developed a Twitter-like social media platform, enhancing real-time interactions, user engagement, and responsive design. Implemented authentication, post creation, and follow system features.",
    tech: ["Django", "HTML", "CSS", "Bootstrap", "JavaScript", "SQLite"],
    icons: [SiDjango, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiSqlite]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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