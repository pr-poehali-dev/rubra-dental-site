import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  onBooking: () => void;
}

const Navbar = ({ onBooking }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Главная", href: "#home" },
    { label: "О клинике", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Врачи", href: "#doctors" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
            <Icon name="Sparkles" size={16} className="text-white" />
          </div>
          <span className="font-cormorant text-xl font-bold text-primary tracking-wider">РУБРА</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+78001234567" className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors">
            <Icon name="Phone" size={15} />
            8 800 123-45-67
          </a>
          <button
            onClick={onBooking}
            className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Записаться
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-foreground" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onBooking(); }}
            className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-lg mt-2"
          >
            Записаться онлайн
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;