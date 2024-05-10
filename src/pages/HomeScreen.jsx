import { Button } from "@nextui-org/react";
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
      <div></div>
    </>
  );
};

export default HomeScreen;
