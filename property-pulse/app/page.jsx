import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Footer from "@/components/Footer";
import HomePageProperties from "@/components/HomePageProperties";
import AllPropertiesButton from "@/components/AllPropertiesButton";

function Homepage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomePageProperties />
      <AllPropertiesButton />
      <Footer />
    </>
  );
}

export default Homepage;
