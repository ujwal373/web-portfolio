/* === Hero: portrait, name reveal === */

/* Decode-text effect */
const DecodeText = ({ text, delay = 0, duration = 1400, className = "" }) => {
  const [out, setOut] = React.useState(text.replace(/[^ ]/g, "█"));
  React.useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let raf, start;
    const t = setTimeout(() => {
      const tick = (now) => {
        if (!start) start = now;
        const p = Math.min(1, (now - start) / duration);
        const reveal = Math.floor(p * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") s += " ";
          else if (i < reveal) s += text[i];
          else s += chars[Math.floor(Math.random() * chars.length)];
        }
        setOut(s);
        if (p < 1) raf = requestAnimationFrame(tick);
        else setOut(text);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [text, delay, duration]);
  return <span className={className}>{out}</span>;
};

const TypeLine = ({ text, delay = 0, speed = 35 }) => {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => {
      const id = setInterval(() => {
        setN((x) => {
          if (x >= text.length) { clearInterval(id); return x; }
          return x + 1;
        });
      }, speed);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay, speed]);
  return <span>{text.slice(0, n)}<span className="cursor" /></span>;
};

const Hero = () => {
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      <BinaryRain />

      <div className="hero-corners">
        <div className="hero-corner tl">
          <div className="row"><span className="dot" /><span>SYS·ONLINE</span></div>
          <div>NODE / DUB-01</div>
          <div>LAT 53.3498° N</div>
          <div>LON 06.2603° W</div>
        </div>
        <div className="hero-corner tr">
          <div>{time}</div>
          <div>BUILD 2026.04.26</div>
          <div>v <span className="val">1.0.0</span></div>
        </div>
        <div className="hero-corner bl">
          <div>FRAME / 01·HERO</div>
          <div>RUNTIME / EDGE</div>
          <div>STATE / <span className="val">READY</span></div>
        </div>
        <div className="hero-corner br">
          <div>SECTIONS / 07</div>
          <div>UPTIME / ∞</div>
          <div>CTX / PORTFOLIO</div>
        </div>
      </div>

      <div className="hero-watermark-wrap">
        <div className="hero-watermark left">उज्वल</div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-ring r3" />
          <div className="hero-portrait-ring r2" />
          <div className="hero-portrait-ring" />
          <div className="hero-portrait-pulse" />
          <img className="hero-portrait-img" src="assets/update.png" alt="Ujwal Mojidra" />
        </div>
        <div className="hero-watermark right">मोजिद्रा</div>
      </div>

      <div className="hero-name-block">
        <h1 className="hero-name">
          <span className="word"><DecodeText text="UJWAL" delay={300} duration={900} /></span>
          <span className="word"><DecodeText text="MOJIDRA" delay={500} duration={1100} /></span>
        </h1>
        <div className="hero-tagline">
          DATA SCIENTIST <span className="sep">/</span> AI AGENT ENGINEER <span className="sep">/</span> DUBLIN
        </div>
      </div>

      <div className="hero-terminal">
        <span className="prompt">$&gt;</span>
        <TypeLine text="initializing portfolio_system.exec — pipeline ready" delay={1600} />
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO INITIALIZE</span>
        <span className="line" />
      </div>
    </section>
  );
};

window.Hero = Hero;
