import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/70 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full hero-gradient flex items-center justify-center">
              <Icon name="Heart" size={13} className="text-white" />
            </div>
            <span className="font-cormorant text-lg font-bold text-white">Рубра</span>
          </div>
          <p className="text-sm text-center">© 2024 Рубра. Лицензия № ЛО-77-01-020123</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;