import Icon from "@/components/ui/icon";

interface ContactsProps {
  onBooking: () => void;
}

const Contacts = ({ onBooking }: ContactsProps) => {
  const contacts = [
    { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Здоровья, 12, стр. 1" },
    { icon: "Phone", label: "Телефон", value: "8 800 123-45-67 (бесплатно)" },
    { icon: "Mail", label: "Email", value: "info@mediclinic.ru" },
    { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 8:00 — 21:00" },
  ];

  return (
    <section id="contacts" className="py-20 section-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Как нас найти</span>
          <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-4">
            Контакты
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-foreground/50 mb-0.5">{c.label}</div>
                  <div className="font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}

            <button
              onClick={onBooking}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <Icon name="CalendarCheck" size={18} />
              Записаться онлайн
            </button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-80 flex items-center justify-center border border-border">
            <div className="text-center text-foreground/40 p-8">
              <Icon name="Map" size={48} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Карта</p>
              <p className="text-xs mt-1">ул. Здоровья, 12, Москва</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
