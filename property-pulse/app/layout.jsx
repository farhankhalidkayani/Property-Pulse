import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse | Find your dream rental",
  description: "Property rental website",
  keywords: "property, rental ,find rental, find property",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default MainLayout;
