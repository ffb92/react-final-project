import Navbar from "./Navbar";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex items-center  h-12 bg-red-600">
      <div className="flex h-8">
        <img src={logo} alt="logo" className="object-scale-down" />
      </div>
      <h1 className="text-slate-200 pl-10">KG Dürscheder Mellsäck</h1>
      <Navbar />
    </div>
  );
};

export default Header;
