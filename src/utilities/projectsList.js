import choreSitePhoto from "../assets/choreSite.png";
import portfolioPhoto from "../assets/portfolioWebsite.png";

export const projectsToShow = [
  {
    photo: choreSitePhoto,
    title: "choreTracker",
    description: `I created choreTracker to track chores and control impulse purchases by earning points for completing tasks, which can be redeemed for rewards. 
    It offers an intuitive interface to manage tasks and stay on track with goals.`,
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
      "Tailwindcss",
    ],
    visitPageLink: "https://choresite-n71r.onrender.com/",
    viewCodeLink: "https://github.com/aduong3/choreSite",
    isCompleted: true,
  },
  {
    photo: portfolioPhoto,
    title: "Portfolio Website",
    description: `This is my personal portfolio website, showcasing my web development skills and projects. 
      It features a responsive layout with interactive elements and links to my live projects and GitHub. The site demonstrates my front-end and back-end development abilities.`,
    tags: ["JavaScript", "React", "Tailwindcss"],
    visitPageLink: null,
    viewCodeLink: "https://github.com/aduong3/portfolio",
    isCompleted: true,
  },
  {
    photo: null,
    title: "Next Project",
    description: `Current Ideas: Language Learning, Travel All-In-One, Expense/Budget Tracker, `,
    tags: ["TypeScript", "React", "Tailwindcss", "Node.js", "Express.js"],
    visitPageLink: null,
    viewCodeLink: null,
    isCompleted: false,
  },
];
