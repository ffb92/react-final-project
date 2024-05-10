import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Divider } from "@nextui-org/divider";

const Footer = () => {
  return (
    <footer className="mt-auto backdrop-blur-sm bg-red-500 text-white py-4">
      {/* Mobile */}
      <div className="sm:hidden container mx-auto px-4">
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
        <Divider className="my-4" />
        <div className="text-center mb-4">
          <p>&copy; KG Dürscheder Mellsäck e.V. von 1975</p>
        </div>
      </div>

      <div className="container hidden sm:flex justify-center mx-auto px-4">
        <div className="max-w-md">
          <div className="flex h-5 items-center space-x-4 text-small">
            <div>
              {" "}
              <Link to="/imprint" className="m-5 hover:text-gray-300">
                Impressum
              </Link>
            </div>
            <Divider orientation="vertical" />
            <div>
              {" "}
              <Link to="/data-privacy" className="m-5 hover:text-gray-300">
                Datenschutz
              </Link>
            </div>
            <Divider orientation="vertical" />
            <div>
              {" "}
              <a href="https://www.facebook.com">
                <AiOutlineFacebook size={32} className="hover:text-gray-300" />
              </a>
            </div>
            <Divider orientation="vertical" />
            <div>
              {" "}
              <a href="https://instagram.com">
                <AiOutlineInstagram size={32} className="hover:text-gray-300" />
              </a>
            </div>
            <Divider orientation="vertical" />
            <div>
              {" "}
              <a href="https://youtube.com">
                <AiOutlineYoutube size={32} className="hover:text-gray-300" />
              </a>
            </div>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1">
            <h4 className="text-medium font-medium">
              <p>&copy; KG Dürscheder Mellsäck e.V. von 1975</p>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
