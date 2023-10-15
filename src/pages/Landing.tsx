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
    const spaceBG = document.getElementById("spaceBackground") as HTMLElement;
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];

    if (!heroFinished) {
      header.className = "";
      footer.className = "";
      spaceBG.className = "inactive";
    } else {
      sessionStorage.setItem("heroFinished", heroFinished + "");

      header.className = "headerActive";
      footer.className = "footerActive";
      window.scrollTo({
        top: 0,
      });
    }
  }, [heroFinished]);

  if (!heroFinished)
    return (
      <Hero heroFinished={heroFinished} setHeroFinished={setHeroFinished} />
    );

  return (
    <>
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
