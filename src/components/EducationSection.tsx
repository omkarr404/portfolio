import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    school: "Ramrao Adik Institute of Technology, D. Y. Patil University",
    degree: "B.Tech Information Technology (Major: Cyber Security) — CGPA: 7.72/10",
    meta: "Jul 2022 – Present · Navi Mumbai, India",
  },
  {
    school: "Kankavli College",
    degree: "12th Grade — 62.33%",
    meta: "May 2021 – Jul 2022 · Sindhudurg, Maharashtra",
  },
  {
    school: "St. Ursula School, Kankavli",
    degree: "10th Grade — 83.80%",
    meta: "May 2019 – Apr 2020 · Sindhudurg, Maharashtra",
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
              <p className="text-muted-foreground text-[11px]">{e.meta}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
