export type NodeState = "completed" | "current" | "locked" | "available";

export interface RoadmapNode {
  id: string;
  label: string;
  level: string;
  state: NodeState;
  prerequisites: { label: string; done: boolean }[];
  skills: { label: string; done: boolean }[];
  tools: string[];
  certifications: string[];
  projects: { title: string; description: string }[];
  interview: string[];
  prev?: string;
  next?: string;
  lateral?: string[];
}

export interface Track {
  id: string;
  label: string;
  color: string;
  progress: number;
  nodes: RoadmapNode[];
}

export const foundations = [
  "Computer Science Basics",
  "Git & GitHub",
  "Linux Command Line",
  "Networking Fundamentals",
  "SQL",
];

const node = (n: Partial<RoadmapNode> & { id: string; label: string; level: string; state: NodeState }): RoadmapNode => ({
  prerequisites: [],
  skills: [],
  tools: [],
  certifications: [],
  projects: [],
  interview: [],
  ...n,
});

export const tracks: Track[] = [
  {
    id: "software",
    label: "Software Development",
    color: "oklch(0.75 0.13 210)",
    progress: 45,
    nodes: [
      node({ id: "sd-html", label: "HTML/CSS", level: "Skill", state: "completed" }),
      node({ id: "sd-js", label: "JavaScript", level: "Skill", state: "completed" }),
      node({
        id: "sd-react",
        label: "React",
        level: "Skill",
        state: "current",
        prerequisites: [
          { label: "Global Foundations", done: true },
          { label: "HTML & CSS", done: true },
          { label: "JavaScript", done: true },
        ],
        skills: [
          { label: "React.js", done: true },
          { label: "CSS Modules", done: false },
          { label: "Git Advanced", done: false },
          { label: "Webpack Basics", done: false },
        ],
        tools: ["VS Code", "NPM/Yarn", "GitKraken", "Chrome DevTools"],
        certifications: ["freeCodeCamp Front End", "AWS Certified Cloud Practitioner"],
        projects: [
          { title: "Personal Portfolio Website", description: "Build a responsive site showcasing your work." },
          { title: "Interactive Dashboard", description: "Connect to a public API and display data." },
        ],
        interview: ["CSS Box Model", "React Component Lifecycle", "REST API basics"],
        prev: "JavaScript",
        next: "Node.js",
        lateral: ["UI/UX Designer"],
      }),
      node({ id: "sd-node", label: "Node.js", level: "Skill", state: "available" }),
      node({ id: "sd-junior", label: "Junior Frontend Developer", level: "Entry Level Role", state: "available" }),
      node({ id: "sd-full", label: "Full Stack Developer", level: "Mid Level Role", state: "locked" }),
      node({ id: "sd-senior", label: "Senior Engineer", level: "Senior Role", state: "locked" }),
      node({ id: "sd-arch", label: "Software Architect", level: "Leadership Role", state: "locked" }),
    ],
  },
  {
    id: "data",
    label: "Data Analytics & Science",
    color: "oklch(0.75 0.17 145)",
    progress: 20,
    nodes: [
      node({ id: "da-stats", label: "Statistics", level: "Skill", state: "completed" }),
      node({ id: "da-python", label: "Python & Pandas", level: "Skill", state: "current" }),
      node({ id: "da-analyst", label: "Data Analyst", level: "Entry Level Role", state: "available" }),
      node({ id: "da-scientist", label: "Data Scientist", level: "Mid Level Role", state: "locked" }),
      node({ id: "da-lead", label: "Lead Data Scientist", level: "Senior Role", state: "locked" }),
    ],
  },
  {
    id: "ml",
    label: "AI / Machine Learning",
    color: "oklch(0.68 0.22 320)",
    progress: 12,
    nodes: [
      node({ id: "ml-math", label: "Linear Algebra", level: "Skill", state: "completed" }),
      node({ id: "ml-sklearn", label: "scikit-learn", level: "Skill", state: "current" }),
      node({ id: "ml-mlops", label: "MLOps Engineer", level: "Mid Level Role", state: "locked" }),
      node({ id: "ml-research", label: "ML Researcher", level: "Senior Role", state: "locked" }),
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    color: "oklch(0.72 0.19 52)",
    progress: 30,
    nodes: [
      node({ id: "do-linux", label: "Linux & Bash", level: "Skill", state: "completed" }),
      node({ id: "do-docker", label: "Docker", level: "Skill", state: "current" }),
      node({ id: "do-k8s", label: "Kubernetes", level: "Skill", state: "available" }),
      node({ id: "do-sre", label: "Site Reliability Engineer", level: "Mid Level Role", state: "locked" }),
      node({ id: "do-cloud", label: "Cloud Architect", level: "Senior Role", state: "locked" }),
    ],
  },
  {
    id: "security",
    label: "Cybersecurity",
    color: "oklch(0.63 0.22 25)",
    progress: 8,
    nodes: [
      node({ id: "cs-net", label: "Network Security", level: "Skill", state: "completed" }),
      node({ id: "cs-analyst", label: "Security Analyst", level: "Entry Level Role", state: "available" }),
      node({ id: "cs-eng", label: "Security Engineer", level: "Mid Level Role", state: "locked" }),
      node({ id: "cs-pentest", label: "Penetration Tester", level: "Senior Role", state: "locked" }),
    ],
  },
  {
    id: "product",
    label: "Product Management",
    color: "oklch(0.82 0.17 90)",
    progress: 5,
    nodes: [
      node({ id: "pm-basics", label: "Product Discovery", level: "Skill", state: "current" }),
      node({ id: "pm-apm", label: "Associate PM", level: "Entry Level Role", state: "available" }),
      node({ id: "pm-pm", label: "Product Manager", level: "Mid Level Role", state: "locked" }),
      node({ id: "pm-dir", label: "Director of Product", level: "Leadership Role", state: "locked" }),
    ],
  },
];
