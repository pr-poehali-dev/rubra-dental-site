import { useState } from "react";
import Navbar from "@/components/clinic/Navbar";
import Hero from "@/components/clinic/Hero";
import About from "@/components/clinic/About";
import Services from "@/components/clinic/Services";
import Doctors from "@/components/clinic/Doctors";
import Reviews from "@/components/clinic/Reviews";
import Contacts from "@/components/clinic/Contacts";
import Footer from "@/components/clinic/Footer";
import BookingModal from "@/components/clinic/BookingModal";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>();

  const openBooking = (doctor?: string) => {
    setPreselectedDoctor(doctor);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBooking={() => openBooking()} />
      <Hero onBooking={() => openBooking()} />
      <About />
      <Services onBooking={() => openBooking()} />
      <Doctors onBooking={openBooking} />
      <Reviews />
      <Contacts onBooking={() => openBooking()} />
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDoctor={preselectedDoctor}
      />
    </div>
  );
};

export default Index;
