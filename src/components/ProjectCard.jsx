import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, liveLink, articleLink, image, elevationIndex }) {
  const hoverY = elevationIndex === 1 ? -16 : -8;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl w-full aspect-square flex flex-col overflow-hidden cursor-pointer"
      animate={{ y: [0, hoverY, 0] }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-1/2 object-cover"
        />
      )}
      <div className="flex flex-col justify-between h-1/2 p-4">
        <div>
          <h2 className="font-savate text-xl font-semibold mb-1">{title}</h2>
          <p className="font-quicksand text-gray-600 text-sm mb-3">{description}</p>
        </div>
        <div className="font-quicksand flex flex-wrap gap-2 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-200 font-bold text-black text-sm px-4 py-2 rounded-md hover:bg-blue-300 transition"
          >
            Live site
          </a>
          <Link
            to={articleLink}
            className="bg-pink-200 font-bold text-sm text-gray-800 px-4 py-2 rounded-md hover:bg-pink-300 transition"
          >
            Article
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
