import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "/logo.png";

const Navbar = () => {
  // useState für die Anzeige des Burgermenu
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Desktop

    <nav className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 border-2 border-red-700">
      <ul className="hidden mobile:flex space-x-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* Burgermenuicon */}
      <div onClick={handleNav} className="block mobile:hidden">
        {!nav ? (
          <AiOutlineClose className="fixed right-5 top-9" />
        ) : (
          <AiOutlineMenu className="fixed right-5 top-9" />
        )}
      </div>
      {/* Mobile */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-2 border-red-700 bg-gray-50 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 border-b">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-4 border-b">
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
