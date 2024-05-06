import Navbar from "./Navbar";
import logo from "/logo.png";
const Header = () => {
  return (
    <div className="flex items-center h-24 border-2 border-red-700">
      <div className="flex h-16">
        <img src={logo} alt="logo" className="object-scale-down" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
