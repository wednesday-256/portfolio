import { useContext } from "react";
import AboutPic from "../assets/about_pic.png";
import AboutDecor from "../assets/about_decor.svg";
import GoogleIcon from "../assets/google_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import GithubIcon from "../assets/github_icon.svg";
import AboutDecor2 from "../assets/about_decor2.svg";

// imports for animation
import { motion } from "framer-motion";
import { AppContext } from "../AppContext";

const About = () => {
  const app_data = useContext(AppContext);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className="about_box sm:flex-row flex-col  justify-center sm:item-center  sm:h-full sm:text-left sm:mt-3 flex sm:space-x-4"
    >
      <div className="side_pane about_pic_box sm:h-100 overflow-y-clip p-5 flex flex-col justify-start  w-auto sm:mt-0 mt-3">
        <div className="p-4   neo-morph about_pic mx-auto ">
          <img src={AboutPic}  className="max-w-40" alt="profile headshot picture"/>
        </div>
        <div className="relative hidden sm:block ">
          <img src={AboutDecor} className="absolute -top-10 -left-2 " alt='about picture decoration' />
        </div>
        <div className="text-4xl uppercase font-serif text-Hcolor  text-center mt-4 ">
          Felix
        </div>
        <div className="relative sm:mt-0 mt-3 ">
          <div className="sm:absolute static items-center sm:items-start top-24 flex  flex-col space-y-3">
            <div className="flex flex-row space-x-2 text-white font-normal text-lg">
              <img src={GoogleIcon} alt='gmail icon'/>
              <p className="font-medium uppercase">{app_data.about.email}</p>
            </div>
            <div className="flex flex-row space-x-2 text-white font-normal text-lg">
              <img src={GithubIcon} alt='github icon'/>
              <p className="font-medium uppercase">{app_data.about.git}</p>
            </div>
            <div className="flex flex-row space-x-2 text-white font-normal text-lg">
              <img src={LinkedInIcon} alt='linkedin icon' />
              <p className="font-medium uppercase">{app_data.about.linked}</p>
            </div>
          </div>
        </div>
        <div className="relative hidden sm:block ">
          <img src={AboutDecor2} className="absolute top-36 -right-2 " alt='about picture decoration' />
        </div>
      </div>
      <div className="about_section p-3   capitalize flex flex-col sm:space-y-6 space-y-2 mt-2 sm:pl-4 ">
        <p className="text-Hcolor sm:mt-0 mt-3 sm:text-5xl text-3xl sm:text-left text-center  font-semibold ">
          About Me
        </p>
        <div className="sm:ml-10 overflow-auto">
          <div className="text-white mb-2 ">{app_data.about.info[0]}</div>
          <div className="text-white mb-2">{app_data.about.info[1]}.</div>
          <div className="text-white mb-5">{app_data.about.info[2]}</div>
          <div className="text-white font-bold mb-2 mt-3">Key Skills</div>
          <div className="text-white ml-14 flex flex-col space-y-2 mb-4">
            <p>{app_data.about.skills[0]} </p>
            <p>{app_data.about.skills[1]}</p>
            <p>{app_data.about.skills[2]} </p>
          </div>
          <div className="font-bold text-white mb-2">passion and Values</div>
          <div className="text-white ml-14 flex flex-col space-y-2 mb-4">
            <p>{app_data.about.values[0]}</p>
            <p>{app_data.about.values[1]}</p>
            <p>{app_data.about.values[2]}</p>
          </div>
          <div className="text-white font-bold mb-2">Work Philosophy</div>
          <div className="text-white ml-14 flex flex-col space-y-2 mb-4">
            <p>{app_data.about.work[0]}</p>
            <p>{app_data.about.work[1]}</p>
          </div>
        </div>
        <div className="text-white font-bold text-lg text-center mt-4 sm:mb-0  ">
          {app_data.about.cap_text[0]}
          <br />
          {app_data.about.cap_text[1]}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
