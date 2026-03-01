import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    date: "Jan 2026",
    title: "AQI Monitor",
    desc: "Cross-platform air quality monitoring mobile app with location-based detection displaying PM2.5, PM10, CO, NO2, SO2 & O3 levels. Color-coded UI with health recommendations based on AQI categories.",
    tech: ["React Native", "Expo", "JavaScript"],
  },
  {
    num: "02",
    date: "Nov 2025",
    title: "Learning Management System",
    desc: "Full-stack LMS with role-based access control for academic process management. Scalable RESTful APIs with JWT authentication and responsive React components ensuring cross-browser compatibility.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },
  {
    num: "03",
    date: "Jun 2025",
    title: "Agri-Sahayak",
    desc: "Voice-assisted farmer app with multilingual voice bot integration, real-time API communication for agricultural schemes and market data. Improved rural accessibility and user engagement by 40%.",
    tech: ["React Native", "Python Flask", "REST APIs"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-surface border-t border-border">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 03 — Projects</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Selected Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
          {projects.map((p) => (
            <div key={p.num} className="group bg-card p-8 border border-border relative overflow-hidden hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <p className="text-[10px] text-muted-foreground tracking-[0.15em] mb-5">{p.num} / {p.date}</p>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-[1.7] mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 bg-secondary/10 text-secondary border border-secondary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
