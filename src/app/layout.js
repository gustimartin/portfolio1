import "./globals.css";
import { Inter } from "next/font/google";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";
export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Headers />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
