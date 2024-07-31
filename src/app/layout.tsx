import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";
import StoreProvider from "./storeProvider";
export const metadata: Metadata = {
  title: "Workflo",
  description:
    "Workflo is a productivity app that helps you manage your tasks and time.",
};
import { BoardProvider } from "@/context/BoardContext/BoardContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <Provider>
              <BoardProvider>{children}</BoardProvider>
            </Provider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
