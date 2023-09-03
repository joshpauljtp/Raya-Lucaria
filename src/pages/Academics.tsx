import HeroImage from "@components/reusables/HeroImage";
import AcademicsHero from "@assets/images/Academics/Hero.png";
import Description from "@/components/Academics/Description/Description";
import Conspectuses from "@/components/Academics/Conspectuses/Conspectuses";
import Rennala from "@/components/Academics/Rennala/Rennala";

function Academics() {
  return (
    <>
      <HeroImage imgSrc={AcademicsHero} title="Grandmasters of the Academy" />
      <Description />
      <Conspectuses />
      <Rennala />
    </>
  );
}

export default Academics;
