import { createContext } from "react";

import LandingImage from "./assets/landing_image.png";

import AboutPic from "./assets/about_pic.png";
import AdminMock from "./assets/admin_mockup.png";
import AdminMobile from "./assets/admin_mobile.png";
import AdminDesktop from "./assets/admin_desktop.png";
import AdminMid from "./assets/admin_mid.png";

import RestMock from "./assets/rest_mockup.png";
import RestMobile from "./assets/rest_mobile.png";
import RestDesktop from "./assets/rest_desktop.png";
import RestMid from "./assets/rest_mid.png";

import GymMock from "./assets/gym_mock.png";
import GymMobile from "./assets/gym_mobile.png";
import GymDesktop from "./assets/gym_desktop.png";
import GymMid from "./assets/gym_mid.png";

const data = {
  home: {
    landing_image: LandingImage,
    top_text: ["Transforming", "ideas into", "reality"],
    mid_text: "Design, develop, deploy.",
    low_text: [
      "From inception to execution, offering ",
      "comprehensive solutions tailored to your",
      "unique needs.",
    ],
    cap_text: ["Let's embark on this transformative", "journey together."],
  },
  about: {
    about_pic: AboutPic,
    email: "d.bugger.256@gmail.com",
    git: "@wednesday-256",
    linked: "@wednesday256",
    info: [
      "Full-stack software developer and UI/UX designer with 4+ years of experience.",
      "Graduated with First Class Honors in Information Technology from Middlesex University",
      "Has An Advanced Diploma in Software Engineering from Aptech Computer Education with distinctions.",
    ],
    skills: [
      "Proficient in JavaScript, Python, HTML/CSS, React, and more.",
      "Experienced in both front-end and back-end development.",
      "Committed to staying updated with industry trends.",
    ],
    values: [
      "Passionate about leveraging technology to create meaningful experiences.",
      " Believe in collaboration and fostering positive working relationships.",
      "Dedicated to delivering excellence in every project. ",
    ],
    work: [
      "Focus on understanding client needs and exceeding expectations.",
      "Dedicated to quality, efficiency, and continuous improvement.",
    ],
    cap_text: [
      " With passion, creativity, and dedication, I'm here to turn your ideas into reality",
      "Let's embark on this journey together!",
    ],
  },
  gallery: [
    {
      midPic: AdminMid,
      mobile: AdminMobile,
      topPic: AdminMock,
      desktop: AdminDesktop,
      header: "Admin Panel",
      body: "A seamless blend of intuitive design and powerful functionality. From order management to performance analytics.",
    },
    {
      midPic: GymMid,
      mobile: GymMobile,
      topPic: GymMock,
      desktop: GymDesktop,
      header: "Gym App",
      body: "Tech and creativity intertwine, crafting captivating digital experiences that leave a lasting impression on users.",
    },
    {
      midPic: RestMid,
      mobile: RestMobile,
      topPic: RestMock,
      desktop: RestDesktop,
      header: "Restuarant App",
      body: "sleek, modern components with a design-centric approach to ensure  a user-friendly experience at  every touchpoint. ",
    },
  ],
};

const AppContext = createContext(data);

export { data, AppContext };
