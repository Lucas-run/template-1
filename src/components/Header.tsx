import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#aabec2] to-[#edede7]">
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </header>
  );
}
