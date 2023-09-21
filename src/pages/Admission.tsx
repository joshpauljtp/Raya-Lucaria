import HeroImage from "@components/reusables/HeroImage";
import AdmissionHero from "@assets/images/Admission/Hero.png";
import Seal from "@/components/Admission/Seal/Seal";
import Intro from "@/components/Admission/Intro/Intro";
import FirstStep from "@/components/Admission/FirstStep/FirstStep";

function Admission() {
  return (
    <>
      <HeroImage imgSrc={AdmissionHero} title="Admission" />
      <Intro />
      <FirstStep />
      <Seal />
    </>
  );
}

export default Admission;
