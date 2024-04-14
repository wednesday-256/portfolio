const slideVariants = {
  hiddenRight: {
    x: 100,
    opacity: 0,
  },
  hiddenLeft: {
    x: -100,
    opacity: 0,
    minWidth: "100%"
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  },
};

export default slideVariants;
