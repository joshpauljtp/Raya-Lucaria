import HeroImage from "@components/reusables/HeroImage";
import AdmissionHero from "@assets/images/Admission/Hero.png";

function Admission() {
  return (
    <>
      <HeroImage imgSrc={AdmissionHero} title="Admission" />
    </>
  );
}

export default Admission;
