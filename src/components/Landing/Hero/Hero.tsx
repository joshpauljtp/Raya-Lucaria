import Heading from "@/components/reusables/Heading";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import Sigil from "@/components/reusables/Sigil";

function Hero({
  heroFinished,
  setHeroFinished,
  isVisible,
}: {
  heroFinished: any;
  setHeroFinished: any;
  isVisible: any;
}) {
  const scrollRef = useRef<HTMLElement>(null);

  const [bgImageVisible, toggleBgImageVisible] = useState<boolean | null>(null);

  const bgImageAnimations = {
    fadeIn: [
      {
        backgroundSize: "200% auto",
        backgroundPosition: "50% 100%",
        opacity: 0,
      },
      {
        backgroundSize: "200% auto",
        opacity: 0,
        offset: 0.3,
      },
      {
        backgroundSize: "100% auto",
        backgroundPosition: "50% 20%",
        opacity: 1,
      },
    ],
    fadeOut: [{ opacity: 1 }, { opacity: 0 }],
  };

  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight } = window;
      toggleBgImageVisible(!(scrollY > innerHeight * 5));
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  // Check if bgImageVisibility changes
  useEffect(() => {
    if (scrollRef) {
      const bgImage = scrollRef?.current?.querySelector(
        ".bg-image"
      ) as HTMLElement;

      const sigilEle = scrollRef?.current?.querySelector(
        ".sigil-container > svg"
      );
      const sigilTitle = scrollRef?.current?.querySelector(".text-container");

      if (!heroFinished) {
        if (bgImageVisible && isVisible) {
          // First, fade bgImage in and zoom out
          bgImage?.animate(bgImageAnimations.fadeIn, {
            duration: 9000,
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            fill: "forwards",
          });
        } else if (bgImageVisible === false) {
          // First fade bgImage out
          bgImage?.animate(bgImageAnimations.fadeOut, {
            duration: 2000,
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            fill: "forwards",
          });

          // Then hide Sigil title
          sigilTitle?.animate(
            [
              { opacity: 1 },
              {
                opacity: 0,
              },
            ],
            { duration: 400, delay: 2000, fill: "forwards" }
          );

          // Then activate star spread and nav

          sigilEle?.animate(
            [
              { filter: "drop-shadow(0px 0px 0px white)" },
              {
                opacity: 1,
                filter: "drop-shadow(0px 0px 10px white)",
                offset: 0.7,
              },
              {
                opacity: 0,
                filter: "drop-shadow(0px 0px 0px white)",
              },
            ],
            {
              duration: 800,
              delay: 1600,
              easing: "ease-in-out",
              fill: "forwards",
            }
          );

          setTimeout(() => {
            setHeroFinished(true);
          }, 3200);
        }
      }
    }
  }, [bgImageVisible, isVisible, heroFinished]);

  return (
    <section
      className="scroll-container"
      ref={scrollRef}
      onPointerMove={(e) => {
        const { clientX, clientY } = e;
        const { innerWidth } = window;
        const bgImage = scrollRef?.current?.querySelector(
          ".bg-image"
        ) as HTMLElement;

        const xDeltaFromCenter = (clientX - innerWidth / 2) / innerWidth;
        const yDeltaFromCenter = (clientY - innerHeight / 2) / innerHeight;

        if (bgImage && isVisible) {
          bgImage.animate(
            {
              translate: `-${50 + xDeltaFromCenter * 10}% -${
                50 + yDeltaFromCenter * 10
              }%`,
            },
            { duration: 5000, fill: "forwards" }
          );
        }
      }}
    >
      <div className="main-content">
        <div className="bg-image"></div>

        <div className="sigil-container">
          <Sigil />
          <div className="text-container">
            <Heading level={2} text="The Academy of" />
            <Heading level={1} text="Raya Lucaria" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
