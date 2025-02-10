import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "../AnimatedSection";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Python Institute",
    date: "2023",
    credentialId: "CERT-1234",
  },
  {
    title: "React Development",
    issuer: "Meta",
    date: "2023",
    credentialId: "CERT-5678",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{cert.date}</Badge>
                    <Badge variant="secondary">ID: {cert.credentialId}</Badge>
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

export default Certifications;
