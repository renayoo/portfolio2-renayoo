import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ArticleLayout({ title, image, liveLink, githubLink, readmeLink, children }) {
  const location = useLocation();
  const shareUrl = window.location.origin + location.pathname;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Link
        to="/projects"
        className="font-savate inline-block mb-6 bg-blue-200 text-black font-semibold px-4 py-2 rounded hover:bg-blue-300 transition"
      >
        Back to projects
      </Link>

      <div className="flex justify-between items-center mb-4">
        <h1 className="font-savate text-3xl font-bold">{title}</h1>
        <button
          onClick={copyToClipboard}
          className="font-savate font-bold text-sm bg-blue-200 px-3 py-3 rounded hover:bg-blue-300 transition"
          title="Copy link to this article"
        >
          🔗 Copy link
        </button>
      </div>

      {image && (
        <figure className="mb-6">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg object-cover shadow"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Main screenshot of the project
          </figcaption>
        </figure>
      )}

      {(liveLink || githubLink || readmeLink) && (
        <div className="flex flex-wrap gap-4 mb-6">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="font-quicksand inline-block bg-blue-200 text-black px-6 py-2 rounded-md hover:bg-blue-300 transition"
            >
              Live Site
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="font-quicksand inline-block bg-pink-200 text-black px-6 py-2 rounded-md hover:bg-pink-300 transition"
            >
              GitHub Code
            </a>
          )}
          {readmeLink && (
            <a
              href={readmeLink}
              target="_blank"
              rel="noreferrer"
              className="font-quicksand inline-block bg-yellow-100 text-black px-6 py-2 rounded-md hover:bg-yellow-200 transition"
            >
              README.md
            </a>
          )}
        </div>
      )}

      <div className="font-quicksand prose max-w-none">{children}</div>
    </div>
  );
}

