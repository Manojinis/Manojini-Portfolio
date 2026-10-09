export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'All' | 'Full-Stack' | 'AI & ML' | 'Academic / IoT';
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  metrics?: string;
  imageAlt: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-Time' | 'Internship';
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  badge?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Manojini S",
  title: "Full-Stack Developer",
  shortTagline: "Building resilient web applications, robust backend services, and API-driven digital solutions.",
  location: "Kanniyakumari, Tamil Nadu, India",
  email: "manojini108@gmail.com",
  phone: "+91-9790213257",
  linkedin: "https://www.linkedin.com/in/mano-jini-9147382b3",
  github: "https://github.com/Manojinis",
  resumePath: "/Manojini_S_Resume.pdf",
  resumeFilename: "Manojini_S_Resume.pdf",
  photoUrl: "/profile-photo.jpeg",
  bio: [
    "I am an MCA graduate student and full-stack software developer with hands-on experience building production web applications, database architectures, and high-performance APIs. Having served as a Project Team Lead on real-time healthcare software with over 500+ active installations, I combine structured engineering practices with rapid problem-solving.",
    "My technical stack spans modern web technologies including React, TypeScript, Bun, Elysia, PHP, Laravel, PostgreSQL, and Drizzle ORM. In addition to full-stack engineering, I have a deep curiosity for Artificial Intelligence and Natural Language Processing, demonstrated through academic research presentations and project internships.",
    "A recipient of the 10th University Rank in B.Sc. Computer Science and Academic Topper in MCA (9.66 CGPA), I bring the same relentless drive and teamwork that once led me to represent at the National level in Kabaddi into developing reliable, clean, and scalable software."
  ],
  stats: [
    { label: "MCA CGPA (Academic Topper)", value: "9.66" },
    { label: "B.Sc. CS CGPA (10th University Rank)", value: "9.04" },
    { label: "Real-World Deployments", value: "500+" },
    { label: "National Athletic Honor", value: "Kabaddi" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", tag: "Core" },
      { name: "TypeScript", tag: "Production" },
      { name: "PHP", tag: "Backend" },
      { name: "Python", tag: "AI/Data" },
      { name: "Java", tag: "Core" },
      { name: "C++", tag: "Foundations" }
    ]
  },
  {
    category: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React", tag: "SPA" },
      { name: "HTML5 / Semantic Web", tag: "Standards" },
      { name: "CSS3 / Modern Layouts", tag: "Styling" },
      { name: "Tailwind CSS", tag: "Utility" },
      { name: "Blade Templates", tag: "PHP SSR" },
      { name: "Responsive UI/UX", tag: "Design" }
    ]
  },
  {
    category: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "PHP", tag: "Server-side" },
      { name: "Laravel", tag: "Framework" },
      { name: "Bun Runtime", tag: "High-Perf" },
      { name: "Elysia.js", tag: "API Engine" },
      { name: "RESTful API Design", tag: "Standard" },
      { name: "GraphQL & Apollo", tag: "Queries" }
    ]
  },
  {
    category: "Databases & ORM",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", tag: "Relational" },
      { name: "MySQL", tag: "RDBMS" },
      { name: "MongoDB", tag: "NoSQL" },
      { name: "Drizzle ORM", tag: "Type-safe" },
      { name: "SQLite", tag: "Embedded" }
    ]
  },
  {
    category: "Developer Tools & DevOps",
    iconName: "Terminal",
    skills: [
      { name: "Git & Version Control", tag: "Workflow" },
      { name: "GitHub", tag: "CI/Collab" },
      { name: "Postman API Platform", tag: "Testing" },
      { name: "Apollo GraphQL Studio", tag: "Explorer" },
      { name: "DevOps & Deployment", tag: "Basics" }
    ]
  },
  {
    category: "Specialized Domains",
    iconName: "Cpu",
    skills: [
      { name: "Natural Language Processing (NLP)", tag: "Research/Project" },
      { name: "Machine Learning (ML)", tag: "Applied" },
      { name: "Deep Learning (CNNs)", tag: "Vision" },
      { name: "IoT & Hardware Integration", tag: "Sensors" },
      { name: "Authentication & RBAC", tag: "Security" },
      { name: "Debugging & Performance", tag: "Optimization" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "edmond-remedies",
    role: "Software Developer & Project Team Lead",
    company: "Edmond Remedies Private Limited (Doctor Healix)",
    location: "Chettikulam, Tamil Nadu",
    period: "Jan 2026 – Present",
    isCurrent: true,
    type: "Full-Time",
    highlights: [
      "Led development efforts for 'Doctor Healix', a comprehensive enterprise healthcare and pharmacy management platform.",
      "Engineered end-to-end full-stack modules across doctor consultation portals, patient records, pharmacy inventories, laboratory orders, and automated report generation.",
      "Architected backend microservices and REST/GraphQL APIs utilizing Bun, Elysia, TypeScript, PostgreSQL, and Drizzle ORM.",
      "Spearheaded technical team coordination as Team Lead, ensuring reliable sprint delivery and successful real-time deployments surpassing 500+ installations.",
      "Resolved mission-critical production bugs, optimized database query execution, and safeguarded sensitive healthcare workflows."
    ],
    technologies: ["TypeScript", "React", "Bun", "Elysia", "PostgreSQL", "Drizzle ORM", "GraphQL", "REST APIs", "Git"]
  },
  {
    id: "mavepizon-tech",
    role: "Project Intern (NLP Engineering)",
    company: "Mavepizon Technologies",
    location: "Tamil Nadu",
    period: "Aug 2025",
    isCurrent: false,
    type: "Internship",
    highlights: [
      "Selected as Project Intern based on technical aptitude and problem-solving evaluations.",
      "Contributed to model preprocessing, text tokenization, and pipeline implementation for a real-time Natural Language Processing (NLP) initiative.",
      "Collaborated with senior software engineers on data parsing workflows and inference testing."
    ],
    technologies: ["Python", "Natural Language Processing (NLP)", "Data Processing", "Machine Learning"]
  },
  {
    id: "features-software-ml",
    role: "Machine Learning Intern",
    company: "Features Software Company",
    location: "Nagercoil, Tamil Nadu",
    period: "Jun 2025",
    isCurrent: false,
    type: "Internship",
    highlights: [
      "Applied machine learning classification and regression algorithms to real-world datasets.",
      "Conducted extensive data cleaning, exploratory data analysis (EDA), model training, evaluation, and performance metric benchmarking.",
      "Documented technical insights on hyperparameters and validation scores to assist team implementation."
    ],
    technologies: ["Python", "Machine Learning", "Model Evaluation", "Data Analysis"]
  },
  {
    id: "features-software-php",
    role: "PHP Backend Development Intern",
    company: "Features Software Company",
    location: "Nagercoil, Tamil Nadu",
    period: "Jan 2025",
    isCurrent: false,
    type: "Internship",
    highlights: [
      "Engineered backend modules and database queries for live business web applications using PHP and MySQL.",
      "Implemented secure CRUD operations, form validation, session handling, and server-side business logic.",
      "Tested endpoints and integrated frontend views with backend response handlers."
    ],
    technologies: ["PHP", "MySQL", "Server-Side Logic", "Database Integration", "Web Architecture"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "doctor-healix",
    title: "Doctor Healix — Healthcare & Pharmacy Platform",
    subtitle: "Enterprise full-stack clinical, pharmacy, and laboratory management system",
    category: "Full-Stack",
    badge: "500+ Deployments",
    metrics: "Production Software",
    problem: "Healthcare facilities and pharmacy dispensaries frequently struggle with fragmented data, slow billing, disconnected diagnostic labs, and complex patient histories across disconnected systems.",
    solution: "Engineered an integrated, modular healthcare software ecosystem unifying doctors, diagnostic labs, pharmacy inventory, patient health cards, prescription management, and billing in real time.",
    myRole: "Software Developer & Team Lead — responsible for architecture, API implementation, database schemas with Drizzle ORM, and coordinate team releases.",
    technologies: ["TypeScript", "React", "Bun", "Elysia", "PostgreSQL", "Drizzle ORM", "GraphQL", "REST APIs"],
    keyFeatures: [
      "Role-Based Access Control (RBAC) for Doctors, Pharmacists, Lab Technicians, and Admins",
      "Real-time pharmacy stock auditing with automated low-stock warnings",
      "Diagnostic report compilation and instant digital record archiving",
      "High-throughput API microservices achieving swift response times",
      "Robust deployment with 500+ active enterprise installations"
    ],
    githubUrl: "https://github.com/Manojinis",
    imageAlt: "Doctor Healix Healthcare Management Dashboard"
  },
  {
    id: "smart-attendance-rfid",
    title: "Smart Attendance System Using RFID",
    subtitle: "Automated contactless identification and logging architecture",
    category: "Academic / IoT",
    badge: "Final Year Mini Project",
    metrics: "Zero Manual Proxying",
    problem: "Conventional roll-call attendance consumes up to 15% of instructional lecture time and is vulnerable to proxy attendance, illegible handwriting, and lost paper rosters.",
    solution: "Developed an IoT-enabled attendance automation framework utilizing RFID cards and high-frequency reader modules that instantly register student identity and sync attendance records directly to a centralized database.",
    myRole: "Project Developer — designed hardware-to-software serial communication, database structure, and the faculty dashboard.",
    technologies: ["RFID RC522 Module", "Arduino / Microcontroller", "Python", "PHP", "MySQL", "Serial Protocol"],
    keyFeatures: [
      "Sub-second contactless badge scanning and validation",
      "Automated timestamping with tamper-resistant attendance logging",
      "Web portal for faculty to generate daily, weekly, and monthly attendance reports",
      "Automated notification triggers for prolonged unexcused absences",
      "Significant reduction in administrative overhead and error margins"
    ],
    githubUrl: "https://github.com/Manojinis",
    imageAlt: "Smart RFID Attendance System Hardware and Dashboard"
  },
  {
    id: "plant-disease-detection",
    title: "Identification of Paddy Plant Disease with Deep Learning",
    subtitle: "Computer vision and neural network system for agricultural diagnostics",
    category: "AI & ML",
    badge: "MCA Major Project",
    metrics: "Multi-Class Leaf Diagnosis",
    problem: "Leaf diseases in paddy crops cause catastrophic yield losses. Rural farmers often lack immediate access to plant pathologists, resulting in delayed treatments and severe economic loss.",
    solution: "Trained a convolutional deep learning model capable of analyzing digital leaf photographs, isolating infected crop tissue, accurately classifying specific leaf diseases, and recommending targeted remediation remedies.",
    myRole: "Lead Researcher & Developer — collected image datasets, performed image preprocessing/augmentation, tuned CNN architecture, and developed the diagnostic evaluation pipeline.",
    technologies: ["Python", "Deep Learning (CNN)", "Computer Vision (OpenCV)", "TensorFlow / Keras", "NumPy / Pandas"],
    keyFeatures: [
      "Automated classification of common paddy diseases (Bacterial Blight, Brown Spot, Leaf Blast)",
      "Image preprocessing with histogram equalization and noise filtering",
      "Feature map extraction with high validation accuracy",
      "Diagnostic confidence metrics to assist farmers with actionable treatment advice",
      "Scalable model pipeline designed for future mobile deployment"
    ],
    githubUrl: "https://github.com/Manojinis",
    imageAlt: "Deep Learning Paddy Plant Leaf Disease Identification System"
  },
  {
    id: "rain-clothes-collector",
    title: "Rain Detection-Based Automatic Clothes Collector",
    subtitle: "Smart IoT weather-responsive outdoor protection mechanism",
    category: "Academic / IoT",
    badge: "IoT Team Project",
    metrics: "< 2s Sensor Response",
    problem: "In tropical climates, unexpected downpours frequently drench outdoor clothes drying lines when homeowners are working, commuting, or unable to reach the clothesline immediately.",
    solution: "Constructed an automated mechatronic IoT prototype that detects moisture droplets via a raindrop sensor plate and triggers a bi-directional motorized mechanism to retract the drying line under covered shelter.",
    myRole: "Hardware & Control Logic Developer (Collaborative 5-member team) — calibrated rain sensor sensitivity, wrote Arduino control algorithms, and handled motor driver switching.",
    technologies: ["Arduino Microcontroller", "Raindrop Sensor Module", "Servo / DC Motor Drivers", "Embedded C++", "Hardware Relay"],
    keyFeatures: [
      "Ultra-fast moisture detection triggering motor retraction within 2 seconds",
      "Bi-directional line retraction and deployment mechanism",
      "Emergency manual override button and end-stop limit switches",
      "Energy-conserving idle state with low static power draw",
      "Durable weatherproof housing for external mounting"
    ],
    githubUrl: "https://github.com/Manojinis",
    imageAlt: "Rain Detection Automatic Clothes Collector IoT Mechanism"
  },
  {
    id: "realtime-nlp-engine",
    title: "Real-Time NLP Intent & Tokenization Engine",
    subtitle: "Natural Language Processing pipeline for query understanding",
    category: "AI & ML",
    badge: "Industry Internship Project",
    metrics: "Mavepizon Technologies",
    problem: "Processing unstructured text queries in real time requires robust tokenization, syntactic parsing, and contextual intent mapping without incurring high response latency.",
    solution: "Constructed pipeline modules for text sanitization, token analysis, and semantic similarity scoring to support language understanding workflows in an ongoing company project.",
    myRole: "NLP Project Intern — built text preprocessing pipelines, generated embeddings, and performed validation tests.",
    technologies: ["Python", "Natural Language Processing (NLP)", "Tokenization", "Text Embeddings", "RESTful Service"],
    keyFeatures: [
      "Automated text cleaning, normalization, and stop-word filtering",
      "Context-aware intent classification and keyword weighting",
      "Modular pipeline easily integratable with downstream API endpoints",
      "Benchmark testing on real-world conversational datasets"
    ],
    githubUrl: "https://github.com/Manojinis",
    imageAlt: "Natural Language Processing Pipeline Diagram"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Rohini College of Engineering & Technology",
    location: "Palkulam, Kanyakumari, Tamil Nadu",
    period: "2024 – 2026",
    cgpa: "9.66",
    badge: "MCA Academic Topper",
    highlights: [
      "Ranked #1 Academic Topper across the department with a 9.66 CGPA.",
      "Selected for Placement Training Program organized at the Collector Office (2025).",
      "Conducted specialized technical workshops in IoT, DevOps, and Full-Stack Engineering."
    ]
  },
  {
    id: "bsc-cs",
    degree: "B.Sc. Computer Science",
    institution: "Sav Sahaya Thai Arts & Science (Women) College",
    location: "Vadakkankulam, Tamil Nadu",
    period: "2021 – 2024",
    cgpa: "9.04",
    badge: "10th University Rank",
    highlights: [
      "Secured 10th University Rank across the entire university undergraduate major.",
      "Graduated with Distinction (9.04 CGPA) with foundational excellence in programming, data structures, and database systems."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "mca-topper",
    title: "Academic Topper — MCA",
    organization: "Rohini College of Engineering & Technology",
    year: "2024–2026",
    metric: "9.66 CGPA",
    description: "Ranked first in the Master of Computer Applications program through consistent academic excellence.",
    category: "Academic"
  },
  {
    id: "university-rank",
    title: "10th University Rank — B.Sc. Computer Science",
    organization: "Sav Sahaya Thai Arts & Science College / University",
    year: "2021–2024",
    metric: "Rank 10",
    description: "Secured 10th Rank across all affiliated colleges in the University undergraduate computer science examination.",
    category: "Academic"
  },
  {
    id: "kabaddi-national",
    title: "National-Level Kabaddi Athlete",
    organization: "National Sports Federation / University",
    year: "2023",
    metric: "1 National + 3 Univ Awards",
    description: "Represented at the National level in Kabaddi with 1 National Certificate and 3 University-Level tournament awards, exemplifying grit, quick decision-making, and teamwork.",
    category: "Sports"
  },
  {
    id: "collector-placement",
    title: "Collector Office Placement Training Selection",
    organization: "District Collectorate, Kanyakumari",
    year: "2025",
    metric: "Merit Selected",
    description: "Selected based on academic and competitive merit for the prestigious leadership and placement training initiative.",
    category: "Leadership"
  },
  {
    id: "paper-presentation",
    title: "Research Paper Presentation: AI & Chatbots",
    organization: "Noorul Islam College of Higher Education",
    year: "2024",
    metric: "Conference Presentation",
    description: "Presented research on 'Artificial Intelligence and Chatbots', highlighting conversational system architectures and human-AI interaction.",
    category: "Research"
  }
];

export const RESEARCH_PRESENTATION = {
  title: "Artificial Intelligence and Chatbots",
  venue: "Noorul Islam College of Higher Education, Nagercoil",
  theme: "Innovations in Conversational Computing & NLP Systems",
  abstract: "An analytical study investigating conversational AI architectures, neural intent recognition, language tokenization paradigms, and the transition from rule-based response trees to transformer-assisted dialogue systems. Emphasized practical use-cases in automated customer service, healthcare triage, and contextual knowledge assistants.",
  keyTopics: [
    "Dialogue Management & Intent Recognition",
    "Syntactic & Semantic Tokenization Pipelines",
    "Transformer & Recurrent Neural Network Foundations",
    "Ethical Data Governance & Response Hallucination Mitigation"
  ]
};

export const CERTIFICATIONS = [
  { name: "Full Stack Web Development", issuer: "Professional Certification", year: "2025" },
  { name: "PHP Backend Development", issuer: "Features Software Company", year: "2025" },
  { name: "Machine Learning Intern", issuer: "Features Software Company", year: "2025" },
  { name: "MongoDB Basics for Students", issuer: "MongoDB University", year: "2024" },
  { name: "DevOps Basics & Value Added Course", issuer: "RCET Engineering", year: "2025" },
  { name: "IoT Skills for the Smart World", issuer: "RCET 2-Day Workshop", year: "2024" }
];

export interface JourneySlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlightMetric: string;
  photoUrl: string;
  technologies: string[];
  themeColor: 'cyan' | 'violet' | 'amber' | 'emerald' | 'rose';
}

export const JOURNEY_SLIDES: JourneySlide[] = [
  {
    id: "doctor-healix-lead",
    tag: "Production Leadership",
    title: "Software Developer & Team Lead — Doctor Healix",
    subtitle: "Enterprise healthcare & pharmacy ecosystem with 500+ installations",
    description: "Spearheaded feature releases for hospital doctors, pharmacy stock, lab reporting, and subscription systems. Architected type-safe APIs with Bun/Elysia, TypeScript, and PostgreSQL.",
    highlightMetric: "500+ Active Deployments",
    photoUrl: "/profile-photo.jpeg",
    technologies: ["TypeScript", "React", "Bun", "Elysia", "PostgreSQL", "Drizzle ORM"],
    themeColor: "cyan"
  },
  {
    id: "academic-excellence",
    tag: "Academic Topper",
    title: "Double University Honors: 9.66 MCA & 9.04 B.Sc. CS",
    subtitle: "MCA Academic Topper & 10th University Rank in B.Sc. Major",
    description: "Consistently ranked at the top of university cohorts. Recognized for software engineering coursework, competitive problem solving, and technical leadership at RCET & Anna University.",
    highlightMetric: "Rank #1 MCA (9.66 CGPA)",
    photoUrl: "/profile-photo.jpeg",
    technologies: ["Computer Science", "Algorithms", "Database Systems", "Software Design"],
    themeColor: "violet"
  },
  {
    id: "kabaddi-athlete",
    tag: "Athletic Excellence",
    title: "National-Level Kabaddi Athlete (Represented India)",
    subtitle: "1 National Certificate & 3 University-Level Tournaments",
    description: "Competing in elite athletic tournaments built rapid adaptability, strategic composure under tight deadlines, and fierce dedication to team collaboration that drives my daily code sprints.",
    highlightMetric: "National Honor (2023)",
    photoUrl: "/profile-photo.jpeg",
    technologies: ["Team Strategy", "High-Pressure Composure", "Resilience", "Leadership"],
    themeColor: "amber"
  },
  {
    id: "ai-nlp-research",
    tag: "Research & NLP",
    title: "Paper Presentation: Artificial Intelligence & Chatbots",
    subtitle: "Noorul Islam College of Higher Education & Mavepizon Technologies",
    description: "Presented research analyzing conversational systems, neural dialogue architectures, and tokenization. Contributed to real-world NLP models during industry internship.",
    highlightMetric: "Research Presenter",
    photoUrl: "/profile-photo.jpeg",
    technologies: ["Python", "NLP", "Dialogue Systems", "Tokenization", "Machine Learning"],
    themeColor: "emerald"
  },
  {
    id: "paddy-disease-iot",
    tag: "Applied Innovation",
    title: "Paddy Leaf Disease Detection & RFID Smart Attendance",
    subtitle: "Computer vision deep learning & IoT hardware integrations",
    description: "Trained CNN deep learning models for automated agricultural paddy disease diagnosis from leaf photographs, paired with practical IoT embedded automation.",
    highlightMetric: "CNN Vision Model",
    photoUrl: "/profile-photo.jpeg",
    technologies: ["Python", "TensorFlow / Keras", "OpenCV", "RFID RC522", "Arduino"],
    themeColor: "rose"
  }
];

