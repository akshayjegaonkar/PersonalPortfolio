import AnimatedSection from "../AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index}>
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
