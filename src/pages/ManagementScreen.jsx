import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    "key": "1",
    "name": "Julia Müller",
    "role": "Präsidentin",
    "status": "Active",
    "email": "julia.mueller@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "2",
    "name": "Max Schmidt",
    "role": "Schatzmeister",
    "status": "Active",
    "email": "max.schmidt@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "3",
    "name": "Laura Wagner",
    "role": "Eventkoordinatorin",
    "status": "Active",
    "email": "laura.wagner@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "4",
    "name": "Jonas Becker",
    "role": "Social-Media-Manager",
    "status": "Active",
    "email": "jonas.becker@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "5",
    "name": "Anna Keller",
    "role": "Kostümdesignerin",
    "status": "Active",
    "email": "anna.keller@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "6",
    "name": "Stefan Richter",
    "role": "Bühnenregisseur",
    "status": "Active",
    "email": "stefan.richter@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "7",
    "name": "Lisa Schulz",
    "role": "PR-Beauftragte",
    "status": "Active",
    "email": "lisa.schulz@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "8",
    "name": "Markus Hoffmann",
    "role": "Sicherheitsbeauftragter",
    "status": "Active",
    "email": "markus.hoffmann@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "9",
    "name": "Sarah Lehmann",
    "role": "Eventplanerin",
    "status": "Active",
    "email": "sarah.lehmann@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "10",
    "name": "Tobias Bauer",
    "role": "Musikdirektor",
    "status": "Active",
    "email": "tobias.bauer@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "11",
    "name": "Katharina Friedrich",
    "role": "Jugendbetreuerin",
    "status": "Active",
    "email": "katharina.friedrich@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "12",
    "name": "Michaela Wolf",
    "role": "Künstlerische Leitung",
    "status": "Active",
    "email": "michaela.wolf@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "13",
    "name": "Patrick Schulze",
    "role": "Technikexperte",
    "status": "Active",
    "email": "patrick.schulze@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "14",
    "name": "Vanessa Meier",
    "role": "Dekorationsbeauftragte",
    "status": "Active",
    "email": "vanessa.meier@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "15",
    "name": "Christian Becker",
    "role": "Webmaster",
    "status": "Active",
    "email": "christian.becker@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "16",
    "name": "Julia Hofmann",
    "role": "Fundraising-Managerin",
    "status": "Active",
    "email": "julia.hofmann@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "17",
    "name": "Daniel Schulz",
    "role": "Logistikkoordinator",
    "status": "Active",
    "email": "daniel.schulz@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "18",
    "name": "Sophia Wagner",
    "role": "Tanztrainerin",
    "status": "Active",
    "email": "sophia.wagner@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "19",
    "name": "Felix Müller",
    "role": "Sprecher der Narrenzunft",
    "status": "Active",
    "email": "felix.mueller@dürscheder-mellsäck-kg.de"
  },
  {
    "key": "20",
    "name": "Laura Fischer",
    "role": "Cateringleiterin",
    "status": "Active",
    "email": "laura.fischer@dürscheder-mellsäck-kg.de"
  }
]


const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "Tätigkeit",
  },
  {
    key: "email",
    label: "E-MAIL",
  },
];

const ManagementScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card className="w-2/3">
        <CardBody className="text-center">
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
           Vorstand
          </h2>
          <Table aria-label="Example table with dynamic content" isStriped>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(row, columnKey)}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManagementScreen;
