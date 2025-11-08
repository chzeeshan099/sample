import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Zeeshan | Full Stack JavaScript Developer",
  description:
    "Full Stack Developer skilled in React, Next.js, Vue, Node.js, Express, and MongoDB — building modern, scalable web and mobile applications.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-primary/20 selection:text-primary dark:selection:bg-primary/30 dark:selection:text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative">
            <div className="fixed inset-0 bg-grid opacity-30 dark:opacity-10" />
            <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background/80 dark:to-primary/10" />
            <div className="fixed inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delay" />
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
            </div>
            <div className="relative z-10">
              <Navbar />
              <main className="relative">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
