import { useContext } from "react";
import GalleryCard from "../components/GalleryCard";
import { AppContext } from "../AppContext";

// imports for animation
import { motion } from "framer-motion";

const Gallery = () => {
  const items = useContext(AppContext).gallery;

  return (
    <>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className="text-Hcolor  mt-4 mb-8 sm:text-5xl text-3xl  text-center  font-semibold ">
        Gallery
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="flex sm:flex-row flex-col justify-center space-x-6 lg:space-x-12 sm:h-fit items-center mt-3 relative"
      >
        {items.map((obj, key) => (
          <GalleryCard
            key={key}
            topPic={obj.topPic}
            midPic={obj.midPic}
            header={obj.header}
            body={obj.body}
            desktop={obj.desktop}
            mobile={obj.mobile}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
