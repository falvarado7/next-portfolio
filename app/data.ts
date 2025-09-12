import anoplexImg from "@/public/anoplex-software.jpg";
import { StaticImageData } from "next/image";

export type experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export const EXPERIENCES: experience[] = [
  {
    id: "anoplex",
    company: "Anoplex Software",
    role: "Full-Stack Software Engineer",
    dates: "Jun 2024 — Present",
    bullets: [
      "Modernized a legacy Windows module to a React/Laravel web app used by 150+ clients in 6+ countries.",
      "Built reusable UI components, automated PDF/Excel reports, and data exports.",
      "Wrote custom SQL scripts for migrations and data fixes; improved reliability and speed.",
      "Collaborated with leadership to deliver features faster and improve client satisfaction."
    ],
  },
  {
    id: "monarch",
    company: "Monarch (Hackathon)",
    role: "Full-Stack Engineer · 1st Place",
    dates: "March 2024",
    bullets: [
      "Won 1st place by building an AI-assisted trading dashboard in one week.",
      "Developed authentication, real time data visualizations, and responsive UI (React, Node.js, Tailwind, D3.js).",
      "Collaborated with teammates on UX flows and product direction under tight deadlines."
    ],
  },
  {
    id: 'thinkful',
    company: "Thinkful",
    role: "Full-Stack Software Engineer",
    dates: "June 2023 - March 2024",
    bullets: [
        "Completed an intensive full-stack program focused on JavaScript, React, Node.js, Express.js, and PostgreSQL.",
        "Built and developed multiple projects, including CRUD apps and lookup tools.",
        "Strengthened foundation in both front-end and back-end development with emphasis on clean, maintainable code."
    ]
  },
  {
    id: "rus industrial",
    company: "RUS Industrial",
    role: "Pipe Welder",
    dates: "Jan 2019 - Jul 2024",
    bullets: [
        "Worked in refineries in pipe welding and fabrication for safetey-critical systems.",
        "Developed discipline, precision, and teamwork under high stakes, deadline-driven conditions."
    ]
  },
];

export type projects = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image: string | StaticImageData;
}

export const PROJECTS: projects[] = [
    {
        id: "anoplex",
        title: "Anoplex Software",
        description: "Modernized legacy systems into scalable React/Laravel web app used by 150+ global clients",
        tech: ["React", "Laravel", "MySQL"],
        link: "https://hackathon-team2-v2-1.onrender.com/",
        image: anoplexImg
    },
    {
        id: "monarch",
        title: "Monarch Trading",
        description: "1st place hackathon project: AI-powered trading dashboard with live data visualizations",
        tech: ["React", "Node.js (Express.js)", "MongoDB", "D3.js"],
        link: "https://hackathon-team2-v2-1.onrender.com/",
        github: "https://github.com/falvarado7/Hackathon-Project",
        image: '/Monarch.PNG'
    },
    {
        id: "restaurant-reservation",
        title: "Restaurant Reservation",
        description: "Reservation management system for restaurants with seating, scheduling, and guest tracking",
        tech: ["React", "Node.js (Express.js)", "PostgreSQL"],
        link: "https://restaurant-reservation-project-1.onrender.com",
        github: "https://github.com/falvarado7/Restaurant-Reservation-Project",
        image: "/Restaurant-reservation.PNG"
    },
    {
        id: "we-love-movies",
        title: "We Love Movies",
        description: "Movie discovery platform with CRUD functionality for films, reviews, and theaters",
        tech: ["React", "Python (FastAPI)"],
        link: "https://welovemovies-frontend.netlify.app/",
        github: "https://github.com/falvarado7/movie-app",
        image: "/WeLoveMovies.png"
    },
    {
        id: "grub-dash",
        title: "Grub Dash",
        description: "Food delivery simulation app with restaurant, order, and driver workflows",
        tech: ["React", "Node.js (Express.js)", "PostgreSQL"],
        link: "https://grubdash-frontend-6dq9.onrender.com/",
        github: "https://github.com/falvarado7/GrubDash-BackEnd-Project",
        image: "/GrubDash.PNG"
    },
]