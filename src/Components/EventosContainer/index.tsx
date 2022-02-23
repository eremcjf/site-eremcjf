import Image from "next/image";
import style from "./index.module.scss";
import banner from "../../Assets/Images/eventos-banner.png";

export default function EventosContainer() {
  return (
    <div className={style.container}>
      <Image className={style.banner} src={banner} alt="" />

      <div className={style.aviso}>
        <h2>Mais atualizações sobre eventos serão adicionadas em breve!</h2>
      </div>
    </div>
  );
}
