"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    name: "DSA",
    label: "Algorithms & DSA",
    category: [
      { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
      { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "C/C++", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
      { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    ],
  },
  {
    name: "Frontend",
    label: "Frontend",
    category: [
      { name: "HTML/CSS", img: "https://cdn-icons-png.flaticon.com/512/82/82127.png" },
      { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/512/760/760357.png" },
      { name: "NextJs", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "Angular", img: "https://angular.dev/assets/icons/apple-touch-icon.png" },
    ],
  },
  {
    name: "Backend",
    label: "Backend",
    category: [
      { name: "NodeJS", img: "https://nodejs.org/static/images/favicons/favicon.png" },
      { name: "Spring-boot", img: "https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8" },
      { name: "NestJS", img: "https://nestjs.com/img/logo-small.svg" },
    ],
  },
  {
    name: "Mobile",
    label: "Mobile",
    category: [
      { name: "React Native", img: "https://cdn-icons-png.flaticon.com/512/760/760357.png" },
      { name: "Expo", img: "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png" },
      { name: "Flutter", img: "https://flutter.dev/assets/favicon.26abda3864324ef4ac32dd0d3ce28907.png" },
    ],
  },
  {
    name: "Database",
    label: "Databases",
    category: [
      { name: "MySQL", img: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-500x313.png" },
      { name: "MongoDB", img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" },
      { name: "Firebase", img: "https://miro.medium.com/v2/resize:fit:650/0*PnSXmPqSlfh3evkq" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  const { ref, controls } = useScrollReveal();
  const [activeGroup, setActiveGroup] = useState("Frontend");

  const current = skillGroups.find((g) => g.name === activeGroup) ?? skillGroups[0];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

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
            My toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Tab filters */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillGroups.map((group) => (
            <button
              key={group.name}
              onClick={() => setActiveGroup(group.name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeGroup === group.name
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeGroup}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {current.category.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
              className="glass rounded-xl border border-white/5 p-5 flex flex-col items-center gap-3 group cursor-default hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
                  unoptimized
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills overview strip */}
        <motion.div
          variants={itemVariants}
          className="mt-14 glass rounded-2xl border border-white/5 p-6"
        >
          <p className="text-center text-muted-foreground text-sm mb-6">
            All skills at a glance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillGroups.flatMap((g) =>
              g.category.map((s) => (
                <span
                  key={`${g.name}-${s.name}`}
                  className="px-3 py-1 rounded-full text-xs glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {s.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
