import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 md:px-12 py-5 bg-background/85 backdrop-blur-xl border-b border-border">
      <a href="#home" className="font-display font-extrabold text-lg text-primary tracking-tight">
        OS_
      </a>
      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-muted-foreground text-[11px] tracking-[0.15em] uppercase hover:text-primary transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border flex flex-col p-6 gap-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground text-xs tracking-[0.15em] uppercase hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
