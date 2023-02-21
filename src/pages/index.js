import { useEffect } from "react";
import ArtFlowSection from "@/components/sections/HomeSections/ArtFlowSection";
import BenefitsSections from "@/components/sections/HomeSections/BenefitsSections";
import BillboardSection from "@/components/sections/HomeSections/BillboardSection";
import HeroSection from "@/components/sections/HomeSections/HeroSection";
export default function Home() {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <HeroSection />
      <BillboardSection />
      <BenefitsSections />
      <ArtFlowSection />
    </>
  )
}
