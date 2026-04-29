/* === Navigation, custom cursor, scroll progress, command palette === */

const Cursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  React.useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => {
      if (e.target.closest("a, button, .exp-card, .proj, .element, .award, .email-row, .social, .nav-cmd"))
        ringRef.current?.classList.add("hover");
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, .exp-card, .proj, .element, .award, .email-row, .social, .nav-cmd"))
        ringRef.current?.classList.remove("hover");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    let raf;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

const ScrollProgress = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.width = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" />;
};

const Nav = ({ onCmd }) => {
  return (
    <nav className="nav">
      <a href="#home" className="nav-mark">
        <span>UJWAL MOJIDRA <span className="nav-mark-sep">/</span> PORTFOLIO_v1</span>
      </a>
      <div className="nav-links">
        <a href="#about" data-num="01">About</a>
        <a href="#experience" data-num="02">Experience</a>
        <a href="#projects" data-num="03">Projects</a>
        <a href="#skills" data-num="04">Skills</a>
        <a href="#awards" data-num="05">Awards</a>
        <a href="#contact" data-num="06">Contact</a>
      </div>
      <button className="nav-cmd" onClick={onCmd}>
        <span>Command</span>
        <span className="key">⌘K</span>
      </button>
    </nav>
  );
};

const CommandPalette = ({ open, setOpen }) => {
  const [q, setQ] = React.useState("");
  const items = [
    { k: "GO", label: "Jump to · About", to: "#about" },
    { k: "GO", label: "Jump to · Experience", to: "#experience" },
    { k: "GO", label: "Jump to · Projects", to: "#projects" },
    { k: "GO", label: "Jump to · Skills", to: "#skills" },
    { k: "GO", label: "Jump to · Awards", to: "#awards" },
    { k: "GO", label: "Jump to · Contact", to: "#contact" },
    { k: "DO", label: "Copy email · ujwal@example.com", action: () => navigator.clipboard?.writeText("ujwal@example.com") },
    { k: "EXT", label: "Open · GitHub", action: () => window.open("https://github.com", "_blank") },
    { k: "EXT", label: "Open · LinkedIn", action: () => window.open("https://linkedin.com", "_blank") },
    { k: "SYS", label: "Toggle terminal mode (coming soon)" },
  ];
  const filtered = items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()));

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(o => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  if (!open) return null;
  const run = (i) => {
    setOpen(false);
    if (i.to) document.querySelector(i.to)?.scrollIntoView({ behavior: "smooth" });
    if (i.action) i.action();
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
      display: "grid", placeItems: "start center", paddingTop: "14vh",
    }} onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "min(560px, 92vw)",
        background: "#000", border: "1px solid var(--w-16)",
      }}>
        <div style={{
          padding: "14px 18px", borderBottom: "1px solid var(--w-08)",
          display: "flex", alignItems: "center", gap: 12,
          fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--w-32)", letterSpacing: "0.16em", textTransform: "uppercase",
        }}>
          <span>$&gt;</span>
          <input
            autoFocus
            placeholder="search command..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              color: "white", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", textTransform: "none",
            }}
          />
          <span style={{ border: "1px solid var(--w-16)", padding: "2px 6px", fontSize: 9 }}>ESC</span>
        </div>
        <div style={{ maxHeight: 380, overflow: "auto" }}>
          {filtered.map((i, idx) => (
            <div key={idx} onClick={() => run(i)} style={{
              padding: "12px 18px",
              display: "grid", gridTemplateColumns: "44px 1fr",
              gap: 12, alignItems: "center",
              fontFamily: "var(--font-mono)", fontSize: 12,
              borderBottom: "1px solid var(--w-04)", cursor: "pointer",
            }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--w-04)"}
               onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <span style={{ color: "var(--w-32)", letterSpacing: "0.14em" }}>{i.k}</span>
              <span style={{ color: "var(--w-80)" }}>{i.label}</span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--w-32)" }}>
              No matches.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.Cursor = Cursor;
window.ScrollProgress = ScrollProgress;
window.Nav = Nav;
window.CommandPalette = CommandPalette;
