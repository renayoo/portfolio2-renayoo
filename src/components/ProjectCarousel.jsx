import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

export default function ProjectCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([current]) => [
      (current + newDirection + projects.length) % projects.length,
      newDirection,
    ]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const project = projects[index];

  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={project.title}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute w-full h-full object-cover brightness-75"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <h4 className="font-savate text-lg font-semibold">{project.title}</h4>
            <p className="font-quicksand text-sm mb-3 max-w-md">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-100 transition text-sm"
              >
                Live site
              </a>
              {project.articleLink && (
                <Link
                  to={project.articleLink}
                  className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-100 transition text-sm"
                >
                  Article
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-md hover:bg-white z-20 transition"
        aria-label="Previous project"
      >
        ←
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-md hover:bg-white z-20 transition"
        aria-label="Next project"
      >
        →
      </button>
    </div>
  );
}
