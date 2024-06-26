import { useContext } from "react";
import ContactSvg from "../assets/contact.svg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

// imports for animation
import { motion } from "framer-motion";
import { AppContext } from "../AppContext";

const Home = () => {
  const app_data = useContext(AppContext);

  return (
    <>
      <div className="landing_box flex sm:flex-row items-center justify-end sm:justify-center items-center h-full  sm:space-x-4 xl:space-x-12 flex-col-reverse sm:text-left text-center">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
          className="landing_text_box flex flex-col space-y-2  "
          layout
        >
          <div className="landing_top_text lg:text-6xl sm:text-5xl text-4xl  uppercase text-Hcolor font-semibold mx-auto">
            <p>{app_data.home.top_text[0]}</p>
            <p>{app_data.home.top_text[1]}</p>
            <p>{app_data.home.top_text[2]}</p>
          </div>
          <div className="landing_mid_text lg:text-4xl md:text-3xl  text-2xl uppercase font-bold mt-1">
            {app_data.home.mid_text}
          </div>
          <div className="landing_low-text lg:text-lg md:text-sm text-xs capitalize mt-2 text-white ">
            {app_data.home.low_text[0]} <br />
            {app_data.home.low_text[1]} <br />
            {app_data.home.low_text[2]}
          </div>
          <div className="landing_low-text lg:text-lg md:text-sm  text-xs capitalize mt-1 text-white">
            {app_data.home.cap_text[0]} <br></br>
            {app_data.home.cap_text[1]}
          </div>
          <div>
            <button className=" landing_btn uppercase flex p-2 items-center space-x-2 text-white text-sm lg:text-lg font-bold w-1/2 sm:w-auto  mt-2 mx-auto sm:mx-0 ">
              <img src={ContactSvg} alt="contact icon"></img>
              <a
                title="d.bugger.256@gmail.com"
                href={
                  "mailto:" +
                  app_data.about.email +
                  "?subject=Portfolio App - &body=Hello Felix, I'm reaching out about -"
                }
              >
                Contact me
              </a>
            </button>
          </div>
        </motion.div>
        <div className=" landing_image_box scale-75 sm:scale-100 align-top hover:-skew-x-12 hover:scale-90 p-0 sm:p-4  transition ease-in-out delay-150 duration-500  ">
          <img src={app_data.home.landing_image} alt="landing page image" />
        </div>
      </div>

      {/* floating about button */}
      <Link to="/about" title="About Me.">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, rotate: -90 }}
          exit={{ x: 30, opacity: 0 }}
          transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.5, type: "spring", stiffness: 200 },
          }}
          className="absolute sm:bottom-6 hidden sm:block arrow_btn    "
        >
          <img className="" src={Arrow} alt="arrow icon" />
        </motion.div>
      </Link>
    </>
  );
};

export default Home;
