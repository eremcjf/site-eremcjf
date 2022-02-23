import style from "./index.module.scss";
import banner from "../../Assets/Images/sobre-banner.png";
import email from "../../Assets/Images/bxl-gmail.svg";
import instagram from "../../Assets/Images/bxl-instagram.svg";
import whatsapp from "../../Assets/Images/bxl-whatsapp.svg";
import Image from "next/image";

export default function SobreContainer() {
  return (
    <div className={style.container}>
      <Image className={style.banner} src={banner} alt="" />
      <div className={style.containerSobre}>
        <h1 className={style.title}>Entre em contato conosco!</h1>
        <div className={style.containerContact}>
          <div>
            <Image width={40} height={40} src={email} alt="Email" />
            <strong>
              <h2>E-mail</h2>
            </strong>
            Você tem alguma dúvida? <br />
            <strong>
              <a
                target="_blank"
                href="mailto:escolajfrancisco@gmail.com"
                rel="noreferrer"
              >
                escolajfrancisco@gmail.com
              </a>
            </strong>
          </div>
          <div>
            <Image width={40} height={40} src={whatsapp} alt="Whats" />
            <strong>
              <h2>WhatsApp</h2>
            </strong>
            Precisa de ajuda com a compra? <br />
            <strong>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=5581984944383"
                rel="noreferrer"
              >
                (81) 98494-4383
              </a>
            </strong>
          </div>
          <div>
            <Image width={40} height={40} src={instagram} alt="Insta" />
            <strong>
              <h2>Instagram</h2>
            </strong>
            Acesse nosso Instagram! <br />
            <strong>
              <a
                target="_blank"
                href="https://www.instagram.com/eremcjf/"
                rel="noreferrer"
              >
                @eremcjf
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
