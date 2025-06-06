import React from "react";
import { Link } from "react-router-dom";

export default function ArticleLayout({ title, image, liveLink, children }) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Link
        to="/projects"
        className="font-savate inline-block mb-6 bg-blue-200 text-black font-semibold px-4 py-2 rounded hover:bg-blue-300 transition"
      >
        Back to projects
      </Link>

      <h1 className="font-savate text-3xl font-bold mb-6">{title}</h1>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg mb-6 object-cover max-h-80"
        />
      )}

      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="font-quicksand inline-block bg-blue-200 text-black px-6 py-2 rounded-md mb-6 hover:bg-blue-300 transition"
        >
          Live Site
        </a>
      )}

      <div className="font-quicksand prose max-w-none">{children}</div>
    </div>
  );
}

