export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  achievements: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ai-web-scraper",
    title: "AI Web Scraper",
    description: "Intelligent web scraping system with natural language query capabilities powered by LangChain.",
    techStack: ["Python", "Selenium", "LangChain", "BeautifulSoup"],
    image: "/assets/project-ai-scraper.jpg",
    achievements: [
      "Eliminated 80% of manual data collection",
      "Enabled plain English queries against 20+ websites",
      "Handled pagination, dynamic loading, and authentication flows",
    ],
    githubUrl: "https://github.com/JayGondalia",
  },
  {
    id: "realtime-conveyancer",
    title: "RealTime Conveyancer",
    description: "Legal workflow automation platform with real-time dashboard and secure authentication.",
    techStack: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    image: "/assets/project-conveyancer.jpg",
    achievements: [
      "Saved 3.25 hours per transaction (4h → 45min)",
      "99.5% uptime with JWT/OAuth2 authentication",
      "60% reduction in post-deployment bugs with Jest testing",
    ],
    githubUrl: "https://github.com/JayGondalia",
    demoUrl: "#",
  },
  {
    id: "steer-global",
    title: "Steer Global",
    description: "School assessment platform with REST and GraphQL APIs serving 200+ concurrent users.",
    techStack: ["Vue.js", "Next.js", "PHP", "Laravel", "MySQL", "Kubernetes"],
    image: "/assets/project-steer.jpg",
    achievements: [
      "15% increase in school onboarding throughput",
      "30% improvement in API response time",
      "Full SDLC from requirements to Kubernetes deployment",
    ],
    githubUrl: "https://github.com/JayGondalia",
  },
];
