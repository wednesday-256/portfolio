import { useContext, useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import AboutIcon from "../assets/about_icon.svg";
import GalleryIcon from "../assets/gallery_icon.svg";
import ResumeIcon from "../assets/resume_icon.svg";
import ContactIcon from "../assets/contact_icon.svg";
import Resume from "../assets/resume.pdf";
import Background from "../assets/background.png";
import Loading from "./Loading";

// imports for animation
import { motion } from "framer-motion";
import { AppContext } from "../AppContext";

const Layout = () => {
  const location = useLocation();
  const app_data = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState<string[]>([]);

  let src_array: string[] = [
    app_data.home.landing_image,
    app_data.about.about_pic,
    Background,
  ];

  app_data.gallery.forEach((obj) => {
    src_array = src_array.concat([
      obj.midPic,
      obj.mobile,
      obj.topPic,
      obj.desktop,
    ]);
  });

  useEffect(() => {
    src_array.forEach((obj: string) => {
      const img = new Image();

      img.addEventListener(
        "load",
        (e) => {
          const image = e.target as HTMLImageElement;
          !count.includes(image.src) ? setCount(count.concat([image.src])) : "";

          if (count.length === src_array.length) {
            setLoading(false);
          }
        },
        { once: true }
      );

      img.src = obj;
    });
  });

  return (
    <motion.div
      className="app_box h-screen flex relative flex-col  space-y-4 "
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {!loading ? (
        <>
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
                  <img className="mr-2 " src={AboutIcon} alt="about icon" />
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
                  <img className="mr-2 " src={GalleryIcon} alt="gallery icon" />
                  Gallery
                </Link>
              )}

              <br className="" />

              <a
                target="_blank"
                href={Resume}
                className="neo-morph link  px-1 sm:px-3 py-1 flex items-center flex-row "
              >
                <img
                  className="mr-2 "
                  src={ResumeIcon}
                  alt="resume download icon"
                />
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
                <img className="mr-2 " src={ContactIcon} alt="contact icon" />
                Contact
              </a>
            </div>
          </div>
          <div className="h-5/6 ">
            <Outlet />
          </div>
        </>
      ) : (
        ""
      )}
      {loading ? (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="absolute h-full w-full  z-50 -top-2"
        >
          <Loading />
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Layout;
