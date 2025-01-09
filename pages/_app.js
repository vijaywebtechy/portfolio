import "@/styles/globals.scss";
import { inter, montserrat, poppins } from "@/styles/fonts";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { BottomSheetContact } from "@/components/contactSheet";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactOpen = () => setIsContactOpen(true);
  const handleContactClose = () => setIsContactOpen(false);
  return (
    <div
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <Header onContactSheet={handleContactOpen} />
      <Component {...pageProps} onContactSheet={handleContactOpen} />
      <BottomSheetContact
        isContactOpen={isContactOpen}
        onClose={handleContactClose}
        title="Contact Me Anytime! 😊"
      />
      <Footer />
    </div>
  );
}
