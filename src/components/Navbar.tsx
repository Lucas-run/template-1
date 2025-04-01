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
      } h-screen bg-gradient-to-r from-[#aabec288] to-[#edede788]
      w-1/2 md:block md:h-0  `}
    >
      {/* quando o botão é clicado, esconde o navbar novamente */}
      <Button variant="ghost" size="icon" onClick={handleClick}>
        <ChevronLeft className="m-2 md:hidden" />
      </Button>
      <ul className=" px-4 md:flex gap-4 md:absolute top-0 right-0">
        <li>Seção 1</li>
        <li>Seção 2</li>
        <li>Seção 3</li>
        <li>Seção 4</li>
      </ul>
    </div>
  );
}
