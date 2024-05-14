import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
} from "@nextui-org/react";

const DancingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card>
        <CardBody className="text-center">
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Tanzkorps
          </h2>
          <p>
            Tauche ein in die Welt des Tanzkorps der Dürscheder Mellsäck KG, wo
            Anmut, Rhythmus und pure Lebensfreude aufeinandertreffen. Unsere
            talentierten Tänzerinnen und Tänzer begeistern mit mitreißenden
            Choreographien, eleganten Bewegungen und einer Energie, die das
            Publikum zum Mitfeiern einlädt. Erfahre mehr über die Geschichte und
            die Leidenschaft hinter unserem Tanzkorps, das Jahr für Jahr auf der
            Bühne des Karnevals für unvergessliche Momente sorgt.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default DancingScreen;
