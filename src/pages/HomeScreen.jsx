import {
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineNotification, AiOutlineUsergroupAdd } from "react-icons/ai";
import websiteImage from "../assets/website.png";
import historyImage from "../assets/history.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pic_3 from "../assets/pic_3.jpeg";
import pic_4 from "../assets/pic_4.jpg";
import pic_5 from "../assets/pic_5.jpg";

const images = [
  {
    url: pic_3,
  },
  // {
  //   url: pic_4,
  // },
  // { url: pic_5 },
];

const HomeScreen = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const modal1 = useDisclosure();

  const handleConfettiAndNavigate = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/events");
    }, 1000);
  };

  return (
    <main>
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
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <section className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto text-xl">
            <Link
              to="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <AiOutlineNotification />
              </div>
            </Link>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Willkomen bei der Dürscheder Mellsäck KG
            </h2>
            <p className="text-base text-white md:text-lg sm:px-4">
              Dem pulsierenden Herz des Karnevals! Tauche ein in unsere Welt
              voller Narren, Musik und unvergesslicher Feierlichkeiten, wo jeder
              Tag ein Fest ist!
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </div>
        </section>
      </motion.div>

      <Divider className="my-4" />
      {/* New Hero Section */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <section className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
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
              className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              loading="lazy"
              src={websiteImage}
              alt="Website"
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                Endlich online!
              </p>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Die neue Website der KG ist da
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Ein neues Kapitel beginnt: Willkommen auf der brandneuen Website
                der Dürscheder Mellsäck KG – Erfahre alles über unsere
                traditionsreiche Gemeinschaft und die bevorstehenden
                Feierlichkeiten!
              </p>
              <div className="flex items-center">
                <Button
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  onPress={modal1.onOpen}
                >
                  Mehr Infos
                </Button>
                <Modal
                  isOpen={modal1.isOpen}
                  onOpenChange={modal1.onOpenChange}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Neue Website
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Liebe Karnevalsfreunde, wir freuen uns, euch unsere
                            brandneue Website vorstellen zu dürfen! Nach
                            intensiver Arbeit und mit viel Liebe zum Detail
                            präsentieren wir euch einen digitalen Ort, der das
                            bunte Treiben und die herzliche Atmosphäre unserer
                            Gemeinschaft widerspiegelt. Hier findet ihr alles,
                            was das Karnevalsherz begehrt - von aktuellen
                            Veranstaltungshinweisen über lustige Anekdoten bis
                            hin zu einem Rückblick auf vergangene
                            Festlichkeiten. Taucht ein in die Welt der
                            Dürscheder Mellsäck KG und lasst euch von unserem
                            Enthusiasmus mitreißen!
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Divider className="my-4" />
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28 bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto text-xl">
          <Link to="/member" className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <AiOutlineUsergroupAdd />
            </div>
          </Link>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
              Unsere Gemeinschaft
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Die Menschen hinter den Masken
            </h2>
            <p className="text-base text-gray-700 md:text-lg mb-5">
              Begegne den Gesichtern hinter den Masken – Entdecke die
              vielfältigen Persönlichkeiten und Geschichten unserer
              Karnevalsgemeinschaft!
            </p>
            <Button className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
              <Link to="/member">Mehr Infos</Link>
            </Button>
          </div>
        </div>
      </section>
      <Divider className="my-4" />
      <section className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={historyImage}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
              loading="lazy"
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
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                Kumm loss mer Fiere!
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Vom Anfang bis heute
            </h5>
            <p className="mb-5 text-gray-800">
              Ein Blick zurück in die Vergangenheit: Entdecke die spannende
              Geschichte unserer Karnevalsgemeinschaft und ihre Entwicklung im
              Laufe der Jahre.
            </p>
            <div className="flex items-center">
              <Button
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <Link to="/history">Mehr Infos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
