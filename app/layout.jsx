import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "../contexts/UserContext";
import ProtectedRoute from "../components/auth/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mandiri HCIS",
  description: "Enterprise Payroll Interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${inter.className} bg-background text-on-background`} suppressHydrationWarning>
        <UserProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </UserProvider>
      </body>
    </html>
  );
}
