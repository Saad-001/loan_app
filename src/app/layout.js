import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const noto_serif = Noto_Serif_Bengali({
  weight: "400",
  display: "swap",
  subsets: ["bengali"],
  variable: "--font-noto",
});

export const metadata = {
  title: "Loan App",
  description: "This is a bank loan app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${
          (noto_serif.className, noto_serif.variable)
        } mx-auto lg:mx-56`}
      >
        {children}
      </body>
    </html>
  );
}
