import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
} from "@nextui-org/react";

const HistoryScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card className="w-2/3">
        <CardBody className="text-center">
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Geschichte
          </h2>
          <p>
            Die Geschichte der Dürscheder Mellsäck KG ist geprägt von Tradition,
            Gemeinschaft und einem unerschütterlichen Geist des Karnevals. Von
            den bescheidenen Anfängen bis zu unserer heutigen Präsenz in der
            lokalen Karnevalsszene haben wir eine faszinierende Reise hinter
            uns. Erfahre mehr über die Gründer und Pioniere, die den Grundstein
            für unsere Gemeinschaft gelegt haben, und entdecke die Meilensteine,
            die unseren Weg geprägt haben. Begleite uns auf einer Zeitreise
            durch die Jahrzehnte voller unvergesslicher Momente, und lass dich
            inspirieren von der Geschichte einer Gemeinschaft, die fest in den
            Werten des Karnevals verwurzelt ist.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default HistoryScreen;
