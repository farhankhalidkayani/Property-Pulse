import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find your dream rental",
  description: "Property rental website",
  keywords: "property, rental ,find rental, find property",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default MainLayout;
