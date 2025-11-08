import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection({
  name,
  role,
  tagline,
  avatarUrl,
}) {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl lg:text-8xl font-bold tracking-tight leading-none" data-testid="text-hero-name">
                {name}
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-normal max-w-2xl" data-testid="text-hero-role">
                {role}
              </p>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed" data-testid="text-hero-tagline">
              {tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 text-base group"
                onClick={scrollToProjects}
                data-testid="button-view-projects"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Prabh0608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-github"
                >
                  GitHub
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="https://www.linkedin.com/in/prabhjot-singh-saini-87267b397/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-linkedin"
                >
                  LinkedIn
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="https://leetcode.com/u/Prabhjot_Saini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-twitter"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-50"></div>
              <img
                src={avatarUrl}
                alt={name}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl"
                data-testid="img-hero-avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
