import { Project } from "@/types/project";

export const projects: Project[] = [
  
  {
    title: "Portfolio",
    description: "Mon portfolio personnel et mes expérimentations web.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    status: "live",
    url: "https://florianleborgne-seven.vercel.app/",
  },
  {
    title: "MovieCoDB",
    description: "Projet réalisé dans le cadre de ma formation.",
    technologies: ["C#", ".NET", "SQL","Vue.js"],
    image:"/projects/MovieCoDB.png",
    repositoryUrl:"https://gitlab.com/florian_leborgne813/moviecodb",
    status: "local",
  },
];
