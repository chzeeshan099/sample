import "./globals.css";

export const metadata = {
  title: "Welcome to our Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
