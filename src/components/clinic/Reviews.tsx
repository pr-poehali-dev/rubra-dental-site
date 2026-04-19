import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Наталья К.",
      rating: 5,
      date: "март 2024",
      doctor: "Морозова Е.С.",
      text: "Очень внимательный доктор. Елена Сергеевна подробно объяснила мой диагноз и назначила лечение. Чувствую себя значительно лучше уже через неделю. Буду рекомендовать всем знакомым!",
    },
    {
      name: "Александр П.",
      rating: 5,
      date: "февраль 2024",
      doctor: "Петров А.В.",
      text: "Обратился с хронической головной болью. Андрей Викторович провёл полное обследование, нашёл причину и прописал эффективный курс лечения. Боли прошли!",
    },
    {
      name: "Светлана М.",
      rating: 5,
      date: "январь 2024",
      doctor: "Белова О.Н.",
      text: "Клиника отличная: чистота, вежливый персонал, не нужно долго ждать. Записалась онлайн — удобно! Ольга Николаевна — профессионал высшего класса.",
    },
    {
      name: "Михаил Т.",
      rating: 4,
      date: "декабрь 2023",
      doctor: "Козлов Д.А.",
      text: "Сделали операцию на колене. Всё прошло хорошо, реабилитация быстрая. Дмитрий Александрович — хирург от Бога. Единственное — немного подождал в очереди.",
    },
    {
      name: "Ирина Ф.",
      rating: 5,
      date: "ноябрь 2023",
      doctor: "Соколова М.И.",
      text: "Долго искала хорошего эндокринолога. Нашла здесь! Мария Ивановна очень внимательна, назначила правильное лечение. Теперь вся семья обслуживается в этой клинике.",
    },
    {
      name: "Виктор Г.",
      rating: 5,
      date: "октябрь 2023",
      doctor: "Новиков И.П.",
      text: "Прошёл полное гастроэнтерологическое обследование. Игорь Петрович — грамотный специалист, всё объяснил понятно. Записался повторно.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Мнения пациентов</span>
          <h2 className="font-cormorant text-4xl font-bold text-foreground mt-2 mb-4">
            Отзывы
          </h2>
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.9 из 5 на основе 1 243 отзывов</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-border rounded-xl p-6 card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-foreground/50">{r.date}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-3">{r.text}</p>
              <div className="text-xs text-primary font-medium flex items-center gap-1">
                <Icon name="Stethoscope" size={12} />
                {r.doctor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
