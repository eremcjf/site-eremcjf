import Image from "next/image";
import logo from "../Assets/Images/logoerem-azul.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/" passHref>
        <div className="headImg">
          <span className="img">
            <Image src={logo} alt="logo" />
          </span>
        </div>
      </Link>

      <ul>
        <Link href="/" passHref>
          <li id="home" className="menu-list">
            Início
          </li>
        </Link>
        <Link href="/noticias" passHref>
          <li className="menu-list">Noticias</li>
        </Link>
        <Link href="/disciplinas" passHref>
          <li className="menu-list">Disciplinas</li>
        </Link>
        <Link href="/avaliacoes" passHref>
          <li className="menu-list">Avaliações</li>
        </Link>
        <Link href="/eventos" passHref>
          <li className="menu-list">Eventos</li>
        </Link>
        <Link href="/sobre" passHref>
          <li className="menu-list">Sobre</li>
        </Link>
      </ul>
    </div>
  );
}
