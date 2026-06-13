import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    school: "Ramrao Adik Institute of Technology, D.Y. Patil Deemed to be University",
    degree: "B.Tech in Information Technology — CGPA: 7.98 / 10",
    meta: "July 2022 – May 2026 · Navi Mumbai, India",
    coursework: "Coursework: DSA, DBMS, OS, CN, Object-Oriented Programming (OOP), Software Engineering, Mobile Application Development",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-surface border-t border-border">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 05 — Education</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Academic Background</h2>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          {education.map((e, i) => (
            <div key={i} className="relative pb-10">
              <div className="absolute -left-[2.1rem] top-1.5 w-2.5 h-2.5 bg-background border-2 border-primary rounded-full" />
              <h3 className="font-display font-bold text-base mb-1">{e.school}</h3>
              <p className="text-secondary text-[11px] mb-1">{e.degree}</p>
              <p className="text-muted-foreground text-[11px] mb-2">{e.meta}</p>
              {e.coursework && (
                <p className="text-muted-foreground text-[10px] italic leading-relaxed max-w-xl">
                  {e.coursework}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
