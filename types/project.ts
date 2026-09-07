export type ProjectStatus = "live" | "local" | "private";

export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status: ProjectStatus;
  url?: string;
  repositoryUrl?: string;
};