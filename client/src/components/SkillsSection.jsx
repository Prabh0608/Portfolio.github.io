import { Card } from "@/components/ui/card";

export default function SkillsSection({ skills }) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8" data-testid="text-skills-heading">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          A comprehensive toolkit for building modern web applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category}
              className="p-8 hover-elevate transition-all"
              data-testid={`card-category-${category.toLowerCase()}`}
            >
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b" data-testid={`text-category-${category.toLowerCase()}`}>
                {category}
              </h3>

              <ul className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="text-base text-muted-foreground"
                      data-testid={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
