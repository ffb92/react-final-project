import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
} from "@nextui-org/react";

const DataPrivacyScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card>
        <CardBody className="text-center">
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Datenschutz
          </h2>
          <p>
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz
            Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren
            wir Sie ausführlich über den Umgang mit Ihren Daten.
          </p>

          <h2>Datenerhebung und -verwendung</h2>

          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>

          <h2>Cookies</h2>

          <p>Unsere Website verwendet keine Cookies.</p>

          <h2>Google Analytics</h2>

          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies",
            Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
            den Cookie erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert. Im Falle der Aktivierung der
            IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von
            Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union
            oder in anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
            IP-Adresse an einen Server von Google in den USA übertragen und dort
            gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten zusammenzustellen und um weitere
            mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im
            Rahmen von Google Analytics von Ihrem Browser übermittelte
            IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich werden nutzen können. Sie
            können darüber hinaus die Erfassung der durch das Cookie erzeugten
            und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem Sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren:{" "}
            <a href="http://tools.google.com/dlpage/gaoptout?hl=de">
              http://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            .
          </p>

          <h2>Auskunftsrecht</h2>

          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default DataPrivacyScreen;
