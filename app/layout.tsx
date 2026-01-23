import ReduxProvider from "./ReduxProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSync from "./ThemeSync";
import "./globals.css";

export const metadata = {
  title: {
    default: "Robin Joseph",
    template: "%s | Robin Joseph",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

