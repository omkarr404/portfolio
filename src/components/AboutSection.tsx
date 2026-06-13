import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const info = [
  { label: "Location", value: "Kalyan, Maharashtra, India" },
  { label: "Phone", value: "+91-7517935308" },
  { label: "Email", value: "osomkar444@gmail.com", href: "mailto:osomkar444@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/OmkarSawant", href: "https://www.linkedin.com/in/omkar-sawant-92783024a/" },
  { label: "GitHub", value: "github.com/omkarr404", href: "https://github.com/omkarr404/" },
  { label: "Status", value: "● Open to Opportunities" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-surface border-t border-border">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 01 — About</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Who I Am</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4 text-muted-foreground text-[13px] leading-[1.9]">
            <p>
              I hold a B.Tech in <span className="text-foreground">Information Technology</span> from Ramrao Adik Institute of Technology, Navi Mumbai. Recently, I worked as a <span className="text-foreground">Software Developer Intern</span> at Durwankur AI Labs Pvt. Ltd.
            </p>
            <p>
              I specialize in building scalable web and mobile applications using <span className="text-foreground">React.js, React Native, Node.js, Express.js, and MongoDB</span>. My work bridges technical problem-solving with high-quality user experiences.
            </p>
            <p>I enjoy designing efficient architectures, optimizing APIs, and working in collaborative, agile teams to deliver real-world software solutions.</p>
          </div>
          <div>
            {info.map((i) => (
              <div key={i.label} className="flex justify-between items-center py-4 border-b border-border first:border-t text-xs">
                <span className="text-muted-foreground text-[10px] tracking-[0.1em] uppercase">{i.label}</span>
                {i.href ? (
                  <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{i.value}</a>
                ) : (
                  <span className="text-foreground">{i.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
