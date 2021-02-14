export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const rotateIntoPlace = {
  initial: {
    rotateZ: 0,
    x: 0,
  },
  animate: {
    rotateZ: -2,
    x: -15,
  },
};

export const stagger = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};
