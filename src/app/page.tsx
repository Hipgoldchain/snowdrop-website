import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import TrustBand from "@/components/TrustBand";
import WhatClientsFind from "@/components/WhatClientsFind";
import AuditExperience from "@/components/AuditExperience";
import BuildExperience from "@/components/BuildExperience";
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
        <Journey />
        <WhatClientsFind />
        <AuditExperience />
        <BuildExperience />
        <BrandMoment />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
