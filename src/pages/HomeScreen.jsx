import { Button } from "@nextui-org/react";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://ga.de/imgs/93/1/4/7/1/0/9/1/6/7/tok_02695c1add9be688fbee0d1021df8e9c/w1900_h1266_x1500_y1000_DPA_bfunk_dpa_5FA6D60029A7058E-4036e305ae687b9f.jpg",
  },
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
      <div className="relative flex justify-center">
        <div>
          <SimpleImageSlider
            width={1000}
            height={504}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={false}
            autoPlayDelay={2.0}
          />
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
    </>
  );
};

export default HomeScreen;
