import "./globals.css";
 import Header from "@/components/Header.jsx"
 import Footer from "@/components/Footer.jsx"

export const metadata = {
  title: "TechPNGs",
  description: "App for all Tech PNGs!",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body
        className={`antialiased bg-white`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
