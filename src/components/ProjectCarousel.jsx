import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const project = projects[index];

  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="absolute w-full h-full object-cover brightness-75 transition duration-500"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <h4 className="font-savate text-lg font-semibold">{project.title}</h4>
        <p className="font-quicksand text-sm mb-3 max-w-md">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          <a
            href={project.link}
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

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-md hover:bg-white z-20 transition"
        aria-label="Previous project"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-md hover:bg-white z-20 transition"
        aria-label="Next project"
      >
        →
      </button>
    </div>
  );
}


