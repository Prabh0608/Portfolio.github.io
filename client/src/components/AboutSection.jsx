import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Rocket, Award, Target } from "lucide-react";

export default function AboutSection({ intro, highlights = [] }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const highlightIcons = [
    { icon: Code2, color: "text-blue-500" },
    { icon: Rocket, color: "text-purple-500" },
    { icon: Lightbulb, color: "text-yellow-500" },
    { icon: Users, color: "text-green-500" },
    { icon: Target, color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-about-heading">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-2">
              <p className="text-lg lg:text-xl text-center text-muted-foreground leading-relaxed max-w-4xl mx-auto" data-testid="text-about-intro">
                {intro}
              </p>
            </Card>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
}
