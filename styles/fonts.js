import { Inter, Montserrat, Poppins } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

// Replace 'YourCustomFont' with the name of your external font
// and update the src to point to your font file
// export const customFont = localFont({
//   src: "../public/fonts/your-custom-font.woff2", // Adjust this path as needed
//   display: "swap",
//   variable: "--font-custom",
// });
