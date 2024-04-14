import { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slideVariants from "./slideVariants";

const ImageCarousel = ({ images }: { images: ReactElement[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex: number) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  return (
    <div className="carousel ">
      <div className="w-full card_box relative ">
        <AnimatePresence>
          <motion.div
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            key={currentIndex}
            className="w-full absolute  "
          >
            {images[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="slide_direction">
        <div className="left loading_box p-3 " onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="30"
            fill="#FCD7AD"
          >
            <path
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
              stroke="#FCD7AD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="70"
            />
          </svg>
        </div>
        <div className="right loading_box p-3" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="30"
            fill="#FCD7AD"
          >
            <path
              d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
              stroke="#FCD7AD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="70"
            />
          </svg>
        </div>
      </div>
      <div className="indicator ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
