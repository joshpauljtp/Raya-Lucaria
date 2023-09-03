import HeroImage from "@components/reusables/HeroImage";
import Liurnia from "@assets/images/Explore/Hero.png";
import Description from "@components/Explore/Description/Description";
import AreasToVisit from "@components/Explore/AreasToVisit/AreasToVisit";

function ExploreLiurnia() {
  return (
    <main>
      <HeroImage imgSrc={Liurnia} title="Liurnia of the Lakes" />
      <Description />
      <AreasToVisit />
    </main>
  );
}

export default ExploreLiurnia;
