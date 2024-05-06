import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/customComp/Header/Header";
import { ThemeProvider } from "@/components/customComp/Header/ThemeProvider";
import BodyBackground from "@/components/customComp/BodyBackground";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joël-Ralaison | Portfolio",
  description:
    "Hello! My name is Joël, I'm a frontend developer based in Madagascar and This is my portfolio website.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="relative mx-auto max-w-screen-xl">
            <>{children}</>
            <BodyBackground />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
