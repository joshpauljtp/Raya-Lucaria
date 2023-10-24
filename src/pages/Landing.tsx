import Explore from "@/components/Landing/Explore/Explore";
import Hero from "@/components/Landing/Hero2/Hero";
import RennalaMessage from "@/components/Landing/RennalaMessage";
import Welcome from "@/components/Landing/Welcome/Welcome";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const { state } = useLocation();

  const [scrollHeroFinished, setScrollHeroFinished] = useState<boolean>(false);
  const introFinished = state?.noIntro || scrollHeroFinished;

  useLayoutEffect(() => {
    window.history.replaceState(null, "");
  }, []);

  useEffect(() => {
    const spaceBG = document.getElementById("spaceBackground") as HTMLElement;
    const visitSection = document.getElementById("visit") as HTMLElement;
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];

    if (!introFinished) {
      header.className = "";
      footer.className = "";
      visitSection.className = "opacity-0";
      spaceBG.className = "inactive";
    } else {
      visitSection.className = "";
      header.className = "headerActive";
      footer.className = "footerActive";
      window.scrollTo({
        top: 0,
      });
    }
  }, [introFinished]);

  if (!introFinished)
    return (
      <Hero
        heroFinished={introFinished}
        setHeroFinished={setScrollHeroFinished}
      />
    );

  return (
    <>
      <main
        id="landingPageContent"
        className={introFinished ? "landingFadeIn" : "landingFadeOut"}
      >
        <Welcome />
        <Explore />
        <RennalaMessage />
      </main>
    </>
  );
}

export default LandingPage;
