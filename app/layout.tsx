import ReduxProvider from "./ReduxProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSync from "./ThemeSync";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeSync />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
