"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description:
      "Crafting pixel-perfect interfaces with React, Next.js, and modern CSS techniques.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Layers,
    title: "Full Stack Skills",
    description:
      "End-to-end development from RESTful APIs and microservices to database design.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native and Expo for iOS and Android.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: Database,
    title: "System Design",
    description:
      "Scalable architectures with solid foundations in algorithms, data structures, and cloud patterns.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Computer Science Engineering graduate with{" "}
                <span className="text-foreground font-medium">
                  2+ years of hands-on experience
                </span>{" "}
                in full-stack development, specializing in front-end application
                design and development.
              </p>
              <p>
                Skilled in building{" "}
                <span className="text-primary">
                  scalable, user-centric web and mobile interfaces
                </span>
                , optimizing performance, and ensuring seamless cross-platform
                integration across enterprise and product environments.
              </p>
              <p>
                Possesses working experience in backend development, contributing
                to feature enhancements, bug fixes, and system improvements.
                Strong foundation in{" "}
                <span className="text-foreground font-medium">
                  system design, analytical thinking, and problem-solving
                </span>
                , with a proven ability to translate business requirements into
                efficient and high-impact software solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "8+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass rounded-xl p-5 border ${item.border} group cursor-default`}
              >
                <div
                  className={`inline-flex p-2.5 rounded-lg ${item.bg} mb-3 group-hover:scale-110 transition-transform duration-200`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
