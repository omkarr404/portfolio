import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "Python"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React.js", "React Native", "Expo", "HTML5 & CSS3", "Responsive Design"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB & SQL", "Firebase Firestore"],
  },
  {
    title: "Auth & Security",
    items: ["JWT Authentication", "Firebase Auth", "Role-Based Access (RBAC)"],
  },
  {
    title: "Tools & Agile",
    items: ["Git & GitHub", "Linux CLI", "VS Code", "Agile / Scrum"],
  },
];

const certs = [
  { icon: "☁️", title: "AWS Academy Cloud Architecting", sub: "Cloud Technical Essentials" },
  { icon: "🔐", title: "EC-Council", sub: "SQL Injection & Ethical Hacking Essentials" },
  { icon: "🛡️", title: "Forage Virtual Internship", sub: "Tata Group Cybersecurity Analyst Simulation" },
  { icon: "🏆", title: "Hackathon Participant", sub: "Innovate You 2.0 (National) · CRAFTX Creation (NMIMS)" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 04 — Skills</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display font-bold text-sm tracking-[0.1em] uppercase text-primary mb-4 pb-3 border-b border-border">{g.title}</h3>
              <ul className="space-y-0">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-2 text-muted-foreground text-xs border-b border-border/50">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="mt-16">
          <h3 className="font-display text-sm tracking-[0.1em] uppercase text-primary mb-6">// Certifications & Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div key={c.title} className="p-5 border border-border bg-card flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <p className="text-xs text-foreground font-mono">{c.title}</p>
                  <span className="text-[10px] text-muted-foreground">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
