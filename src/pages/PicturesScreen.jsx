import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import pic_1 from "../assets/bild_1.jpg";
import pic_2 from "../assets/bild_2.jpeg";
import pic_3 from "../assets/bild_3.jpeg";
import pic_4 from "../assets/bild_4.jpg";
import pic_5 from "../assets/bild_5.jpg";
import pic_6 from "../assets/bild_6.jpg";
import { useState } from "react";

const picturesInfo = [
  { src: pic_1, header: "Bild 1", footer: "Fußtext 1", id: 1 },
  { src: pic_2, header: "Bild 2", footer: "Fußtext 2", id: 2 },
  { src: pic_3, header: "Bild 3", footer: "Fußtext 3", id: 3 },
  { src: pic_4, header: "Bild 4", footer: "Fußtext 4", id: 4 },
  { src: pic_5, header: "Bild 5", footer: "Fußtext 5", id: 5 },
  { src: pic_6, header: "Bild 6", footer: "Fußtext 6", id: 6 },
];

const PicturesScreen = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPictureId, setCurrentPictureId] = useState(null);

  const openModal = (id) => {
    setCurrentPictureId(id);
    onOpen();
  };

  const closeModal = () => {
    onOpenChange(false);
  };

  return (
    <div className="flex justify-center items-center h-full sm:h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <div className=" py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6">
        {picturesInfo.map((info, index) => (
          <Card key={index}>
            <CardHeader className="flex justify-center gap-3">
              {info.header}
            </CardHeader>
            <Divider />
            <CardBody>
              <Image
                src={info.src}
                onClick={() => openModal(info.id)}
                isZoomed
                className="cursor-pointer"
              ></Image>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center">
              {info.footer}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {picturesInfo.find((pic) => pic.id === currentPictureId)?.header ||
              "No Picture Selected"}
          </ModalHeader>
          <ModalBody>
            <Image
              src={
                picturesInfo.find((pic) => pic.id === currentPictureId)?.src ||
                ""
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PicturesScreen;
