import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    { icon: "Microscope", title: "Современное оборудование", desc: "Диагностика на аппаратах последнего поколения европейских производителей" },
    { icon: "UserCheck", title: "Опытные врачи", desc: "Более 50 специалистов с опытом работы от 10 лет и регулярным повышением квалификации" },
    { icon: "Clock", title: "Удобный график", desc: "Принимаем пациентов ежедневно с 8:00 до 21:00, в том числе в выходные дни" },
    { icon: "HeartHandshake", title: "Индивидуальный подход", desc: "Каждый пациент получает персональный план лечения и внимательное отношение" },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">О нас</span>
            <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-6">
              15 лет на страже вашего здоровья
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              МедиКлиник — это многопрофильный медицинский центр, основанный в 2009 году. За эти годы мы помогли более чем 30 000 пациентам восстановить и сохранить здоровье.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Мы объединяем лучших специалистов, передовые технологии и европейские стандарты медицины, чтобы предоставить вам медицинскую помощь самого высокого уровня.
            </p>
            <div className="flex flex-wrap gap-3">
              {["ISO 9001", "Лицензия МЗ РФ", "Аккредитация ВОЗ"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-full font-medium">
                  <Icon name="CheckCircle" size={14} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name={f.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
