import { useState } from "react";
import PropTypes from "prop-types";
import ViewIcon from "../assets/view_icon.svg";
import ArrowBtn from "../assets/arrow.svg";

// imports for animation
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="flex flex-col gallery-card ">
        <div className="top_box">
          <img src={topPic} />
        </div>
        <div className="mid_box">
          <img src={midPic} />
        </div>
        <div className="text_box p-3 ">
          <p className="text-Hcolor font-bold text-center ">{header}</p>
          <p className="text-white capitalize  px-3 text-sm text-center my-2">
            {body}
          </p>
        </div>
        <button
          onClick={view_handler}
          className="landing_btn flex flex-row  justify-center  view text-white  w-2/3 mx-auto p-1"
        >
          <img src={ViewIcon} className="view-icon mr-1" />
          View
        </button>
        {show ? (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
            className=" absolute top-0 left-0 w-full p-2  z-50"
          >
            <div className="flex view-box relative flex-col space-y-5 items-center mb-4 p-4 ">
              <button onClick={view_handler}>
                <img
                  src={ArrowBtn}
                  className="rotate-90 hover:scale-125  left-4 top-16 fixed "
                />
              </button>
              <div className="flex flex-row  justify-center">
                <img className="w-2/5 h-fit" src={topPic} alt="" />
                <img className=" w-1/5 " src={mobile} alt="" />
              </div>
              <img className="w-5/6" src={desktop} alt="" />
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
