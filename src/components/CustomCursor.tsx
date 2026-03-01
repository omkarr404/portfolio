import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)`, transition: "transform 0.1s" }}
      />
      <div
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-primary opacity-50"
        style={{
          width: hovering ? 60 : 36,
          height: hovering ? 60 : 36,
          transform: `translate(${pos.x - (hovering ? 30 : 18)}px, ${pos.y - (hovering ? 30 : 18)}px)`,
          transition: "transform 0.15s, width 0.2s, height 0.2s",
          borderColor: hovering ? "hsl(252 100% 72%)" : undefined,
        }}
      />
    </>
  );
};

export default CustomCursor;
