export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
}

export const educations: Education[] = [
  {
    id: "fanshawe",
    degree: "Postgraduate Certificate, AI & Machine Learning",
    institution: "Fanshawe College",
    location: "London, ON",
    year: "2024",
  },
  {
    id: "gh-patel",
    degree: "Bachelor of Engineering, Information Technology",
    institution: "G H Patel College of Engineering",
    location: "India",
    year: "2020",
  },
];

export const certifications: Certification[] = [
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
  },
  {
    id: "deloitte-analytics",
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
  },
];
