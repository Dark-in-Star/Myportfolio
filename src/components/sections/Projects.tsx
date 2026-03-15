"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Customer Page",
    description:
      "A modern customer-facing web application with product showcasing, cart functionality, and seamless checkout experience.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    href: "https://customerpage.vercel.app/",
    github: null,
    live: "https://customerpage.vercel.app/",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    id: 2,
    title: "Job Worker Platform",
    description:
      "A job board and worker matching platform enabling employers and workers to connect efficiently.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    href: "https://job-worker.vercel.app/",
    github: null,
    live: "https://job-worker.vercel.app/",
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20",
  },
  {
    id: 3,
    title: "Lead Tracker",
    description:
      "A Chrome extension built for tracking leads and managing sales pipeline with local storage persistence.",
    tags: ["JavaScript", "Chrome Extension", "HTML/CSS"],
    href: "https://github.com/Dark-in-Star/Lead-Tracker",
    github: "https://github.com/Dark-in-Star/Lead-Tracker",
    live: null,
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
  {
    id: 4,
    title: "Tony Chopper Fan Page",
    description:
      "A fun and interactive fan page for One Piece character Tony Tony Chopper with smooth animations.",
    tags: ["React", "CSS Animations", "Vercel"],
    href: "https://tony-chopper.vercel.app/",
    github: null,
    live: "https://tony-chopper.vercel.app/",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
  },
  {
    id: 5,
    title: "BelugaOP",
    description:
      "A full-featured Discord bot with moderation, music, and utility commands built with Discord.js.",
    tags: ["Node.js", "Discord.js", "JavaScript"],
    href: "https://github.com/Dark-in-Star/BelugaOP/",
    github: "https://github.com/Dark-in-Star/BelugaOP/",
    live: null,
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/20",
  },
  {
    id: 6,
    title: "DB Chat App",
    description:
      "A real-time chat application with Node.js backend using database-driven message persistence.",
    tags: ["Node.js", "WebSockets", "Database"],
    href: "https://github.com/Dark-in-Star/nodejs-database-chat-app",
    github: "https://github.com/Dark-in-Star/nodejs-database-chat-app",
    live: null,
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
  },
  {
    id: 7,
    title: "GrindSZN App",
    description:
      "A fitness tracking mobile app for workout planning and performance analytics.",
    tags: ["React Native", "Expo", "Firebase"],
    href: "https://github.com/arpanburman/GRINDSZN_APP",
    github: "https://github.com/arpanburman/GRINDSZN_APP",
    live: null,
    gradient: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/20",
  },
  {
    id: 8,
    title: "Ryne Olive App",
    description:
      "A lifestyle and wellness mobile application with personalized recommendations.",
    tags: ["React Native", "Expo", "REST API"],
    href: "https://github.com/arpanburman/ryne-olive-app",
    github: "https://github.com/arpanburman/ryne-olive-app",
    live: null,
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const { ref, controls } = useScrollReveal();
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass rounded-xl border ${project.border} overflow-hidden group cursor-pointer`}
              onClick={() => setSelected(project)}
            >
              {/* Gradient top strip */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.gradient.replace("/20", "")}`}
              />

              <div className="p-5 space-y-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-foreground font-bold font-mono text-sm">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="tech" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="skill" className="text-xs">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button
            variant="glass"
            size="lg"
            onClick={() =>
              window.open("https://github.com/Dark-in-Star", "_blank")
            }
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </Button>
        </motion.div>
      </motion.div>

      {/* Project detail dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="gradient-text text-xl">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-2">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <Badge key={tag} variant="tech">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selected.github && (
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() =>
                        window.open(selected.github!, "_blank")
                      }
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  )}
                  {selected.live && (
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() =>
                        window.open(selected.live!, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
