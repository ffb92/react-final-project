import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useNavigate } from "react-router-dom";

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
        <Image
          className="w-full"
          alt="NextUI hero Image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg/1280px-Sitzung_des_Rates_der_Stadt_K%C3%B6ln_im_G%C3%BCrzenich%2C_Februar_2022-8738.jpg"
          isZoomed
          radius="none"
        />
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reprehenderit iusto exercitationem molestiae quo expedita est nisi
        corporis error nihil accusamus, voluptatem a quam aperiam veniam earum
        fuga delectus! Qui fuga odit molestias nostrum totam deserunt aut
        distinctio laboriosam quae voluptatem facere dignissimos quia,
        praesentium, unde vitae rerum debitis aliquid omnis a. Eveniet
        perspiciatis temporibus harum rerum magni nostrum deserunt dignissimos?
        Nemo repellat obcaecati quo eos, qui ex, aperiam iure ullam iste
        molestias dolor veritatis est rerum voluptatem aut sequi? Quibusdam
        commodi veritatis suscipit vitae assumenda quos neque expedita
        laboriosam asperiores itaque saepe nostrum, maxime mollitia incidunt
        esse magni? Ab, nemo incidunt? Ipsa provident ipsum praesentium
        cupiditate. Inventore nisi ullam fugiat est repellendus nostrum
        laboriosam labore eum sint. Officia vel ducimus, quo eveniet ad vitae
        esse porro asperiores odio, assumenda accusamus veritatis, quos dolorum
        modi aliquid? Vel odio iusto unde sed beatae cum, quia quidem amet minus
        fugit blanditiis eligendi quo eius reiciendis ad totam molestias tempora
        eum omnis maxime doloribus, veritatis ut. Adipisci minima quae facere
        unde nihil natus quo iusto consequatur, sequi laborum modi laboriosam
        sunt nesciunt eum debitis assumenda ut a rerum totam vitae ducimus
        quaerat beatae ad corrupti! Inventore recusandae rem ducimus similique
        assumenda quisquam excepturi praesentium architecto, id perspiciatis
        cumque a eos saepe exercitationem minima eligendi molestiae aliquam non
        facilis accusamus corporis, sit officiis. Excepturi provident porro
        architecto deleniti at! Doloribus eum delectus necessitatibus, esse
        expedita labore? Labore repellendus porro earum quisquam eius,
        laudantium nobis quos adipisci maxime sed eligendi dolorem hic error ab
        dolor quia, accusamus corrupti aliquam possimus temporibus. Ipsum ad
        saepe at! Nisi odit rem similique eligendi est placeat quo recusandae,
        doloremque dolorem, quos sapiente dolorum rerum molestias modi
        consequatur eaque possimus molestiae suscipit nihil quia maxime at,
        sequi velit ullam. Quas nobis distinctio iure ipsam dolore
        exercitationem corporis eos natus quae, recusandae harum odit nihil
        ullam cumque eveniet saepe labore neque accusamus! Facilis voluptates
        nobis obcaecati assumenda eligendi iste mollitia accusantium maxime
        animi nulla. Totam nemo nisi ab deleniti minima neque impedit alias
        eaque non tempora, earum molestias cumque illum, exercitationem magni
        blanditiis animi sunt eum distinctio. Rem reprehenderit perferendis
        corrupti vitae deserunt, fugiat magni culpa aliquid quo cum sapiente
        maxime repellat dolorum nesciunt architecto placeat. Nemo laudantium
        reprehenderit perferendis a necessitatibus fugit aliquid eum ratione
        voluptates? Saepe deserunt sed deleniti ratione iste fuga praesentium
        labore sapiente, necessitatibus eveniet nisi repellat quo eum fugiat, ad
        hic dignissimos voluptatem quos blanditiis iusto expedita. Voluptates,
        nostrum! In voluptas accusantium possimus ea vero ut doloribus eum quas
        mollitia culpa tenetur, laudantium saepe quasi optio. Ab, assumenda
        voluptas. Doloremque facilis veritatis corrupti sit neque, dolorem est
        quia quae eius voluptatibus dolorum nemo beatae aspernatur, ut,
        laboriosam culpa dolores fuga dolore assumenda fugiat mollitia sed
        nihil? Esse quos sint sit ab, voluptas debitis? Delectus minus ad
        incidunt labore, et cumque, rerum quibusdam fugit qui, quam ab facere
        explicabo aperiam deserunt cupiditate dolor numquam nisi architecto!
        Alias omnis rem praesentium iusto, recusandae optio sit libero molestiae
        eos porro neque fuga quod aliquid quasi sequi earum nemo, unde sed ea
        aspernatur, repellat quidem similique vero. Nobis consequuntur
        temporibus aliquid odit distinctio velit! Molestiae quibusdam magnam
        facere beatae recusandae amet possimus soluta obcaecati in ex, quo
        pariatur. Vero, pariatur! Quo quos temporibus assumenda laborum totam
        quod sapiente beatae debitis fuga atque, eius neque nostrum? Aspernatur
        reiciendis ad, blanditiis officiis accusamus velit sequi perferendis ut
        aliquam rerum deleniti sed commodi, impedit corporis. Reprehenderit
        earum a nam nihil quo rerum cum qui sint illum, modi dignissimos beatae
        unde, aliquam esse ad optio nesciunt? Delectus dignissimos earum, illum
        qui officiis, doloribus repellendus maxime quo placeat quibusdam
        consequuntur consectetur sint rem pariatur aperiam?
      </p>
    </>
  );
};

export default HomeScreen;
