// import { Link } from "react-router-dom"; // Importieren Sie Link

// const Footer = () => {
//   return (
//     <footer className="mt-auto bg-gray-800 text-white py-4" >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center space-x-4">
//           <Link to="/imprint" className="hover:text-gray-300">
//             Impressum
//           </Link>
//           <Link to="/data-privacy" className="hover:text-gray-300">
//             Datenschutz
//           </Link>
//         </div>
//         <div className="m-5 border-t-2 opacity-50 "></div>
//         <div className="text-center mb-4">
//           <p>&copy; 2024 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  AtSignIcon,
  EarthIcon,
  FacebookIcon,
  HeadsetIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'X',
    link: '/',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: '/',
    icon: <FacebookIcon />,
  },
  {
    name: 'Website',
    link: '/',
    icon: <EarthIcon />,
  },
]

const description =
  'SkillSpot offers a range of free and paid online and offline courses in UAE, including topics like App Making, Data Skills, Photography, Money Management, and more. Improve your skills now!'

const Footer = () => {
  return (
    <footer className="relative bg-[#191F33] z-50">
      <div className="px-4 py-12 flex flex-col items-center">
        {/* app logo */}
        <div>
          <a href="/" className="flex justify-center items-center gap-5 mb-8 text-white">
            <img
              src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
              className="h-8"
              alt="Logo"
            />
            <span className="font-semibold text-3xl tracking-wider">SkillSpot</span>
          </a>
          <p className="text-white max-w-xl text-center font-medium text-lg">{description}</p>
        </div>

        {/* social links */}
        <div className="mt-8">
          <span className="text-[#767E94] block text-center mb-6 font-medium text-lg">
            Follow Us
          </span>
          <ul className="flex gap-6 items-center">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-white hover:text-[#767e94]"
                  target="_blank">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>

        {/* email */}
        <div className="text-white mt-6 mb-2 flex gap-2 items-center">
          <AtSignIcon size={16} />
          <span className="text-lg font-medium">info@email.com</span>
        </div>

        {/* call to action */}
        <div className="mt-8">
          <button
            type="button"
            className="py-2.5 px-5 text-base font-semibold bg-gray-800 text-sky-100 rounded-lg hover:bg-gray-100 hover:text-sky-600 flex gap-2 items-center transition duration-300 ease-in-out">
            <HeadsetIcon size={20} />
            <span>Book A Demo</span>
          </button>
        </div>
      </div>

      {/* about author or app/copyrights */}
      <div className="bg-[#2E3447]">
        <div className="text-center px-3 py-3">
          <span className="text-[#767E94]">
            Coded with 💙 by{' '}
            <a
              href="https://www.linkedin.com/in/abdulbasitprofile/"
              target="_blank"
              className="text-white">
              Abdul Basit{' '}
            </a>
            in Karachi
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer