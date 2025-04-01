import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  //hooks para verificar se os botões e a navbar devem estar escondidos
  const [isHidden, setIsHidden] = useState(false);

  function handleClick() {
    //quando o botão é clicado, inverte o valor do isHidden, e esconde o botão
    setIsHidden(!isHidden);
  }
  return (
    <header className="w-full h-10  bg-gradient-to-r from-[#aabec2] to-[#edede7]">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className={`${isHidden ? "hidden" : "block"} md:hidden`}
      >
        <Menu className="m-2" />
      </Button>
      <Navbar isHidden={isHidden} setIsHidden={setIsHidden} />
    </header>
  );
}
