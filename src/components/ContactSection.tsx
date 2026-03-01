import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  { icon: "✉", label: "osomkar444@gmail.com", href: "mailto:osomkar444@gmail.com" },
  { icon: "✆", label: "+91-7517935308", href: "tel:+917517935308" },
  { icon: "in", label: "linkedin.com/in/OmkarSawant", href: "https://linkedin.com/in/OmkarSawant" },
  { icon: "⌥", label: "github.com/OmkarSawant", href: "https://github.com/OmkarSawant" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "1d9d27e8-d94c-4b6a-80ed-c3513bb62307");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-2">// 06 — Contact</p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-none">Let's Connect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-muted-foreground text-[13px] leading-[1.9] mb-8">
              I'm currently open to internship opportunities, freelance projects, and full-time roles. Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground text-xs py-3 px-4 border border-border hover:border-primary hover:text-primary transition-colors">
                  <span className="text-base">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">Name</label>
                <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full bg-card border border-border text-foreground font-mono text-[13px] px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">Email</label>
                <input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full bg-card border border-border text-foreground font-mono text-[13px] px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">Subject</label>
              <input name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="w-full bg-card border border-border text-foreground font-mono text-[13px] px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Subject" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="w-full bg-card border border-border text-foreground font-mono text-[13px] px-4 py-3 outline-none focus:border-primary transition-colors resize-y" placeholder="Your message..." />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-clip self-start inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Sending..." : "Send Message ↗"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
