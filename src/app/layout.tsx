import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahla Zohourparvaz | Front-End Developer (Vue / React)",
  description:
    "Front-End Developer with 2+ years of experience building scalable enterprise web applications using Vue 3, React, Next.js, and TypeScript. Specializing in state-driven architectures and modular frontend design.",
  keywords: [
    "Mahla Zohourparvaz",
    "Front-End Developer",
    "React",
    "Next.js",
    "Vue 3",
    "TypeScript",
    "XState",
    "Enterprise Frontend",
    "Portfolio",
  ],
  authors: [{ name: "Mahla Zohourparvaz" }],
  openGraph: {
    title: "Mahla Zohourparvaz | Front-End Developer",
    description:
      "Front-End Developer specializing in React.js, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}