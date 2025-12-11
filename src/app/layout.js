import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Welcome to our Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}

