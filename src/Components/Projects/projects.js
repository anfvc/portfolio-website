import euro from "../../assets/euroimg-compress.webp";
import spotify from "../../assets/spotifycloneimg-compress.webp";
import calculator from "../../assets/Calculatorimg-compress.webp";
import manager from "../../assets/Managerimg-compress.webp";
import bitez from "../../assets/bitezimg-compress.webp";
import bloomora from "../../assets/bloomora-compress.webp";
import react from "../../assets/react2.svg";
import tailwind from "../../assets/tailwindcss2.svg";
import express from "../../assets/express.svg";
import mongo from "../../assets/mongo.svg";
import node from "../../assets/nodejs2.svg";
import stripe from "../../assets/stripe.svg";
import css from "../../assets/css2.svg";
import js from "../../assets/js2.svg";
import html from "../../assets/html2.svg";
import sass from "../../assets/sass2.svg";
import materialui from "../../assets/materialui.svg";
import cloudinary from "../../assets/cloudinary.svg";

export const projects = [
  {
    name: "Bitez Food App",
    description:
      "Bitez is a fullstack app. Its purpose is to serve as a restaurant app where you can select from a different offering of products, place orders, have a complete overview of all your orders, track them and pay for them using Stripe's hosted page. It also counts with an admin panel which is intended to serve the app's content and is also used for updating order's statuses.",
    link: "https://bitez-food-app.onrender.com",
    image: bitez,
    techUsed: [
      { name: "ExpressJS", image: express },
      { name: "MongoDB", image: mongo },
      { name: "NodeJS", image: node },
      { name: "React", image: react },
      { name: "TailwindCSS", image: tailwind },
      { name: "Stripe", image: stripe },
    ],
    github: "https://github.com/anfvc/bitez-food-app.git",
  },
  {
    name: "Bloomora Flower Shop",
    description:
      "Bloomora was a collab project I did along with my colleages at DCI for the course final project. We wanted to create an full stack e-commerce application whose main product, were flowers. It intended to take the user through a smooth shopping experience while also offering a smooth checkout process achieved by calling the Stripe hosted page. As well as storing all of our product images using Cloudinary. Please note that it may take a while to load.",
    link: "https://final-project-jran.onrender.com",
    image: bloomora,
    techUsed: [
      { name: "ExpressJS", image: express },
      { name: "MongoDB", image: mongo },
      { name: "NodeJS", image: node },
      { name: "React", image: react },
      { name: "CSS", image: css },
      { name: "MaterialUI", image: materialui },
      { name: "Stripe", image: stripe },
      { name: "Cloudinary", image: cloudinary },
    ],
    github: "https://github.com/anfvc/bloomora-flower-shop.git",
  },
  {
    name: "Contact Manager",
    description:
      "Contact Manager is a full-stack application. Intended to show different functionalities such as: add, edit delete contacts from a user's perspective.",
    link: "https://contact-manager-f-779t.onrender.com",
    image: manager,
    techUsed: [
      { name: "ExpressJS", image: express },
      { name: "MongoDB", image: mongo },
      { name: "NodeJS", image: node },
      { name: "React", image: react },
      { name: "TailwindCSS", image: tailwind },
      { name: "MaterialUI", image: materialui },
    ],
    github: "https://github.com/anfvc/address-book.git",
  },
  // {
  //   name: "The React Shop",
  //   description:
  //     "This is an online shop website I built called The React Shop. In this project I wanted to apply different concepts from React as well as some of its libraries such as react router dom. The goal was to recreate an online shop experience, from adding products to a wishlist to successfully making a purchase.",
  //   link: "https://spa-project-zd1l.onrender.com/",
  //   image: react,
  //   techUsed: ["React", "React Router Dom", "CSS", "Fetch API"],
  //   github: "https://github.com/anfvc/spa-project.git",
  // },
  {
    name: "Calculator",
    description:
      "The idea of this project was to create a simple calculator using Vanilla JavaScript while using SCSS to style it. ",
    link: "https://simple-calculator-vpqz.onrender.com",
    image: calculator,
    techUsed: [
      { name: "JavaScript", image: js },
      { name: "HTML", image: html },
      { name: "SASS", image: sass },
    ],
    github: "https://github.com/anfvc/simple-calculator.git",
  },
  {
    name: "Spotify Clone",
    description:
      "This Website was built using HTML, CSS. I intended to make a copy based on the desktop version of Spotify. It also responds to different kinds of device screens.",
    link: "https://spotify-clone-hcex.onrender.com/",
    image: spotify,
    techUsed: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
    ],
    github: "https://github.com/anfvc/spotify-clone.git",
  },
  {
    name: "Euro Germany 2024 Website",
    description:
      "This is a simple website I created using HTML and CSS. Working on this project I was able to better understand the use of Flexbox, Positioning and clean website layouts.",
    link: "https://euro-germany.onrender.com/",
    image: euro,
    // techUsed: [html, css],
    techUsed: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
    ],
    github: "https://github.com/anfvc/Euro-Germany.git",
  },
];
