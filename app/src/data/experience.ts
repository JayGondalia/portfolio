export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "skyline-infosys",
    title: "Full-Stack Developer",
    company: "Skyline Infosys",
    location: "India",
    startDate: "Sep 2020",
    endDate: "Jul 2023",
    achievements: [
      "Cut data retrieval time 25% by refactoring SQL queries and backend logic across 3 production microservices serving 500+ users",
      "Reduced integration time from 3 weeks to 2 days by building reusable Node.js API modules with microservices architecture",
      "Shipped 10+ features using React.js, Node.js, Java, PostgreSQL—delivered on time across 15 Agile sprints",
      "Implemented CI/CD pipelines with Jenkins and GitHub Actions, cutting deployment time 40% and achieving 85% test coverage",
      "Collaborated with cross-functional teams of 5+ engineers, maintaining 95% code review approval rate",
    ],
  },
];
