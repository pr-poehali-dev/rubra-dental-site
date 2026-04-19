import { useState } from "react";
import Icon from "@/components/ui/icon";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
}

const doctors = [
  { name: "Морозова Анна Сергеевна", specialty: "Стоматолог-терапевт, эндодонтист" },
  { name: "Петров Андрей Викторович", specialty: "Хирург-имплантолог" },
  { name: "Белова Ольга Николаевна", specialty: "Стоматолог-ортопед" },
  { name: "Козлов Дмитрий Александрович", specialty: "Ортодонт" },
  { name: "Соколова Мария Ивановна", specialty: "Детский стоматолог" },
  { name: "Новиков Игорь Петрович", specialty: "Гигиенист, стоматолог-терапевт" },
];

const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "17:00"];

const getDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    dates.push({
      value: d.toISOString().split("T")[0],
      label: `${weekdays[d.getDay()]}, ${d.getDate()} ${["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"][d.getMonth()]}`,
    });
  }
  return dates;
};

const BookingModal = ({ open, onClose, preselectedDoctor }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const dates = getDates();

  const handleClose = () => {
    setStep(1);
    setSelectedDoctor(preselectedDoctor || "");
    setSelectedDate("");
    setSelectedTime("");
    setForm({ name: "", phone: "", comment: "" });
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-cormorant text-2xl font-bold text-foreground">Запись на приём</h2>
            {!submitted && (
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1 rounded-full transition-all ${s <= step ? "bg-primary w-8" : "bg-border w-4"}`} />
                ))}
                <span className="text-xs text-foreground/50 ml-2">Шаг {step} из 3</span>
              </div>
            )}
          </div>
          <button onClick={handleClose} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors">
            <Icon name="X" size={16} className="text-foreground/60" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-accent" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-foreground mb-2">Запись принята!</h3>
              <p className="text-foreground/60 text-sm mb-1">
                Ждём вас <span className="font-semibold text-foreground">{dates.find(d => d.value === selectedDate)?.label}</span> в <span className="font-semibold text-foreground">{selectedTime}</span>
              </p>
              <p className="text-foreground/60 text-sm mb-6">
                Врач: <span className="font-semibold text-foreground">{selectedDoctor}</span>
              </p>
              <p className="text-xs text-foreground/40 mb-6">Мы свяжемся с вами по номеру {form.phone} для подтверждения</p>
              <button onClick={handleClose} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
                Закрыть
              </button>
            </div>
          ) : step === 1 ? (
            <div>
              <h3 className="font-semibold text-foreground mb-4">Выберите врача</h3>
              <div className="space-y-2">
                {doctors.map((d) => (
                  <button
                    key={d.name}
                    onClick={() => setSelectedDoctor(d.name)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selectedDoctor === d.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
                  >
                    <div className="font-medium text-foreground text-sm">{d.name}</div>
                    <div className="text-xs text-foreground/50 mt-0.5">{d.specialty}</div>
                  </button>
                ))}
              </div>
              <button
                disabled={!selectedDoctor}
                onClick={() => setStep(2)}
                className="w-full mt-5 bg-primary text-primary-foreground py-3 rounded-xl font-semibold disabled:opacity-40 hover:bg-primary/90 transition-colors"
              >
                Далее
              </button>
            </div>
          ) : step === 2 ? (
            <div>
              <h3 className="font-semibold text-foreground mb-4">Выберите дату и время</h3>
              <div className="mb-5">
                <p className="text-xs text-foreground/50 mb-2 uppercase tracking-wide">Дата</p>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`text-sm p-2.5 rounded-lg border transition-all ${selectedDate === d.value ? "border-primary bg-primary/5 text-primary font-medium" : "border-border hover:border-primary/40"}`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              {selectedDate && (
                <div>
                  <p className="text-xs text-foreground/50 mb-2 uppercase tracking-wide">Время</p>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-sm py-2 rounded-lg border transition-all ${selectedTime === t ? "border-primary bg-primary/5 text-primary font-semibold" : "border-border hover:border-primary/40"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3 mt-5">
                <button onClick={() => setStep(1)} className="flex-1 border border-border py-3 rounded-xl text-sm hover:bg-muted transition-colors">
                  Назад
                </button>
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold disabled:opacity-40 hover:bg-primary/90 transition-colors"
                >
                  Далее
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="font-semibold text-foreground mb-4">Ваши данные</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-foreground/50 uppercase tracking-wide mb-1 block">Имя и фамилия *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иванов Иван"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 uppercase tracking-wide mb-1 block">Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 uppercase tracking-wide mb-1 block">Комментарий</label>
                  <textarea
                    value={form.comment}
                    onChange={e => setForm({ ...form, comment: e.target.value })}
                    placeholder="Опишите кратко причину обращения..."
                    rows={3}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="bg-muted rounded-xl p-4 mt-5 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-foreground/50">Врач:</span>
                  <span className="font-medium text-foreground text-right max-w-48">{selectedDoctor}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-foreground/50">Дата:</span>
                  <span className="font-medium text-foreground">{dates.find(d => d.value === selectedDate)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/50">Время:</span>
                  <span className="font-medium text-foreground">{selectedTime}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <button type="button" onClick={() => setStep(2)} className="flex-1 border border-border py-3 rounded-xl text-sm hover:bg-muted transition-colors">
                  Назад
                </button>
                <button type="submit" className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Записаться
                </button>
              </div>
              <p className="text-xs text-foreground/40 text-center mt-3">Нажимая кнопку, вы соглашаетесь с политикой обработки данных</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;