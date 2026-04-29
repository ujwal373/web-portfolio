/* === Sections: About, Experience, Projects, Skills, Awards, Contact === */

const SectionHead = ({ num, title, meta }) => (
  <div className="section-head">
    <div>
      <span className="num">[{num}] / SECTION</span>
      <h2>{title}</h2>
    </div>
    <div className="meta">
      {meta.map((m, i) => (
        <div key={i}>{m.k} <span className="v">{m.v}</span></div>
      ))}
    </div>
  </div>
);

/* ===== About ===== */
const About = () => {
  const statRefs = React.useRef([]);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const fill = e.target.querySelector(".bar-fill");
          const pct = e.target.dataset.pct || "0";
          if (fill) fill.style.width = pct + "%";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    statRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const stats = [
    { label: "Experience", value: "1.3", unit: "yrs", pct: 45 },
    { label: "Shipped Projects", value: "25", unit: "+", pct: 82, link: "https://github.com/ujwal373?tab=repositories" },
    { label: "Production Models", value: "3", unit: "+", pct: 55 },
    { label: "Coffee → Code", value: "∞", unit: "ratio", pct: 95 },
  ];

  return (
    <section id="about">
      <div className="container">
        <SectionHead
          num="01"
          title="About"
          meta={[
            { k: "FILE", v: "about.md" },
            { k: "MODE", v: "READ-ONLY" },
            { k: "AUTHOR", v: "U.MOJIDRA" },
          ]}
        />

        <div className="about-grid">
          <p className="about-statement">
            I build <em>autonomous AI agents</em> and data systems that reason about messy real-world signal — from sustainability scoring to forecasting. Trained as a data scientist, shipped as an engineer. <em>Pragmatic, precise, occasionally poetic.</em>
          </p>
          <div className="about-meta">
            <div className="about-row"><span className="k">Based</span><span className="v">Dublin, Ireland · Open to remote / EU / UK</span></div>
            <div className="about-row"><span className="k">Education</span><span className="v">MSc Data & Computational Science, University College Dublin · BE Electronics & Computer Science, University of Mumbai · Honours in Blockchain, University of Mumbai</span></div>
            <div className="about-row"><span className="k">Focus</span><span className="v">Data Science · Data Analytics · AI / ML · Agentic AI · LLM Agents · RAG · Forecasting · NLP at scale</span></div>
            <div className="about-row"><span className="k">Stack</span><span className="v">Python · SQL · R · SAS · Spreadsheets · Power BI · Tableau · FastAPI · LangChain · LangGraph · AWS · GCP · PostgreSQL · PyTorch</span></div>
            <div className="about-row"><span className="k">Languages</span><span className="v">English · Hindi · Gujarati · a pun of Python</span></div>
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => {
            const Wrap = s.link ? "a" : "div";
            const props = s.link ? { href: s.link, target: "_blank", rel: "noreferrer", style: { textDecoration: "none", color: "inherit" } } : {};
            return (
              <Wrap className="stat" key={i} ref={(el) => (statRefs.current[i] = el)} data-pct={s.pct} {...props}>
                <div className="label">[{String(i + 1).padStart(2, "0")}] {s.label}{s.link && <span style={{ marginLeft: 8, color: "var(--w-64)" }}>↗</span>}</div>
                <div className="value">{s.value}<span className="unit">{s.unit}</span></div>
                <div className="bar"><div className="bar-fill" /></div>
              </Wrap>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===== Experience ===== */
const Experience = () => {
  const items = [
    {
      when: "Feb 2026 — Present",
      role: "Customer Success Analyst",
      org: "[ Teleperformance · Ireland ]",
      bullets: [
        "Analysed large-scale datasets (1k+ weekly records) to identify trends, inefficiencies, and opportunities to improve operational performance",
        "Developed automated data pipelines using Python, improving reporting efficiency by 80% and enabling scalable, data-driven decision making",
        "Implemented data quality checks, validation rules, and monitoring processes to ensure accuracy, consistency, and reliability",
        "Investigated system logs and workflows to detect anomalies, data integrity issues, and performance gaps in high-volume environments",
        "Maintained documentation and data governance standards to support audit-ready reporting and improve data trust across teams",
        "Collaborated with cross-functional stakeholders to translate business requirements into analytical solutions and improved data workflows",
      ],
      stack: ["Python", "SQL", "Data Pipelines", "Governance"],
    },
    {
      when: "Jan 2025 — Aug 2025",
      role: "Data Analyst & Research AI Engineer",
      org: "[ Darwin & Goliath Ltd · Ireland ]",
      bullets: [
        "Built and optimized ETL pipelines processing 50k+ records, enabling structured data flows for analytics, reporting, and insight generation",
        "Designed and developed structured data models to support consistent analysis and improve reporting reliability",
        "Applied statistical analysis, predictive analytics, and anomaly detection to identify trends, risks, and actionable insights",
        "Developed data validation frameworks, quality checks, and reconciliation processes to ensure high data integrity and trust",
        "Automated reporting workflows and analytical processes, improving efficiency by 60% and reducing manual effort",
        "Translated business and product requirements into analytical solutions aligned with operational and reporting needs",
      ],
      stack: ["Python", "ETL", "Predictive Analytics", "Anomaly Detection"],
    },
    {
      when: "Jun 2022 — Jul 2022",
      role: "Data Science Intern",
      org: "[ Pantech Solutions ]",
      bullets: [
        "Developed ETL pipelines using Python and SQL for data extraction, transformation, and structured reporting",
        "Performed data validation, testing, and documentation to ensure data accuracy, consistency, and reliability",
        "Supported data analysis and reporting workflows to generate insights for business decision making",
      ],
      stack: ["Python", "SQL", "ETL", "Reporting"],
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <SectionHead
          num="02"
          title="Experience"
          meta={[
            { k: "TIMELINE", v: "2022 → NOW" },
            { k: "ENTRIES", v: "03" },
          ]}
        />
        <div className="timeline">
          <div className="timeline-rail">
            <div className="timeline-rail-inner">
              [ TRACE / WORKLOG ]<br />
              <span style={{ color: "var(--w-64)" }}>↳ scrolling</span>
            </div>
          </div>
          <div className="timeline-list">
            {items.map((it, i) => (
              <div className="exp-card exp-card-wide" key={i}>
                <div className="exp-card-top">
                  <div className="when">{it.when}</div>
                  <div className="exp-role-block">
                    <div className="role">{it.role}</div>
                    <div className="org">{it.org}</div>
                  </div>
                  <div className="pill-row">
                    {it.stack.map((s, j) => <span className="pill" key={j}>{s}</span>)}
                  </div>
                </div>
                <ul className="exp-bullets">
                  {it.bullets.map((b, j) => (
                    <li key={j}><span className="b-mark">→</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== Projects ===== */
const Projects = () => {
  const projs = [
    {
      span: 6, num: "001", status: "LIVE",
      title: "Futuro",
      tagline: "AI-Powered Health Insurance & Pension Planning Platform",
      desc: "A data platform analysing insurance and pension scenarios with structured decision support. Built ETL pipelines transforming unstructured inputs into analytics-ready datasets, scenario-based analytical frameworks, AI-assisted automation, and scalable backend services.",
      stack: ["Python", "FastAPI", "LangChain", "LangGraph", "Vertex AI", "Supabase", "MLflow", "Next.js", "GCP Run"],
      links: [{ label: "Source ↗", href: "https://github.com/saroshfarhan/Futuro/tree/main" }],
      featured: true,
    },
    {
      span: 6, num: "002", status: "WINNER · €3,000",
      title: "AstraAI",
      tagline: "Multi-Agent Astronomical Spectral Analysis System",
      desc: "Multi-agent AI processing 10k+ records for astronomical research. Designed preprocessing/transformation/validation pipelines, applied statistical & predictive analytics with anomaly detection, supported ML models reaching 85%+ classification accuracy, built reporting & visualisation tools.",
      stack: ["Python", "LangGraph", "Streamlit", "FastAPI", "MLflow", "Gemini", "PyTorch", "Astropy", "GCP"],
      links: [
        { label: "Source ↗", href: "https://github.com/saroshfarhan/ad-astrAI" },
        { label: "Demo ↗", href: "https://youtu.be/Ygq1RNyGC3c" },
      ],
      featured: true,
    },
    {
      span: 6, num: "003", status: "WINNER · $500 USDC",
      title: "Superteam Onboarding AI Portal",
      tagline: "Solana Foundation Bounty",
      desc: "Data processing system classifying & structuring 200+ records into analytics-ready datasets. Designed ETL workflows with validation/governance, performed exploratory & trend analysis, and shipped dashboards delivering actionable insights.",
      stack: ["Python", "Streamlit", "OpenAI"],
      links: [
        { label: "Source ↗", href: "https://github.com/ujwal373/Superteam-Student-Sprint" },
        { label: "Demo ↗", href: "https://www.youtube.com/watch?v=O50Qa96UIIA" },
      ],
    },
    {
      span: 6, num: "004", status: "WINNER · $100 USDC",
      title: "Superteam Ireland Telegram Bot",
      tagline: "Community RAG Assistant",
      desc: "AI-powered support system to organise, retrieve and surface community information efficiently. Implemented semantic search and automated content updates for fast, accurate responses. Deployed and maintained cloud-hosted services with structured logging.",
      stack: ["Python", "FastAPI", "FAISS", "GCP VM"],
      links: [
        { label: "Source ↗", href: "https://github.com/ujwal373/Superteam-Ireland-Telegram-Bot" },
      ],
    },
  ];
  return (
    <section id="projects">
      <div className="container">
        <SectionHead
          num="03"
          title="Selected Work"
          meta={[
            { k: "INDEX", v: "4 / 25+" },
            { k: "SORT", v: "BY IMPACT" },
          ]}
        />
        <div className="bento bento-rows">
          {projs.map((p, i) => (
            <div className={`proj proj-tall ${p.featured ? "proj-featured" : ""}`} key={i}>
              <div className="proj-head">
                <span className="proj-num">[{p.num}]</span>
                <span className="proj-status"><span className="dot" />{p.status}</span>
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-tagline">{p.tagline}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack" style={{ marginTop: 14 }}>
                  {p.stack.map((s, j) => <span className="pill" key={j}>{s}</span>)}
                </div>
              </div>
              <div className="proj-foot">
                {p.links.map((l, j) => (
                  <a key={j} href={l.href} target="_blank" rel="noreferrer" className="proj-link">{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== Skills (periodic table + groups) ===== */
const Skills = () => {
  const grid = [
    /* Languages / core */
    [{ s: "Py", n: "Python", num: "01", cat: "lang", lvl: 95 }, { s: "Sql", n: "SQL", num: "02", cat: "lang", lvl: 92 }, { s: "R", n: "R Lang", num: "03", cat: "lang", lvl: 70 }, { s: "Sas", n: "SAS", num: "04", cat: "lang", lvl: 60 }, null, null, null],
    /* AI / ML / Agents */
    [{ s: "Ag", n: "AI Agents", num: "05", cat: "ai", lvl: 92 }, { s: "Lg", n: "LangGraph", num: "06", cat: "ai", lvl: 90 }, { s: "Lc", n: "LangChain", num: "07", cat: "ai", lvl: 90 }, { s: "Rag", n: "RAG", num: "08", cat: "ai", lvl: 92 }, { s: "Llm", n: "LLMs", num: "09", cat: "ai", lvl: 92 }, { s: "Nlp", n: "NLP", num: "10", cat: "ai", lvl: 86 }, { s: "Pt", n: "PyTorch", num: "11", cat: "ai", lvl: 84 }],
    [{ s: "Sk", n: "Sklearn", num: "12", cat: "ai", lvl: 88 }, { s: "Pr", n: "Predictive", num: "13", cat: "ai", lvl: 88 }, { s: "Fc", n: "Forecasting", num: "14", cat: "ai", lvl: 84 }, { s: "An", n: "Anomaly Det.", num: "15", cat: "ai", lvl: 86 }, { s: "Op", n: "OpenAI API", num: "16", cat: "ai", lvl: 90 }, { s: "Ge", n: "Gemini", num: "17", cat: "ai", lvl: 86 }, { s: "Fa", n: "FAISS", num: "18", cat: "ai", lvl: 82 }],
    /* Data engineering & analytics */
    [{ s: "Etl", n: "ETL/ELT", num: "19", cat: "data", lvl: 92 }, { s: "Pbi", n: "Power BI", num: "20", cat: "data", lvl: 80 }, { s: "Tb", n: "Tableau", num: "21", cat: "data", lvl: 78 }, { s: "Xl", n: "Excel/Sheets", num: "22", cat: "data", lvl: 92 }, { s: "Ml", n: "MLflow", num: "23", cat: "data", lvl: 78 }, null, null],
    /* Cloud / infra */
    [{ s: "Aws", n: "AWS", num: "24", cat: "cloud", lvl: 80 }, { s: "Gcp", n: "GCP", num: "25", cat: "cloud", lvl: 82 }, { s: "Vx", n: "Vertex AI", num: "26", cat: "cloud", lvl: 78 }, { s: "Sb", n: "Supabase", num: "27", cat: "cloud", lvl: 80 }, { s: "Dk", n: "Docker", num: "28", cat: "cloud", lvl: 84 }, { s: "Ci", n: "CI/CD", num: "29", cat: "cloud", lvl: 75 }, null],
    /* Tooling */
    [{ s: "Git", n: "Git", num: "30", cat: "tool", lvl: 90 }, { s: "St", n: "Streamlit", num: "31", cat: "tool", lvl: 86 }, { s: "Fp", n: "FastAPI", num: "32", cat: "tool", lvl: 92 }, null, null, null, null],
  ];

  return (
    <section id="skills">
      <div className="container">
        <SectionHead
          num="04"
          title="Capabilities"
          meta={[
            { k: "GROUPS", v: "05" },
            { k: "ELEMENTS", v: "32" },
          ]}
        />
        <div className="periodic periodic-7">
          {grid.flat().map((el, i) => {
            if (!el) return <div className="element empty" key={i} />;
            return (
              <div className={`element cat-${el.cat}`} key={i}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="e-num">{el.num}</span>
                  <span className="e-num">{el.lvl}</span>
                </div>
                <div className="e-sym">{el.s}</div>
                <div className="e-name">{el.n}</div>
                <div className="e-bar" style={{ width: `${el.lvl}%` }} />
              </div>
            );
          })}
        </div>
        <div className="legend">
          <div className="item"><span className="swatch" style={{ borderColor: "var(--w-80)" }} /> Languages</div>
          <div className="item"><span className="swatch" style={{ borderColor: "var(--w-64)" }} /> AI / ML / Agentic</div>
          <div className="item"><span className="swatch" style={{ borderColor: "var(--w-48)" }} /> Data / Analytics</div>
          <div className="item"><span className="swatch" style={{ borderColor: "var(--w-24)" }} /> Cloud / Infra</div>
          <div className="item"><span className="swatch" style={{ borderColor: "var(--w-12)" }} /> Tooling</div>
        </div>
      </div>
    </section>
  );
};

/* ===== Awards ===== */
const Awards = () => {
  const aw = [
    {
      year: "2024",
      glyph: "★",
      title: "Best Prototype Power Award",
      where: "[ UCD Hackathon · Team ]",
      desc: "Recognised for technical problem-solving, rapid prototyping, and collaboration on the BeeZen Wellness App.",
      href: "https://www.linkedin.com/in/ujwalmojidra/details/honors/1732279145167/single-media-viewer/",
    },
    {
      year: "2024",
      glyph: "◆",
      title: "AstraAI · Hackathon Winner · €3,000",
      where: "[ Strange Data · Team ]",
      desc: "Led development of a multi-agent AI system for spectral data analysis. 85%+ model accuracy under competitive constraints.",
      href: "https://www.linkedin.com/posts/nomad-ai-tech_what-an-incredible-end-to-the-strange-data-activity-7429566275636322304-6zwD",
    },
    {
      year: "2024",
      glyph: "✦",
      title: "3rd Place · Balbriggan EcoCore Challenge",
      where: "[ Sustainability · Team ]",
      desc: "Co-led a structured, data-driven scoring model for sustainability performance. Recognised for impact and clarity.",
      href: "https://www.linkedin.com/in/ujwalmojidra/details/honors/1734654859887/single-media-viewer/",
    },
    {
      year: "2025",
      glyph: "▲",
      title: "UCD Advantage Award",
      where: "[ UCD Cricket · Team ]",
      desc: "Honoured for leadership, teamwork, and mentoring. Represented UCD in national competitions.",
      href: "https://www.linkedin.com/in/ujwalmojidra/overlay/1742832129182/single-media-viewer/",
    },
    {
      year: "2025",
      glyph: "◇",
      title: "Superteam Ireland · Bounty Winner",
      where: "[ Solana Foundation ]",
      desc: "Awarded for AI automation tools improving onboarding workflows and information access in distributed environments.",
      href: "https://earn.superteam.fun/listing/bounty-create-a-system-to-onboard-university-students-to-superteam-ireland",
    },
  ];
  return (
    <section id="awards">
      <div className="container">
        <SectionHead
          num="05"
          title="Awards & Honors"
          meta={[
            { k: "COUNT", v: "05" },
            { k: "RANGE", v: "2024–2025" },
          ]}
        />
        <div className="awards">
          {aw.map((a, i) => (
            <a className="award" key={i} href={a.href} target="_blank" rel="noreferrer">
              <div className="award-top">
                <div className="year">[{a.year}]</div>
                <div className="ext">↗</div>
              </div>
              <div className="medal">{a.glyph}</div>
              <div className="title">{a.title}</div>
              <div className="where">{a.where}</div>
              <div className="award-desc">{a.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== Contact ===== */
const Contact = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "ujwal.mojidra@gmail.com";
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact">
      <div className="container contact">
        <SectionHead
          num="06"
          title="Contact"
          meta={[
            { k: "STATUS", v: "OPEN TO ROLES" },
            { k: "RESPONSE", v: "< 24H" },
          ]}
        />
        <h3 className="contact-statement">
          Let's build the<br />
          <span className="dim">future together.</span>
        </h3>

        <div className="contact-grid">
          <div>
            <div className="mono-label" style={{ marginBottom: 12 }}><span className="bracket">[</span> EMAIL <span className="bracket">]</span></div>
            <div className="email-row" onClick={copy}>
              <span>→</span>
              <span>{email}</span>
              <span className="copy-state">{copied ? "✓ COPIED" : "CLICK TO COPY"}</span>
            </div>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: 12 }}><span className="bracket">[</span> ELSEWHERE <span className="bracket">]</span></div>
            <div className="socials">
              <a className="social" href="https://github.com/ujwal373" target="_blank" rel="noreferrer"><span>↗</span><span>GitHub · @ujwal373</span><span className="arrow">→</span></a>
              <a className="social" href="https://www.linkedin.com/in/ujwalmojidra/" target="_blank" rel="noreferrer"><span>↗</span><span>LinkedIn · in/ujwalmojidra</span><span className="arrow">→</span></a>
              <a className="social" href="#"><span>↗</span><span>Read CV · pdf</span><span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.About = About;
window.Experience = Experience;
window.Projects = Projects;
window.Skills = Skills;
window.Awards = Awards;
window.Contact = Contact;
