import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  // useState für die Anzeige des Burgermenu
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Desktop
    <nav className="flex justify-between items-center h-10 max-w-[1240px] mx-auto px-4">
      <ul className="hidden mobile:flex space-x-4">
        <li className="text-slate-200">
          <NavLink to="/">Startseite</NavLink>
        </li>
        <li className="text-slate-200">
          <NavLink to="/about-us">Über uns</NavLink>
        </li>
        <li className="text-slate-200">
          <NavLink to="/events">Veranstaltungen</NavLink>
        </li>
        <li className="text-slate-200">
          <NavLink to="/tickets">Eintrittskarten</NavLink>
        </li>
        <li className="text-slate-200">
          <NavLink to="/pictures">Fotos</NavLink>
        </li>

        <li className="text-slate-200">
          <button className="bg-slate-200 hover:bg-red-600 text-red-600 font-semibold hover:text-white px-4 border rounded">
            <NavLink to="/contact">Kontakt</NavLink>
          </button>
        </li>
      </ul>
      {/* Burgermenuicon */}
      <div onClick={handleNav} className="block mobile:hidden">
        {!nav ? (
          <AiOutlineClose className="fixed right-5 top-4 text-slate-200" />
        ) : (
          <AiOutlineMenu className="fixed right-5 top-4 text-slate-200" />
        )}
      </div>
      {/* Mobile */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] bg-red-600 text-slate-200 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-3 border-b">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-3 border-b">
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li className="p-3">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
