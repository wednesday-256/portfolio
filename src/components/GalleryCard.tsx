import { useState } from "react";
import PropTypes from "prop-types";
import ViewIcon from "../assets/view_icon.svg";
import ArrowBtn from "../assets/arrow.svg";

// imports for animation
import { AnimatePresence, motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

const GalleryCard = ({
  topPic,
  midPic,
  header,
  body,
  desktop,
  mobile,
}: {
  topPic: string;
  midPic: string;
  header: string;
  body: string;
  desktop: string;
  mobile: string;
}) => {
  const [show, setShow] = useState(false);

  const view_handler = () => {
    setShow(!show);
  };
  return (
    <AnimatePresence>
      <div className="flex flex-col gallery-card sm:mx-0 mx-auto ">
        <div className="top_box">
          <img src={topPic} alt="phone mockup picture" />
        </div>
        <div className="mid_box">
          <img src={midPic} alt="desktop desing picture " />
        </div>
        <div className="text_box p-3 flex flex-col justify-start mx-auto">
          <p className="text-Hcolor font-bold text-center ">{header}</p>
          <p className="text-white capitalize  px-3 text-sm text-center my-2">
            {body}
          </p>
        </div>
        <button
          onClick={view_handler}
          className="landing_btn flex flex-row  justify-center  view text-white  w-2/3 mx-auto p-1"
        >
          <img src={ViewIcon} className="view-icon mr-1" alt="view icon" />
          View
        </button>
        {show ? (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
            className=" fixed sm:absolute top-4 sm:-top-8 left-0  w-full p-2  z-50"
          >
            <div className="view-box relative z-50 p-3 w-full ">
              <button onClick={view_handler}>
                <img
                  src={ArrowBtn}
                  className="rotate-90 hover:scale-125  z-50 left-7 top-10 fixed "
                />
              </button>
              <div className="sm:flex hidden flex-row items-center  justify-center">
                <img
                  className=" "
                  src={topPic}
                  alt="phone mockup design"
                />
                <img className=" h-1/2  " src={mobile} alt="mobile design" />
              </div>
              <img
                className="mx-auto mt-3 sm:block hidden"
                src={desktop}
                alt="desktop design"
              />
              <div className="sm:hidden block">

              <ImageCarousel
                images={[topPic, mobile, desktop].map((obj, key) => (
                  <img className="mx-auto  mt-24 gallery_image" key={key} src={obj} />
                ))}
              />
              </div>

            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </AnimatePresence>
  );
};

GalleryCard.propTypes = {
  topPic: PropTypes.string,
  desktop: PropTypes.string,
  midPic: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  mobile: PropTypes.string,
};

export default GalleryCard;
