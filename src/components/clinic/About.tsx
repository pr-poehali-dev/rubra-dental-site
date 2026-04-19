import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    { icon: "Sparkles", title: "Лечение без боли", desc: "Современная анестезия и деликатный подход. Комфорт даже для самых чувствительных пациентов" },
    { icon: "UserCheck", title: "Опытные стоматологи", desc: "Врачи со стажем от 10 лет, постоянно обучаются в ведущих клиниках Европы" },
    { icon: "Scan", title: "3D-диагностика", desc: "Цифровой томограф, интраоральные сканеры и микроскоп для точных диагнозов" },
    { icon: "HeartHandshake", title: "Индивидуальный план", desc: "Прозрачная смета и персональный план лечения без навязанных услуг" },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">О нас</span>
            <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-6">
              15 лет создаём улыбки
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              «РУБРА» — это современная стоматологическая клиника, основанная в 2009 году. За эти годы мы вернули красоту и здоровье зубов более чем 30 000 пациентам.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Мы объединяем лучших стоматологов, европейские материалы и цифровые технологии, чтобы лечение проходило быстро, безболезненно и с гарантией результата.
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