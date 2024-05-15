import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
Link;

const EventsScreen = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main>
      <section className="relative flex flex-col-reverse py-16 lg:pt-0 mt-5 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:absolute xl:px-0">
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
          <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
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
                <Link to="/tickets">Eintrittskarten?</Link>
              </Button>
              <Button
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 bg-red-400/75"
                onPress={onOpen}
              >
                Mehr Infos
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Modal Title
                      </ModalHeader>
                      <ModalBody>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Magna exercitation reprehenderit magna aute tempor
                          cupidatat consequat elit dolor adipisicing. Mollit
                          dolor eiusmod sunt ex incididunt cillum quis. Velit
                          duis sit officia eiusmod Lorem aliqua enim laboris do
                          dolor eiusmod. Et mollit incididunt nisi consectetur
                          esse laborum eiusmod pariatur proident Lorem eiusmod
                          et. Culpa deserunt nostrud ad veniam.
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
      <Divider className="my-4" />
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
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
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
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
              <Button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                <Link to="/tickets">Eintrittskarten?</Link>
              </Button>
              <Button
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 bg-red-400/75"
                onPress={onOpen}
              >
                Mehr Infos
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Modal Title
                      </ModalHeader>
                      <ModalBody>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Magna exercitation reprehenderit magna aute tempor
                          cupidatat consequat elit dolor adipisicing. Mollit
                          dolor eiusmod sunt ex incididunt cillum quis. Velit
                          duis sit officia eiusmod Lorem aliqua enim laboris do
                          dolor eiusmod. Et mollit incididunt nisi consectetur
                          esse laborum eiusmod pariatur proident Lorem eiusmod
                          et. Culpa deserunt nostrud ad veniam.
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
    </main>
  );
};

export default EventsScreen;
