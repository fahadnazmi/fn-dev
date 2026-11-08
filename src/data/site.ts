import aboutImage from "../assets/photos/IMG_5981.JPG";
import workHeroImage from "../assets/hero.webp";

export const site = {
  name: "Fahad Nazmi",
  description: "Personal portfolio: projects, photography and contact.",
  email: "fahadnazmi2001@gmail.com",
  city: "HYDERABAD",
  cityCoordinates: "17.387140° N 78.491684° E",
  contact: {
    formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT,
  },
  socials: [
    { label: "GitHub", href: "https://github.com/fahadnazmi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fahad-nazmi/" },
    { label: "Resume", href: "https://your-website.com/resume" },
  ],
  nav: [
    { label: "PROJECTS", href: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" }
  ],
  about: {
    image: {
      src: aboutImage,
      alt: "A monochrome nighttime scene beneath a starry sky",
    },
    techStack: [
      { name: "Astro", slug: "astro", url: "https://astro.build" },
      { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org" },
      { name: "JavaScript", slug: "javascript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: ".NET", slug: "dotnet", url: "https://dotnet.microsoft.com" },
      { name: "React", slug: "react", url: "https://react.dev" },
      { name: "Node.js", slug: "nodedotjs", url: "https://nodejs.org" },
      { name: "Python", slug: "python", url: "https://www.python.org" },
      { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org" },
      { name: "Docker", slug: "docker", url: "https://www.docker.com" },
      { name: "Git", slug: "git", url: "https://git-scm.com" },
      { name: "GitHub", slug: "github", url: "https://github.com" },
      { name: "Figma", slug: "figma", url: "https://www.figma.com" },
    ],
    marqueeDuration: 45,
    marqueeCopies: 4,
    eventStepDegrees: 12,
    timeline: [
      {
        date: "2025 — PRESENT",
        title: "Software Engineer",
        organization: "Wells Fargo",
        location: "Hyderabad, India",
      },
      {
        date: "2024 — 2025",
        title: "Program Associate",
        organization: "Wells Fargo",
        location: "Hyderabad, India",
      },
      {
        date: "June 2023 — July 2023",
        title: "Trainee",
        organization: "GAIL (India) Ltd.",
        location: "Noida, India",
        description: ".NET Developer",
      },
      {
        date: "2020 - 2024",
        title: "B. Tech. in Information Technology",
        organization: "Delhi Technological University",
        location: "New Delhi, India",
        description: "Cumulative GPA: 9.09 (on a 10-point scale)",
      },
    ],
  },
  work: {
    heroImage: {
      src: workHeroImage,
      alt: "Portfolio hero image",
    },
  },
};
