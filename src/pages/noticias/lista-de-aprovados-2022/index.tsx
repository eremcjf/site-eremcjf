import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";
import style from "./index.module.scss";
import banner from "../../../Assets/Images/noticias-banner.png";

import Image from "next/image";

import aluno01 from "../../../Assets/Images/aprovados-2022/aluno01.jpeg";
import aluno02 from "../../../Assets/Images/aprovados-2022/aluno02.jpeg";
import aluno03 from "../../../Assets/Images/aprovados-2022/aluno03.jpeg";
import aluno04 from "../../../Assets/Images/aprovados-2022/aluno04.jpeg";
import aluno05 from "../../../Assets/Images/aprovados-2022/aluno05.jpeg";
import aluno06 from "../../../Assets/Images/aprovados-2022/aluno06.jpeg";
import aluno07 from "../../../Assets/Images/aprovados-2022/aluno07.jpeg";
import aluno08 from "../../../Assets/Images/aprovados-2022/aluno08.jpeg";

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
            <h2>Aprovados para ingresso em universidade 2022</h2>
            <p className={style.textData}>Data: 23/02/2022</p>
            <br />
            <div className={style.noticiaText}>
              <p>
                Após o anúncio dos resultados do processo de seleção para
                ingresso na universidade, a EREM CJF tem o prazer em dizer que
                seus alunos conseguiram alcançar suas metas e entrar na tão
                sonhada universidade.
              </p>
              <p>Abaixo está a lista de alunos que foram aprovados:</p>
              <div className={style.imageContent}>
                <div className={style.noticiaImg}>
                  <Image src={aluno01} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno02} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno03} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno04} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno05} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno06} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno07} alt="" />
                </div>

                <div className={style.noticiaImg}>
                  <Image src={aluno08} alt="" />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
