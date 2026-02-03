export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "PHP", "C#"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "Laravel", ".NET Core", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Azure SQL", "NoSQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS (EC2, S3, Lambda)", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Tools & Testing",
    icon: "Wrench",
    skills: ["Jest", "Mocha", "Kafka", "Git", "Jenkins", "Postman", "OAuth2", "JWT"],
  },
];
