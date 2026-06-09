import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryClientProviderTodo from "@/providers/query-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "To Do App with Next.js and TanStack Query",
  description: "A simple to-do app built with Next.js and TanStack Query",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryClientProviderTodo>
          {children}
          <Toaster position="top-center" richColors />
        </QueryClientProviderTodo>
      </body>
    </html>
  );
}
