import { useContext } from "react";
import GalleryCard from "../components/GalleryCard";
import { AppContext } from "../AppContext";
import ImageCarousel from "../components/ImageCarousel";

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
        className="text-Hcolor sticky top-12 z-50  mt-4 mb-8 sm:text-5xl text-3xl  text-center  font-semibold "
      >
        Gallery
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="sm:flex hidden flex-row justify-center space-x-6 lg:space-x-12 sm:h-fit items-center mt-3 relative"
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
      <div className="block sm:hidden">
        <ImageCarousel
          images={items.map((obj, key) => (
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
        />
      </div>
    </>
  );
};

export default Gallery;
