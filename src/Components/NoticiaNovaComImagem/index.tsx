/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  titulo: string;
  url: string;
  descrição: string;
  imag: any;
  data: string;
}

export default function NoticiaNovaComImagem(props: Props) {
  return (
    <div className={style.bxNoticia}>
      <div className={style.containerImg}>
        <Image src={props.imag} alt="" />
      </div>
      <div className={style.containerText}>
        <Link href={props.url}>
          <h2>{props.titulo}</h2>
        </Link>
        <p>{props.descrição}</p>
        <p className={style.data}>Data: {props.data}</p>
      </div>
    </div>
  );
}
