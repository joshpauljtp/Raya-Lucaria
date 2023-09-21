import Explore from "@/components/Landing/Explore/Explore";
import Hero from "@/components/Landing/Hero2/Hero";
import RennalaMessage from "@/components/Landing/RennalaMessage";
import Welcome from "@/components/Landing/Welcome/Welcome";
import { useEffect, useState } from "react";

function LandingPage() {
  const heroFinishedCheck = sessionStorage.getItem("heroFinished");
  const [heroFinished, setHeroFinished] = useState<boolean>(
    heroFinishedCheck === "true"
  );

  useEffect(() => {
    heroFinished && sessionStorage.setItem("heroFinished", heroFinished + "");
  }, [heroFinished]);

  return (
    <>
      <Hero heroFinished={heroFinished} setHeroFinished={setHeroFinished} />
      <main
        id="landingPageContent"
        className={heroFinished ? "landingFadeIn" : "landingFadeOut"}
      >
        <Welcome />
        <Explore />
        <RennalaMessage />
      </main>
    </>
  );
}

export default LandingPage;
