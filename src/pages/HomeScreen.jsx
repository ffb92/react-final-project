import { Card, Image, Button } from "@nextui-org/react";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg/1280px-Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg",
  },
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
            width="80%"
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
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
        {/* Erster Grid-Container */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-9/12 p-5">
          <div className="row-span-5 col-span-3">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-3xl  text-gray-900">
              Damensitzung 2025
            </h2>
            <p className="mb-8 text-xs sm:text-base font-normal text-gray-500">
              Aufgrund der hohen Kartennachfrage haben wir es geschafft für 2025
              eine zweite Damensitzung auf die Beine zu stellen Damensitzung 29.
              Januar 2025 Mittwoch, 29.01.25 um 14 Uhr (Einlass 12:45 Uhr)
            </p>
            <div className="flex justify-evenly">
              <Button size="sm" className="bg-red-500 text-white">
                Mehr Infos!
              </Button>
              <Button size="sm" className="bg-red-500 text-white">
                Eintrittskarten hier!
              </Button>
            </div>
          </div>

          <div className="row-start-2 row-span-4 col-span-2">
            <Card shadow="" radius="lg" className="border-none">
              <Image
                alt="karneval picture"
                className="object-cover"
                height={700}
                src="https://koelnerkarneval.de/fileadmin/_processed_/6/3/csm_cob_20170211_TV-Sitzung_74_57dd327245.jpg"
                width={500}
              />
            </Card>
          </div>
        </div>

        {/* Zweiter Grid-Container */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-9/12 p-5">
          <div className="row-span-5 col-span-3">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-3xl  text-gray-900">
              Damensitzung 2025
            </h2>
            <p className="mb-8 text-xs sm:text-base font-normal text-gray-500">
              Aufgrund der hohen Kartennachfrage haben wir es geschafft für 2025
              eine zweite Damensitzung auf die Beine zu stellen Damensitzung 29.
              Januar 2025 Mittwoch, 29.01.25 um 14 Uhr (Einlass 12:45 Uhr)
            </p>
            <div className="flex justify-evenly">
              <Button size="sm" className="bg-red-500 text-white">
                Mehr Infos!
              </Button>
              <Button size="sm" className="bg-red-500 text-white">
                Eintrittskarten hier!
              </Button>
            </div>
          </div>

          <div className="row-start-2 row-span-4 col-span-2 col-start-4">
            <Card shadow="" radius="lg" className="border-none">
              <Image
                alt="karneval picture"
                className="object-cover"
                height={700}
                src="https://koelnerkarneval.de/fileadmin/_processed_/6/3/csm_cob_20170211_TV-Sitzung_74_57dd327245.jpg"
                width={500}
              />
            </Card>
          </div>
        </div>
      </div>
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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
