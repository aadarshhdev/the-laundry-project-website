import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';
import BookingModal from '../BookingModal';
import { useBooking } from '../../context/BookingContext';

export default function Layout({ children }) {
  const { open, closeBooking, openBooking } = useBooking();
  return (
    <>
      <Navbar onBooking={openBooking} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <BookingModal open={open} onClose={closeBooking} />
    </>
  );
}
