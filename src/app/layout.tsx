import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/user/AuthContext";
import { Provider } from "@/components/ui/provider"
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { AosInit } from "./_components/aos/aos-init";
import { Toaster } from "sonner";



const font = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"]
});
const fonttt = localFont({
  src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-Roboto-VariableFont",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              backgroundColor: "#f1f1f1",
              color: "#131313",
              borderColor: "rgba(255, 255, 255, 0.5)"
            }
          }}
        />
        <AuthProvider>
          {children}
          <AosInit />
        </AuthProvider>

      </body>
    </html>
  );
}
