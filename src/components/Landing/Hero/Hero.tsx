import Heading from "@/components/reusables/Heading";
import "./styles.css";
import Sigil from "@assets/Sigil.svg";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const scrollRef = useRef<HTMLElement>(null);

  const [bgImageVisible, toggleBgImageVisible] = useState<boolean>(true);

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
      const { scrollY } = window;

      // If scrollEnd > (innerHeight * 2), then hide scrollRef
      toggleBgImageVisible(!(scrollY > 0));
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

      const sigilEle = scrollRef?.current?.querySelector(".sigil-container");
      const sigilTitle = sigilEle?.querySelector("h1");

      if (bgImageVisible) {
        // First, fade bgImage in and zoom out
        bgImage?.animate(bgImageAnimations.fadeIn, {
          duration: 9000,
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          fill: "forwards",
        });
      } else {
        // First fade bgImage out
        bgImage?.animate(bgImageAnimations.fadeOut, {
          duration: 1200,
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
          { duration: 400, delay: 1200, fill: "forwards" }
        );

        // Then move Sigil image

        sigilEle?.animate(
          [
            { transform: "translate3d(0,0,0px)" },
            { opacity: 1, offset: 0.6 },
            {
              opacity: 0,
              transform: "translate3d(0,0,1000px)",
            },
          ],
          {
            duration: 1000,
            delay: 1600,
            easing: "ease-in",
            fill: "forwards",
          }
        );
      }
    }
  }, [bgImageVisible]);

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

        if (bgImage) {
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
          <img src={Sigil} alt="" />
          <div>
            <Heading level={2} text="The Academy of" />
            <Heading level={1} text="Raya Lucaria" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
