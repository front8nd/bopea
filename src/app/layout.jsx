import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Oxygen } from "next/font/google";

export const metadata = {
  title: "Bopea - NextJS",
  description: "Bopea Blog Template",
};

const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
