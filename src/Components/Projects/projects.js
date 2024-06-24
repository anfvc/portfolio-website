import euro from "../../assets/euroimg.png";
import react from "../../assets/reactshopimg.png";
import spotify from "../../assets/spotifycloneimg.png";
import calculator from "../../assets/Calculatorimg.png";
import manager from "../../assets/Managerimg.png";

const projects = [
  {
    name: "Contact Manager",
    description:
      "Contact Manager is a full-stack application. Intended to show different functionalities such as: add, edit delete contacts from a user's perspective.",
    link: "https://contact-manager-f-779t.onrender.com",
    image: manager,
    techUsed: ["Express", "MondoDB", "Node", "React", "TailwindCSS"],
    github: "https://github.com/anfvc/address-book.git",
  },
  {
    name: "The React Shop",
    description:
      "This is an online shop website I built called The React Shop. In this project I wanted to apply different concepts from React as well as some of its libraries such as react router dom. The goal was to recreate an online shop experience, from adding products to a wishlist to successfully making a purchase.",
    link: "https://spa-project-zd1l.onrender.com/",
    image: react,
    techUsed: ["React", "React Router Dom", "CSS", "Fetch API"],
    github: "https://github.com/anfvc/spa-project.git",
  },
  {
    name: "Calculator",
    description:
      "The idea of this project was to create a simple calculator using Vanilla JavaScript while using SCSS to style it. ",
    link: "https://simple-calculator-vpqz.onrender.com",
    image: calculator,
    techUsed: ["JavaScript", "HTML", "SCSS"],
    github: "https://github.com/anfvc/simple-calculator.git",
  },
  {
    name: "Spotify Clone",
    description:
      "This Website was built using HTML, CSS. I intended to make a copy based on the desktop version of Spotify. It also responds to different kinds of device screens.",
    link: "https://spotify-clone-hcex.onrender.com/",
    image: spotify,
    techUsed: ["HTML", "CSS"],
    github: "https://github.com/anfvc/spotify-clone.git",
  },
  {
    name: "Euro Germany 2024 Website",
    description:
      "This is a simple website I created using HTML and CSS. Working on this project I was able to better understand the use of Flexbox, Positioning and clean website layouts.",
    link: "https://euro-germany.onrender.com/",
    image: euro,
    techUsed: ["HTML", "CSS"],
    github: "https://github.com/anfvc/Euro-Germany.git",
  },
];

export default projects;
