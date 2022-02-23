import Image from "next/image";
import { useState } from "react";
import style from "./index.module.scss";
import banner from "../../Assets/Images/disciplinas-banner.png";

export default function DisciplinasContainer() {
  const [renderiza, setRenderiza] = useState(false);

  function reset() {
    setRenderiza(false);
  }

  function portugues() {
    setRenderiza(true);
  }

  function matematica() {
    setRenderiza(true);
  }

  function historia() {
    setRenderiza(true);
  }

  function biologia() {
    setRenderiza(true);
  }

  function geografia() {
    setRenderiza(true);
  }

  function filosofia() {
    setRenderiza(true);
  }

  function fisica() {
    setRenderiza(true);
  }

  function direitos() {
    setRenderiza(true);
  }

  function edFisica() {
    setRenderiza(true);
  }

  function sociologia() {
    setRenderiza(true);
  }

  return (
    <div className={style.container}>
      <Image className={style.banner} src={banner} alt="" />

      <>
        {renderiza == false ? (
          <div className={style.discContainer}>
            <div onClick={portugues} className={style.bxDisc}>
              <h3>Português</h3>
            </div>
            <div onClick={matematica} className={style.bxDisc}>
              <h3>Matemática</h3>
            </div>
            <div onClick={historia} className={style.bxDisc}>
              <h3>História</h3>
            </div>
            <div onClick={biologia} className={style.bxDisc}>
              <h3>Biologia</h3>
            </div>
            <div onClick={geografia} className={style.bxDisc}>
              <h3>Geografia</h3>
            </div>
            <div onClick={filosofia} className={style.bxDisc}>
              <h3>Filosofia</h3>
            </div>
            <div onClick={fisica} className={style.bxDisc}>
              <h3>Física</h3>
            </div>
            <div onClick={direitos} className={style.bxDisc}>
              <h3>Direitos H.</h3>
            </div>
            <div onClick={edFisica} className={style.bxDisc}>
              <h3>Ed. Física</h3>
            </div>
            <div onClick={sociologia} className={style.bxDisc}>
              <h3>Sociologia</h3>
            </div>
          </div>
        ) : (
          <div className={style.especContainer}>
            <span onClick={reset}>&crarr; Voltar a página de noticias</span>
            <br />
            <br />
            <div>
              <p>Esta seção terá atualizações em breve</p>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
