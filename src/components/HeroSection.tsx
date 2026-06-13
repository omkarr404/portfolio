import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
    {/* Grid background */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(rgba(0,255,157,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,157,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        animation: "gridShift 20s linear infinite",
      }}
    />
    {/* Glow */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-[60%]"
      style={{
        background: "radial-gradient(circle, rgba(0,255,157,0.08) 0%, transparent 70%)",
        animation: "pulse 4s ease-in-out infinite",
      }}
    />

    <motion.div className="relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-10 h-px bg-primary" />
        <span className="text-[11px] tracking-[0.2em] uppercase text-primary">Available for opportunities</span>
      </div>

      <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.04em] mb-6">
        <span className="block">Omkar</span>
        <span className="block" style={{ WebkitTextStroke: "1px rgba(232,232,240,0.3)", color: "transparent" }}>
          Sawant
        </span>
      </h1>

      <p className="max-w-[480px] text-muted-foreground text-[13px] leading-[1.9] mb-10">
        Software Developer skilled in React.js, React Native, Node.js, Express.js, and MongoDB, building scalable web and mobile applications.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a href="#projects" className="btn-clip inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-foreground transition-colors">
          View Projects ↗
        </a>
        <a href="/Omkar_Sawant_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground font-mono text-[11px] tracking-[0.12em] uppercase hover:border-primary hover:text-primary transition-colors">
          Resume ↗
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground font-mono text-[11px] tracking-[0.12em] uppercase hover:border-primary hover:text-primary transition-colors">
          Get in Touch
        </a>
      </div>
    </motion.div>

    {/* Stats */}
    <motion.div
      className="relative md:absolute md:right-12 md:bottom-16 flex md:flex-col gap-8 md:gap-6 md:text-right mt-12 md:mt-0 z-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
    >
      {[
        { num: "3+", label: "Projects Built" },
        { num: "7.98", label: "CGPA" },
        { num: "2+", label: "Hackathons" },
      ].map((s) => (
        <div key={s.label}>
          <span className="font-display font-extrabold text-4xl text-primary block leading-none">{s.num}</span>
          <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default HeroSection;
