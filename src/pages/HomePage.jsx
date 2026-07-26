import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Academics from "../components/sections/Academics";
import Admissions from "../components/sections/Admissions";
import Gallery from "../components/sections/Gallery";
import Faq from "../components/sections/Faq";

export default function HomePage({ onOpenInquiry }) {
  return (
    <>
      <Hero onOpenInquiry={onOpenInquiry} />
      <StatsBar />
      <WhyChooseUs />
      <Academics />
      <Admissions onOpenInquiry={onOpenInquiry} />
      <Gallery />
      <Faq />
    </>
  );
}
