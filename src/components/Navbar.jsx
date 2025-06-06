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
          <a
            href="/projects"
            className="transition-all duration-300 ease-out hover:scale-110 hover:font-semibold hover:text-white"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
