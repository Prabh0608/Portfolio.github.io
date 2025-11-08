import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Download, Github, Linkedin, ExternalLink, Phone } from "lucide-react";

export default function ContactSection({ email }) {
  const handleDownloadResume = () => {
    console.log("Download resume triggered");
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prabhjot",
      href: "https://github.com/Prabh0608",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prabhjot",
      href: "https://www.linkedin.com/in/prabhjot-singh-saini-87267b397/",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+91-7566069999",
      // href: "7566069999",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="p-6 hover-elevate active-elevate-2 transition-all"
            >
              <a
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group"
                data-testid={`link-${method.label.toLowerCase()}`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <method.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    {method.label}
                  </p>
                  <p className="font-medium truncate group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={handleDownloadResume}
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
