import { useEffect } from "react";
import style from "./index.module.scss";
import n02image from "../../Assets/Images/noticia02image.jpeg";
import image01 from "../../Assets/Images/image01.jpeg";
import image02 from "../../Assets/Images/image02.jpeg";
import image03 from "../../Assets/Images/image03.jpeg";
import Image from "next/image";

export default function HomeCarrossel() {
  useEffect(() => {
    const imgs = document.getElementById("imgs") as HTMLDivElement;

    let idx = 0;

    function atualizarCarrossel() {
      idx++;

      if (idx > 4 - 1) {
        idx = 0;
      }

      imgs.style.transform = `translateX(${-idx * 1000}px)`;

      if (matchMedia("(max-width: 500px)").matches) {
        imgs.style.transform = `translateX(${-idx * 350}px)`;
      }
    }

    setInterval(atualizarCarrossel, 3000);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerImg} id="imgs">
        <span>
          <Image layout="responsive" src={n02image} alt="" />
        </span>
        <span>
          <Image layout="responsive" src={image01} alt="" />
        </span>
        <span>
          <Image layout="responsive" src={image02} alt="" />
        </span>
        <span>
          <Image layout="responsive" src={image03} alt="" />
        </span>
      </div>
    </div>
  );
}
