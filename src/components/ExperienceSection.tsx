import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "Dec 2025 – May 2026",
    location: "Navi Mumbai, India",
    title: "Software Developer Intern",
    company: "Durwankur AI Labs Pvt. Ltd.",
    bullets: [
      "Developed production-grade web and mobile application features using React.js, React Native, Node.js, and TypeScript in an Agile environment.",
      "Built reusable UI components and integrated RESTful APIs to enable seamless communication between frontend and backend systems.",
      "Implemented Firebase Authentication and Firestore-based real-time data synchronization while optimizing application performance and user experience.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 02 — Experience</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Work History</h2>
        </div>
        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border first:border-t">
            <div className="text-muted-foreground text-[11px]">
              <div className="mb-1">{exp.date}</div>
              <div>{exp.location}</div>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">{exp.title}</h3>
              <p className="text-primary text-[11px] tracking-[0.1em] mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="relative pl-5 text-muted-foreground text-xs">
                    <span className="absolute left-0 text-primary">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
