import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
} from "@nextui-org/react";

const StatutesScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card>
        <CardBody className="text-center">
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Satzung
          </h2>
          <h2>§1 Name und Sitz des Vereins</h2>
          <p>
            1. Der Verein führt den Namen "Dürscheder Mellsäck
            Karnevalsgemeinschaft" (im Folgenden "DMKG" genannt).
          </p>
          <p>2. Der Verein hat seinen Sitz in Dürsched, Deutschland.</p>

          <h2>§2 Zweck und Aufgaben</h2>
          <p>
            1. Die DMKG verfolgt ausschließlich und unmittelbar gemeinnützige
            Zwecke im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der
            Abgabenordnung.
          </p>
          <p>
            2. Der Zweck des Vereins ist die Pflege und Förderung des
            Brauchtums, insbesondere des Karnevals, sowie die Förderung der
            Kultur und des Gemeinschaftssinns.
          </p>
          <p>
            3. Die DMKG organisiert und veranstaltet karnevalistische
            Veranstaltungen, Umzüge, Sitzungen und weitere kulturelle
            Aktivitäten zur Unterhaltung der Mitglieder und der Öffentlichkeit.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatutesScreen;
