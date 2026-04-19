import Icon from "@/components/ui/icon";

interface ServicesProps {
  onBooking: () => void;
}

const Services = ({ onBooking }: ServicesProps) => {
  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      desc: "Первичная диагностика, лечение общих заболеваний, профилактические осмотры",
      price: "от 1 500 ₽",
    },
    {
      icon: "Brain",
      title: "Неврология",
      desc: "Диагностика и лечение заболеваний нервной системы, головных болей, нарушений сна",
      price: "от 2 000 ₽",
    },
    {
      icon: "Heart",
      title: "Кардиология",
      desc: "ЭКГ, УЗИ сердца, лечение сердечно-сосудистых заболеваний",
      price: "от 2 500 ₽",
    },
    {
      icon: "Bone",
      title: "Ортопедия",
      desc: "Лечение заболеваний опорно-двигательного аппарата, суставов и позвоночника",
      price: "от 2 000 ₽",
    },
    {
      icon: "Eye",
      title: "Офтальмология",
      desc: "Проверка зрения, лечение болезней глаз, подбор очков и линз",
      price: "от 1 800 ₽",
    },
    {
      icon: "Dna",
      title: "Лабораторная диагностика",
      desc: "Более 500 видов анализов, результаты от 2 часов до 1 дня",
      price: "от 300 ₽",
    },
    {
      icon: "Scan",
      title: "УЗИ-диагностика",
      desc: "УЗИ органов брюшной полости, щитовидной железы, сосудов, суставов",
      price: "от 1 200 ₽",
    },
    {
      icon: "Activity",
      title: "Физиотерапия",
      desc: "Реабилитация, лечение хронических болей, восстановление после травм",
      price: "от 800 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Что мы лечим</span>
          <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-4">
            Наши услуги
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Более 20 направлений медицинской помощи в одном месте. Запишитесь к нужному специалисту онлайн.
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
