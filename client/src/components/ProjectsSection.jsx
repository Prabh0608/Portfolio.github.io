import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-projects-heading">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of projects that demonstrate my skills in building modern, responsive web applications
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-colors"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      data-testid={`img-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    />
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold" data-testid={`text-project-title-${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      data-testid={`button-code-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
