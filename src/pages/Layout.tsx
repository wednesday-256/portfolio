import { useContext, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import AboutIcon from "../assets/about_icon.svg";
import GalleryIcon from "../assets/gallery_icon.svg";
import ResumeIcon from "../assets/resume_icon.svg";
import ContactIcon from "../assets/contact_icon.svg";
import Resume from "../assets/resume.pdf";

// imports for animation
import { motion } from "framer-motion";
import { AppContext } from "../AppContext";

const Layout = () => {
  const location = useLocation();
  const app_data = useContext(AppContext);

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="app_box  h-f"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="header_box pt-2 sticky top-0 z-50 ">
        <div className="logo_box p-1 neo-morph">
          <Link to="/">
            <img src={logo} alt="logo image"></img>
          </Link>
        </div>
        <div className="link_box text-Hcolor space-x-3 text-xs sm:space-x-5  xl:text-sm md:space-x-10 lg:space-x-20 ">
          {location.pathname.toLowerCase() === "/about" ? (
            <p className=" px-1 sm:px-3 py-1 font-thin">About</p>
          ) : (
            <Link
              className="neo-morph link  px-1 sm:px-3 py-1 flex items-center flex-row "
              to="/about"
            >
              <img className="mr-2 " src={AboutIcon} />
              About
            </Link>
          )}

          {location.pathname.toLowerCase() === "/gallery" ? (
            <p className=" px-1 sm:px-3 py-1 font-thin">Gallery</p>
          ) : (
            <Link
              className="neo-morph link  px-1 sm:px-3 py-1 flex items-center flex-row "
              to="/gallery"
            >
              <img className="mr-2 " src={GalleryIcon} />
              Gallery
            </Link>
          )}

          <br className="" />

          <a
            target="_blank"
            href={Resume}
            className="neo-morph link  px-1 sm:px-3 py-1 flex items-center flex-row "
          >
            <img className="mr-2 " src={ResumeIcon} />
            Resume
          </a>

          <a
            title="d.bugger.256@gmail.com"
            href={
              "mailto:" +
              app_data.about.email +
              "?subject=Portfolio App - &body=Hello Felix, I'm reaching out about -"
            }
            className="neo-morph link  px-1 sm:px-3 py-1 flex items-center flex-row "
          >
            <img className="mr-2 " src={ContactIcon} />
            Contact
          </a>
        </div>
      </div>
      <div className="h-5/6 ">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default Layout;
