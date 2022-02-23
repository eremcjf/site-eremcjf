/* eslint-disable @typescript-eslint/no-explicit-any */
import banner from "../../Assets/Images/noticias-banner.png";
import style from "./index.module.scss";
import NoticiaNovaComImagem from "../NoticiaNovaComImagem/index";

import imagn01 from "../../Assets/Images/noticia-01.png";
import imagn02 from "../../Assets/Images/noticia-02.png";
import imagn03 from "../../Assets/Images/noticia-03.png";
import imagn04 from "../../Assets/Images/noticia-04.png";

import Image from "next/image";

export default function NoticiasContainer() {
  return (
    <div className={style.container}>
      <Image className={style.banner} src={banner} alt="" />
      <div id="contNoticias" className={style.containerNoticias}>
        <NoticiaNovaComImagem
          url="/noticias/inscricao-programa-monitoria"
          titulo="Inscrição programa de monitoria"
          descrição="Faça aqui sua inscrição para o programa de monitoria PE 2022"
          imag={imagn04}
          data="23/02/2022"
        />
        <NoticiaNovaComImagem
          url="/noticias/lista-de-aprovados-2022"
          titulo="Aprovados para ingresso em 2022"
          descrição="Resultado de programas de ingresso em universidades, temos a lista de alunos que foram aprovados."
          imag={imagn03}
          data="23/02/2022"
        />
        <NoticiaNovaComImagem
          url="/noticias/volta-as-aulas-na-erem-cjf"
          titulo="Volta as aulas na EREM CJF"
          descrição="Após as férias de 2021 para 2022, hoje termina a acolhida de todos alunos e temos o retorno as aulas."
          imag={imagn02}
          data="07/02/2022"
        />
        <NoticiaNovaComImagem
          url="/noticias/inicio-do-ano-letivo-de-2022"
          titulo="Início do ano letivo de 2022"
          descrição="Retorno as aulas para o ano letivo de 2022, mais detalhes sobre como ocorrerá e quando ocorrerá."
          imag={imagn01}
          data="24/01/2022"
        />
        <div className={style.pages}>
          <span>&lArr;</span> 1/1 <span>&rArr;</span>
        </div>
      </div>
    </div>
  );
}
