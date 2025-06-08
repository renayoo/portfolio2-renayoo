import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-navbar shadow-md py-5 px-6 flex justify-between items-center">
      <a href="/">
        <img
          src="/faviconLogo/faviconrecy.jpg"
          alt="Renayoo logo"
          className="h-15 w-auto"
        />
      </a>
      <ul className="font-savate text-black text-2xl font-bold flex gap-4 ">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
