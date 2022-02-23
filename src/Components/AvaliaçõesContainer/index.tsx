import style from "./index.module.scss";
import Image from "next/image";
import banner from "../../Assets/Images/avaliações-banner.png";

export default function AvaliaçõesContainer() {
  return (
    <div className={style.container}>
      <Image className={style.banner} src={banner} alt="" />

      <div className={style.aviso}>
        <h2>Mais atualizações sobre avaliações serão adicionadas em breve!</h2>
      </div>
    </div>
  );
}
