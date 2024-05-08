import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-auto backdrop-blur-sm bg-red-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-around space-x-4">
          <div>
            <Link to="/imprint" className="m-5 hover:text-gray-300">
              Impressum
            </Link>
            <Link to="/data-privacy" className="m-5 hover:text-gray-300">
              Datenschutz
            </Link>
          </div>
          <div className="flex">
            <a href="https://www.facebook.com">
              <AiOutlineFacebook size={32} className="hover:text-gray-300" />
            </a>
            <a href="https://instagram.com">
              <AiOutlineInstagram size={32} className="hover:text-gray-300" />
            </a>
            <a href="https://youtube.com">
              <AiOutlineYoutube size={32} className="hover:text-gray-300" />
            </a>
          </div>
        </div>
        <div className="m-5 border-t-2 opacity-50 "></div>
        <div className="text-center mb-4">
          <p>&copy; KG Dürscheder Mellsäck e.V. von 1975</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
