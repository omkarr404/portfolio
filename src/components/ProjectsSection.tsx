import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    num: "01",
    date: "Aug 2025",
    title: "QuickOrder — QR-Based Restaurant SaaS",
    desc: "Developed a full-stack restaurant ordering platform enabling QR-based digital ordering. Built responsive customer interfaces and a real-time order management dashboard for live order tracking and kitchen operations. Designed scalable MongoDB schemas for menu management and order processing with reliable REST API integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite", "REST APIs"],
    link: "https://github.com/omkarr404/swift-order",
  },
  {
    num: "02",
    date: "May 2026",
    title: "SafeMaha — Food Safety Complaint & Inspection Management Platform",
    desc: "Developed a full-stack citizen grievance platform using React Native, FastAPI, PostgreSQL, and REST APIs for food safety complaint submission and real-time tracking. Implemented role-based access control for Citizens, FDA Officers, and Administrators with secure FastAPI, SQLAlchemy, JWT Authentication, and Supabase Storage.",
    tech: ["React Native", "FastAPI", "PostgreSQL", "Supabase", "JWT Auth", "REST APIs"],
    link: "https://github.com/omkarr404/SafeMaha",
  },
  {
    num: "03",
    date: "Nov 2025",
    title: "AirSense Plus — AQI Monitor",
    desc: "Developed a cross-platform mobile application using React Native and REST APIs to provide real-time air-quality monitoring and pollutant analytics. Integrated geospatial services and location-based alerts to provide personalized environmental insights with responsive screens across Android and iOS.",
    tech: ["React Native", "Expo", "REST APIs", "Geospatial Services"],
    link: "https://github.com/omkarr404/AirSensePlus",
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
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <p className="text-[10px] text-muted-foreground tracking-[0.15em]">{p.num} / {p.date}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base mb-3 leading-snug">{p.title}</h3>
                  <p className="text-muted-foreground text-[11px] leading-[1.6] mb-6">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 font-mono">
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
