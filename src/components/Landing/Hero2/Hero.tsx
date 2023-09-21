import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import StargazerHeirloom from "@/assets/images/Landing/Stargazer.png";
import Sigil from "@/components/reusables/Sigil";
import "./styles.scss";
import HeroBase from "../Hero/Hero";
import Heading from "@/components/reusables/Heading";
import Lusat from "@/assets/images/Landing/Lusat.webp";
import Azur from "@/assets/images/Landing/Azur.webp";

function Hero({
  heroFinished,
  setHeroFinished,
}: {
  heroFinished: any;
  setHeroFinished: any;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [scrollPos, setScrollPos] = useState<number>(0);

  const STEPS = [
    <>
      <img src={StargazerHeirloom} alt="" id="stargazer" />
      <Heading
        level={4}
        text="Long ago, an astrologer looked up to the sky, and glimpsed the Primeval
        Current in the sky above."
      />
    </>,
    <p>
      Then miraculously, what they saw in the cosmos manifested in reality, and
      the very amber of the stars rained down on the Lands Between.
    </p>,
    <>
      <img src={Azur} alt="" />
      <p>
        This Glinstone of the cosmos would go on to inspire those that studied
        it - but there was also a darkness between the stars, and what some saw,
        would break their minds, and inspire a fate worse than death.
      </p>
      <img src={Lusat} alt="" />
    </>,
    <p>
      And so, atop and amidst the enormous quantities of Glintstone in the lakes
      of Liurnia, a place of learning that institutionalized the practice of
      Glintstone sorcery was built:
    </p>,
    <HeroBase
      heroFinished={heroFinished}
      setHeroFinished={setHeroFinished}
      isVisible={introFinished}
    />,
  ];

  const handleDynamicContent = useCallback(() => {
    const { innerHeight, scrollY } = window;
    const interval = innerHeight;
    setScrollPos(scrollY);

    for (let i = 0; i < STEPS.length; i++) {
      if (scrollY < interval * (i + 1) && scrollY >= interval * i) {
        setActiveIndex(i);
      }
    }
  }, []);

  useLayoutEffect(() => {
    handleDynamicContent();
    document.addEventListener("scroll", handleDynamicContent);
  }, []);

  useEffect(() => {
    // Activate and lock star spread on 2nd step
    if (activeIndex === 1) {
      setTimeout(() => {
        const spaceBG = document.getElementById(
          "spaceBackground"
        ) as HTMLElement;
        spaceBG.className = "";
      }, 2000);
    }

    // Lock intro state when reached
    activeIndex === 4 && setIntroFinished(true);
  }, [activeIndex]);

  useEffect(() => {
    const spaceBG = document.getElementById("spaceBackground") as HTMLElement;
    const header = document.getElementsByTagName("header")[0];

    if (!heroFinished) {
      header.className = "";
      spaceBG.className = "inactive";
    } else {
      header.className = "headerActive";
      window.scrollTo({
        top: 0,
      });
    }
  }, [heroFinished]);

  if (heroFinished) return <></>;
  return (
    <aside className={heroFinished ? "hide" : ""}>
      <Sigil
        className={scrollPos >= window.innerHeight * 4.5 ? "fadeOut" : `fadeIn`}
        id="heroSigil"
      />
      {STEPS?.map((jsx, i) => (
        <div
          className={`dynamicContent content-${i + 1} ${
            activeIndex === i ? "active" : ""
          }`}
          key={`introStep-${i}`}
        >
          {jsx}
        </div>
      ))}

      <div
        className={`scrollProgress ${
          scrollPos >= window.innerHeight * 5 ? "fadeOut" : ""
        }`}
      >
        <span className={scrollPos !== 0 ? "fadeOut" : ""}>(scroll)</span>

        <div
          className={`scrollProgressBarContainer ${
            heroFinished ? "fadeOut" : "fadeIn"
          }`}
        >
          <div
            className="scrollProgressBar"
            style={{
              width: (scrollPos / (window.innerHeight * 5)) * 200,
            }}
          ></div>
        </div>
      </div>
    </aside>
  );
}

export default Hero;
