import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

//Esse componente é filho do componente Header, e recebe os hooks como props
interface navbarProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isHidden, setIsHidden }: navbarProps) {
  function handleClick() {
    //o handleClick igual ao componente pai, para inverter o valor do hook.
    setIsHidden(!isHidden);
  }

  return (
    <div
      className={`${
        isHidden ? "block" : "hidden" //quando o botão menu está escondido, o navbar está visível
      } h-screen bg-gradient-to-r from-[#aabec2] via-[#edede7] to-[#edede771]
      w-1/2 md:block md:h-0 fixed`}
    >
      {/* quando o botão é clicado, esconde o navbar novamente */}
      <Button variant="ghost" size="icon" onClick={handleClick}>
        <ChevronLeft className="m-2 md:hidden" />
      </Button>
      <ul className=" px-4 flex flex-col md:flex-row gap-4 md:absolute top-0 left-0 md:gap-6">
        <li>
          <a href="#heroSection" onClick={handleClick}>
            Início
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleClick}>
            Serviços
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={handleClick}>
            Depoimentos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick}>
            Contatos
          </a>
        </li>
      </ul>
    </div>
  );
}
