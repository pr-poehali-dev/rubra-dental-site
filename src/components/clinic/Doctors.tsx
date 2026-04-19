import Icon from "@/components/ui/icon";

interface DoctorsProps {
  onBooking: (doctor?: string) => void;
}

const Doctors = ({ onBooking }: DoctorsProps) => {
  const doctors = [
    {
      name: "Елена Сергеевна Морозова",
      specialty: "Терапевт, кардиолог",
      experience: "18 лет опыта",
      category: "Высшая категория",
      initials: "ЕМ",
    },
    {
      name: "Андрей Викторович Петров",
      specialty: "Невролог",
      experience: "14 лет опыта",
      category: "Первая категория",
      initials: "АП",
    },
    {
      name: "Ольга Николаевна Белова",
      specialty: "Офтальмолог",
      experience: "12 лет опыта",
      category: "Высшая категория",
      initials: "ОБ",
    },
    {
      name: "Дмитрий Александрович Козлов",
      specialty: "Ортопед, хирург",
      experience: "20 лет опыта",
      category: "Профессор",
      initials: "ДК",
    },
    {
      name: "Мария Ивановна Соколова",
      specialty: "Эндокринолог",
      experience: "11 лет опыта",
      category: "Первая категория",
      initials: "МС",
    },
    {
      name: "Игорь Петрович Новиков",
      specialty: "Гастроэнтеролог",
      experience: "16 лет опыта",
      category: "Высшая категория",
      initials: "ИН",
    },
  ];

  return (
    <section id="doctors" className="py-20 section-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Команда</span>
          <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-4">
            Наши врачи
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Опытные специалисты с российскими и международными сертификатами. Регулярно повышают квалификацию.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <div key={d.name} className="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
              <div className="hero-gradient h-28 flex items-end px-6 pb-0 relative">
                <div className="absolute bottom-0 translate-y-1/2 w-16 h-16 rounded-full bg-white border-4 border-white flex items-center justify-center shadow">
                  <span className="font-cormorant font-bold text-primary text-lg">{d.initials}</span>
                </div>
              </div>
              <div className="pt-12 px-6 pb-6">
                <h3 className="font-semibold text-foreground mb-0.5">{d.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{d.specialty}</p>
                <div className="flex items-center gap-3 text-xs text-foreground/50 mb-4">
                  <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{d.experience}</span>
                  <span className="flex items-center gap-1"><Icon name="Award" size={12} />{d.category}</span>
                </div>
                <button
                  onClick={() => onBooking(d.name)}
                  className="w-full border border-primary text-primary text-sm py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
