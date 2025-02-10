import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "../AnimatedSection";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-gray-600">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your visions.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <a href="mailto:akshayjegaonkar@gmail.com" className="flex items-center text-gray-600 hover:text-primary">
                  <Mail className="h-5 w-5 mr-2" />
                  akshayjegaonkar@gmail.com
                </a>
                <a href="tel:+917775938882" className="flex items-center text-gray-600 hover:text-primary">
                  <Phone className="h-5 w-5 mr-2" />
                  +91-7775938882
                </a>
                <a href="https://github.com/jegaonkar" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Profile
                </a>
                <a href="https://linkedin.com/in/akshay-jegaonkar" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;