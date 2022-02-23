import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";
import style from "./index.module.scss";
import banner from "../../../Assets/Images/noticias-banner.png";

import Image from "next/image";
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
            <h2>Início do ano letivo de 2022</h2>
            <p className={style.textData}>Data: 24/01/2022</p>
            <div className={style.noticiaImg}></div>
            <br />
            <div className={style.noticiaText}>
              <p>
                O ano de 2022 chegou e com isso o início do ano letivo na EREM
                Coronel João Francisco também, toda escola está se organizando
                para receber seus novos estudantes e todos os outros que estão
                indo para o 2º e 3º ano do ensino médio. Segue abaixo o
                cronograma do retorno.
              </p>
              <p>
                Dia 03/02/2022 acolhida dos primeiros anos, dia 04/02/2022
                acolhida dos segundos anos e dia 07/02/2022 acolhida dos
                terceiros anos.
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
