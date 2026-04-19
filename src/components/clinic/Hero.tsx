import Icon from "@/components/ui/icon";

interface HeroProps {
  onBooking: () => void;
}

const Hero = ({ onBooking }: HeroProps) => {
  const stats = [
    { value: "15+", label: "лет практики" },
    { value: "20+", label: "стоматологов" },
    { value: "30 000+", label: "улыбок" },
    { value: "99%", label: "безболезненно" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Shield" size={14} />
            Стоматология премиум-класса
          </div>

          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Красивая улыбка —<br />
            <span className="text-white/80 italic">ваша визитная карточка</span>
          </h1>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Современная стоматологическая клиника «РУБРА». Безболезненное лечение, профессиональная гигиена, имплантация и эстетическая реставрация зубов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBooking}
              className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2 justify-center"
            >
              <Icon name="CalendarCheck" size={18} />
              Записаться на приём
            </button>
            <a
              href="tel:+78001234567"
              className="border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
            >
              <Icon name="Phone" size={18} />
              8 800 123-45-67
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-cormorant text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;