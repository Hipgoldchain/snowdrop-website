import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import TrustBand from "@/components/TrustBand";
import CaseStudies from "@/components/CaseStudies";
import BrandMoment from "@/components/BrandMoment";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <TrustBand />
        <CaseStudies />
        <BrandMoment />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
