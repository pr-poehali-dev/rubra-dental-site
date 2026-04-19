import Icon from "@/components/ui/icon";

interface ServicesProps {
  onBooking: () => void;
}

const Services = ({ onBooking }: ServicesProps) => {
  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия и лечение кариеса",
      desc: "Безболезненное лечение кариеса, пульпита и каналов под микроскопом",
      price: "от 3 500 ₽",
    },
    {
      icon: "Sparkles",
      title: "Профессиональная чистка",
      desc: "Air Flow, ультразвук, полировка и фторирование — чистота и свежесть",
      price: "от 4 900 ₽",
    },
    {
      icon: "Gem",
      title: "Имплантация",
      desc: "Восстановление зубов имплантами Nobel, Straumann и Osstem с гарантией",
      price: "от 35 000 ₽",
    },
    {
      icon: "Smile",
      title: "Отбеливание",
      desc: "ZOOM 4 и домашние системы — белоснежная улыбка за одно посещение",
      price: "от 18 000 ₽",
    },
    {
      icon: "Shapes",
      title: "Протезирование",
      desc: "Коронки, виниры, мосты из E-max и циркония с пожизненной гарантией",
      price: "от 22 000 ₽",
    },
    {
      icon: "AlignJustify",
      title: "Ортодонтия",
      desc: "Элайнеры Invisalign и брекет-системы для идеального прикуса",
      price: "от 120 000 ₽",
    },
    {
      icon: "Baby",
      title: "Детская стоматология",
      desc: "Бережное лечение для малышей, лечение во сне и в игровой форме",
      price: "от 2 500 ₽",
    },
    {
      icon: "Scan",
      title: "3D-диагностика",
      desc: "Компьютерная томография и цифровой оттиск за 10 минут",
      price: "от 2 000 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Что мы делаем</span>
          <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-4">
            Наши услуги
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Полный спектр стоматологических услуг — от гигиены до комплексной имплантации. Онлайн-запись к любому врачу.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-border rounded-xl p-5 card-hover cursor-pointer group" onClick={onBooking}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={s.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="text-primary font-semibold text-sm">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onBooking}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Записаться на приём
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;