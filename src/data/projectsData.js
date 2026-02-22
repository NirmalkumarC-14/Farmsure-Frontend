import farmvideo from "../assets/videos/project1-demo.mp4";
import loginvideo from "../assets/videos/project2-demo.mp4";
import cloudbooks from "../assets/images/project3.jpeg";
import menucard from "../assets/images/project4.jpeg";

export const projects = [
  {
    id: 1,
    title: "FarmSure",
    description:
      "A contract farming platform connecting farmers and landowners with direct market access.",
    githubLink:"https://github.com/NirmalkumarC-14/Contract-Farming-Website-Frontend",  
    mediaType: "video",
    media: farmvideo,
    tech: ["React", "React Bootstrap"]
  },

  {
    id: 2,
    title: "Login Page",
    description:
      "Responsive authentication UI with form validation built using React and JavaScript.",
    githubLink:"https://github.com/NirmalkumarC-14/Login-Page",
    mediaType: "video",
    media: loginvideo,
    tech: ["React", "JavaScript"]
  },

  {
    id: 3,
    title: "CloudBooks",
    description:
      "A bookkeeping website interface for managing financial records and reports.",
    githubLink: "https://github.com/NirmalkumarC-14/CloudBooks",
    mediaType: "image",
    media: cloudbooks,
    tech: ["HTML", "CSS", "JavaScript"]
  },

  {
    id: 4,
    title: "Digital Menu Card",
    description:
      "Interactive digital restaurant menu with responsive design.",
    githubLink: "https://github.com/NirmalkumarC-14/Responsive-Menucard-Website",
    mediaType: "image",
    media: menucard,
    tech: ["HTML", "CSS"]
  }
];
