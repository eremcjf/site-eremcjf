import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";
import style from "./index.module.scss";
import banner from "../../../Assets/Images/noticias-banner.png";

import Image from "next/image";

import imageNoticia from "../../../Assets/Images/noticia02image.jpeg";
import Link from "next/link";

export default function n01() {
  return (
    <>
      <Header />

      <div className={style.container}>
        <Image className={style.banner} src={banner} alt="" />
        <div id="contNoticias" className={style.containerNoticias}>
          <div className={style.textContent}>
            <div>
              <Link href="/noticias">
                <p className={style.textParagrafo}>
                  &crarr; Voltar a página de noticias
                </p>
              </Link>
            </div>
            <h2>Volta as aulas na EREM CJF</h2>
            <p className={style.textData}>Data: 07/02/2022</p>
            <div className={style.noticiaImg}>
              <Image src={imageNoticia} alt="" />
            </div>
            <br />
            <div className={style.noticiaText}>
              <p>
                Após a acolhida dos primeiros e segundos anos, na manhã de hoje,
                dia 07/02/2022, veio a vez dos terceiros anos.
              </p>
              <p>
                Com isso, foi concluído toda acolhida prevista para o inicio do
                ano letivo, com algumas mudanças no ensino médio, a escola se
                prepara para um ano cheio de possibilidades e novidades.
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
