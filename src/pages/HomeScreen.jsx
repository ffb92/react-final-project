import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineNotification } from "react-icons/ai";

const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg/1280px-Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg",
  },
  // {url: "https://www.koeln.de/wp-content/uploads/2023/04/karneval-rote-funken-1197-2000-1210x712.jpg.webp"}
];

const HomeScreen = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleConfettiAndNavigate = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/events");
    }, 1000);
  };

  return (
    <>
      <div className="relative">
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            width="100%"
            className="flex justify-center w-full"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Button
            disableRipple
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
            onClick={handleConfettiAndNavigate}
          >
            Aktuelle Veranstaltungen
          </Button>

          {showConfetti && <Fireworks autorun={{ speed: 1 }} />}
        </div>
      </div>
      <Divider className="my-4" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto text-xl">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <AiOutlineNotification />
            </div>
          </a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Willkomen bei der Dürscheder Mellsäck KG
          </h2>
          <p className="text-base text-white md:text-lg sm:px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            doloremque provident maxime fugit modi sequi cumque perspiciatis
            quam quisquam fugiat.
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
      <Divider className="my-4" />
      {/* New Hero Section */}
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://koelnerkarneval.de/fileadmin/_processed_/6/3/csm_cob_20170211_TV-Sitzung_74_57dd327245.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Kumm loss mer fiere!
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Damensitzung 2025
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Aufgrund der hohen Kartennachfrage haben wir es geschafft für 2025
              eine zweite Damensitzung auf die Beine zu stellen Damensitzung 29.
              Januar 2025 Mittwoch, 29.01.25 um 14 Uhr (Einlass 12:45 Uhr)
            </p>
            <div className="flex items-center">
              <Button
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Eintrittskarten?
              </Button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Mehr Infos
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto text-xl">
          <a href="/" className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <AiOutlineNotification />
            </div>
          </a>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
              Neuer Content
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Neuer Content
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius
              dolorum sapiente labore quod magni, deleniti libero autem commodi
              obcaecati.
            </p>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://rote-funken.de/wp-content/uploads/2020/03/EXPORT_-20200126_Herrensitzung-0612.jpg"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Kumm loss mer Fiere!
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Herrensitzung 2025
            </h5>
            <p className="mb-5 text-gray-800">
              Aufgrund der hohen Kartennachfrage haben wir es geschafft für 2025
              eine zweite Damensitzung auf die Beine zu stellen Damensitzung 29.
              Januar 2025 Mittwoch, 29.01.25 um 14 Uhr (Einlass 12:45 Uhr)
            </p>
            <div className="flex items-center">
              <Button
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Eintrittskarten?
              </Button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Mehr Infos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
