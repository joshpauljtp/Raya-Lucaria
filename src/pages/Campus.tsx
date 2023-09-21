import HeroImage from "@components/reusables/HeroImage";
import CampusHero from "@assets/images/Campus/Hero.png";
import Attire from "@/components/Campus/Attire/Attire";
import Defence from "@/components/Campus/Defence/Defence";
import Highlights from "@/components/Campus/Highlights/Highlights";

function Campus() {
  return (
    <>
      <HeroImage imgSrc={CampusHero} title="Campus & Student Life" />
      <Highlights />
      <Attire />
      <Defence />
    </>
  );
}

export default Campus;
