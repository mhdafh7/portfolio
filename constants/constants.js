export const projectItems = [
  {
    id: 1,
    title: "Noteey",
    img: "/Image.jpg",
    tags: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Scss"],
  },
  {
    id: 2,
    title: "Miniposts",
    img: "/Image.jpg",
    tags: ["React.js", "Express", "MongoDB", "Node.js", "Tailwindcss"],
  },
];

// Animation constants
export const variants = {
  offscreen: { filter: "blur(10px)", opacity: 0.05, y: -30 },
  onscreen: { filter: "blur(0px)", opacity: 1, y: 0 },
};

export const variantParent = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.05 },
  }),
};
export const variantChild = {
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  offscreen: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};
