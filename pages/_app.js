import "@/styles/globals.scss";
import { inter, montserrat, poppins } from "@/styles/fonts";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { BottomSheetContact } from "@/components/contactSheet";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactOpen = () => setIsContactOpen(true);
  const handleContactClose = () => setIsContactOpen(false);
  return (
    <ThemeProvider attribute={"class"}>
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
    </ThemeProvider>
  );
}
