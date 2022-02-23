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
            <h2>Inscrição programa de monitoria 2022</h2>
            <p className={style.textData}>Data: 23/02/2022</p>
            <br />
            <div className={style.noticiaText}>
              <p>
                Para os alunos que desejam participar da monitoria em 2022,
                segue o link do formulário de inscrição que deve ser preenchido{" "}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmknnvYNKGzTzqT0-YIAZdFA8buMJMmUr2oM3a1GwG280dCA/viewform">
                  Formulário
                </a>
                .
              </p>
              <p>
                Segue o link do edital para o processo de inscrição:{" "}
                <a href="https://docs.google.com/document/d/1Ei1A6TLi0I1akQu06ZO5Kz6Mr36iVsN7/edit?usp=sharing&ouid=116906742867612066291&rtpof=true&sd=true">
                  EDITAL DE SELEÇÃO DE MONITORIA{" "}
                </a>
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
