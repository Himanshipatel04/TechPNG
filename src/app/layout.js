// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
// import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata = {
  title: "TechPNG",
  description: "App for all Tech PNGs!",
};

export default function RootLayout({ children }) {
  return (
    // <ErrorBoundary>
        <html lang="en">
          <body className={`antialiased`}>
          <ThemeToggle>
            <Header />
            <main>{children}</main> 
            <Footer />
      </ThemeToggle>
          </body>
        </html>
    // </ErrorBoundary>
  );
}
