// Mock data for Ujwal Mojidra's Portfolio

export const personalInfo = {
  name: "Ujwal Mojidra",
  tagline: "Data Analyst & AI Engineer | Building Intelligent, Scalable, and Sustainable Systems",
  bio: "I'm a data professional with a strong background in analytics, AI, and cloud systems, currently pursuing my MSc in Data & Computational Science at University College Dublin. I specialize in designing data-driven and AI-powered solutions that bridge business and technology — from sustainability analytics to blockchain-integrated systems. My work blends analytical precision with creativity, aiming to make technology transparent, human-centered, and impactful.",
  email: "ujwal.mojidra@ucdconnect.ie",
  location: "Dublin, Ireland",
  profileImage: "/images/profile-headshot.jpg",
  profileImageDev: "/images/profile-developer.png",
  resumeUrl: "/ujwal-mojidra-resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/ujwal373",
  linkedin: "https://www.linkedin.com/in/ujwalmojidra/"
};

export const education = [
  {
    id: 1,
    degree: "MSc in Data & Computational Science",
    institution: "University College Dublin",
    location: "Dublin, Ireland",
    period: "2024 – 2025",
    description: "Specialized in AI, machine learning, and data analytics with focus on real-world applications."
  },
  {
    id: 2,
    degree: "BE in Electronics & Computer Science",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    period: "2020 – 2024",
    gpa: "9.02/10",
    description: "Strong foundation in computer science, electronics, and software engineering."
  }
];

export const experience = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Darwin & Goliath Ltd",
    location: "Ireland",
    period: "May – Aug 2025",
    current: false,
    achievements: [
      "Designed and deployed the Future Viability Index (FVI) — an AI-powered analytics framework for operational sustainability",
      "Built scalable backends with Python, FastAPI, and Streamlit; integrated LLMs using OpenAI and FAISS for RAG-based analytics",
      "Enhanced team collaboration and AI reliability through documentation and internal workshops"
    ]
  },
  {
    id: 2,
    role: "Malware Analysis Intern",
    company: "Cybersecurity Club (SLRTCE)",
    location: "Mumbai, India",
    period: "2023",
    current: false,
    achievements: [
      "Analyzed malware patterns and security vulnerabilities",
      "Contributed to cybersecurity awareness initiatives"
    ]
  },
  {
    id: 3,
    role: "Product Design & Development Intern",
    company: "ECS Dept. SLRTCE",
    location: "Mumbai, India",
    period: "2023",
    current: false,
    achievements: [
      "Collaborated on product design and prototyping",
      "Contributed to innovation and research projects"
    ]
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Pantech Solutions",
    location: "India",
    period: "2022",
    current: false,
    achievements: [
      "Worked on data analysis and machine learning projects",
      "Gained hands-on experience with real-world datasets"
    ]
  }
];

export const projects = [
  {
    id: 1,
    name: "Future Viability Index",
    description: "AI-based sustainability scoring engine that evaluates operational sustainability using advanced analytics and LLM integration.",
    technologies: ["Python", "FastAPI", "Streamlit", "OpenAI", "FAISS"],
    category: "AI & Sustainability",
    featured: true,
    image: "/projects/fvi-project.jpg",
    link: null
  },
  {
    id: 2,
    name: "Superteam Onboarding Bot",
    description: "AI workflow automation tool designed to streamline onboarding processes. Bounty-winning project leveraging OpenAI APIs.",
    technologies: ["Python", "OpenAI API", "Automation", "NLP"],
    category: "AI Automation",
    featured: true,
    image: "/projects/onboarding-bot.jpg",
    link: null
  },
  {
    id: 3,
    name: "PatentAI",
    description: "Blockchain-based patent uniqueness checker using semantic embeddings to verify patent originality and prevent duplication.",
    technologies: ["SBERT", "FAISS", "Solidity", "IPFS", "Blockchain"],
    category: "Blockchain & AI",
    featured: true,
    image: "/projects/patentai.jpg",
    link: null
  },
  {
    id: 4,
    name: "LUAS Passenger Forecasting",
    description: "Time series forecasting model for predicting transport demand on Dublin's LUAS system using statistical methods.",
    technologies: ["R", "Time Series", "Forecasting", "Data Analysis"],
    category: "Data Analytics",
    featured: false,
    image: "/projects/luas-forecast.jpg",
    link: null
  }
];

export const skills = {
  technical: [
    "Python", "R", "SQL", "FastAPI", "Streamlit", "Tableau", "Power BI", "Databricks"
  ],
  aiml: [
    "LLMs (OpenAI, Hugging Face)", "NLP", "RAG", "CNNs", "LSTM", "Forecasting"
  ],
  cloud: [
    "AWS", "GCP", "Azure"
  ],
  tools: [
    "Figma", "Canva", "Git", "Jira"
  ]
};

export const achievements = [
  {
    id: 1,
    title: "Best Prototype Power Award",
    event: "UCD Innovation Hackathon 2024",
    year: "2024",
    image: "/images/achievement-hackathon.png"
  },
  {
    id: 2,
    title: "3rd Place",
    event: "Balbriggan EcoCore Innovation Challenge",
    year: "2024",
    image: "/images/achievement-balbriggan.png"
  },
  {
    id: 3,
    title: "UCD Advantage Award",
    event: "University College Dublin",
    year: "2024",
    image: "/images/achievement-ucd-award.jpg"
  }
];

export const extracurriculars = [
  {
    id: 1,
    title: "University Cricket Representative",
    description: "Represented UCD in national university cricket tournaments (DCU & Ulster University)"
  },
  {
    id: 2,
    title: "Member, Superteam Ireland",
    description: "Active member of Solana Foundation's Irish community, contributing to blockchain innovation"
  },
  {
    id: 3,
    title: "Hackathon Contributor",
    description: "Active contributor in sustainability-focused hackathons and AI innovation challenges"
  }
];
