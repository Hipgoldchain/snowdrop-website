import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import OfferCard from "@/components/OfferCard";
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
        <TrustBand />
        <OfferCard />
        <CaseStudies />
        <BrandMoment />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
