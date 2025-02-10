import AnimatedSection from "../AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiPython, 
  SiJavascript, 
  SiDjango, 
  SiAngular, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJira
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, level: "Proficient" },
  { name: "JavaScript", icon: SiJavascript, level: "Intermediate" },
  { name: "Django", icon: SiDjango, level: "Proficient" },
  { name: "Angular", icon: SiAngular, level: "Intermediate" },
  { name: "React.js", icon: SiReact, level: "Intermediate" },
  { name: "HTML/CSS", icon: SiHtml5, level: "Proficient" },
  { name: "Bootstrap", icon: SiBootstrap, level: "Proficient" },
  { name: "MySQL", icon: SiMysql, level: "Proficient" },
  { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
  { name: "Git", icon: SiGit, level: "Proficient" },
  { name: "Jira", icon: SiJira, level: "Intermediate" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index}>
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{skill.level}</p>
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