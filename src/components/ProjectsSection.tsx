import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    num: "01",
    date: "May 2026",
    title: "SafeMaha — Food Safety Complaint & Inspection Management Platform",
    desc: "Engineered a full-stack citizen grievance platform for reporting food safety violations with image-based evidence submission and real-time complaint tracking. Implemented role-based access control for Citizens, FDA Officers, and Administrators, automating complaint assignment, inspection tracking, and case resolution workflows. Developed secure REST APIs using FastAPI, PostgreSQL, SQLAlchemy, JWT Authentication, and Supabase Storage.",
    tech: ["React Native", "FastAPI", "PostgreSQL", "Supabase", "JWT"],
    link: "https://github.com/omkarr404/SafeMaha",
  },
  {
    num: "02",
    date: "Nov 2025",
    title: "AirSense Plus — AQI Monitor",
    desc: "Built a cross-platform mobile application delivering real-time air quality monitoring and pollutant analytics. Implemented geospatial services and location-based health alerts through an intuitive color-coded interface. Designed responsive mobile screens and optimized API integration for seamless performance across Android and iOS.",
    tech: ["React Native", "Expo", "REST APIs", "Geospatial Services"],
    link: "https://github.com/omkarr404/AirSensePlus",
  },
  {
    num: "03",
    date: "Aug 2025",
    title: "QuickOrder — QR-Based Restaurant SaaS",
    desc: "Engineered a full-stack SaaS platform for restaurants, enabling QR-based digital ordering and streamlined customer dining experiences. Developed RESTful APIs and a real-time order management dashboard to support live order tracking and kitchen operations. Architected scalable MongoDB schemas for menu management and order processing.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite"],
    link: "https://github.com/omkarr404/swift-order",
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
