import useEmblaCarousel from "embla-carousel-react";
import Karalos from "@assets/images/Academics/Karalos.png";
import "./styles.scss";
import { useCallback, useState } from "react";
import Arrow from "@assets/images/Academics/CarouselArrow.svg";
import Heading from "../../reusables/Heading";

function Conspectuses() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [index, setIndex] = useState<number>(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setIndex((prev) => prev - 1);
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      console.log("next");
      setIndex((prev) => prev + 1);
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const content = [
    {
      title: "The Karalos Conspectus",
      desc: `The Karolos Conspectus is the oldest of the academy's lineages of study, begat by the sorcerer Azur. Scholars who follow in his footsteps pursue the mysteries of comets, leading to new kinds of comet sorceries, such as Glintstone Cometshard and Shard Spiral.`,
      img: Karalos,
    },
    {
      title: "2",
      desc: `The Karolos Conspectus is the oldest of the academy's lineages of study, begat by the sorcerer Azur. Scholars who follow in his footsteps pursue the mysteries of comets, leading to new kinds of comet sorceries, such as Glintstone Cometshard and Shard Spiral.`,
      img: Karalos,
    },
    {
      title: "3",
      desc: `The Karolos Conspectus is the oldest of the academy's lineages of study, begat by the sorcerer Azur. Scholars who follow in his footsteps pursue the mysteries of comets, leading to new kinds of comet sorceries, such as Glintstone Cometshard and Shard Spiral.`,
      img: Karalos,
    },
  ];

  return (
    <section id="conspectuses">
      <button className="prev" onClick={scrollPrev} disabled={index === 0}>
        <img src={Arrow} alt="Prev" />
      </button>
      <div className="emblaViewport" ref={emblaRef}>
        <div className="emblaContainer">
          {content?.map(({ title, desc, img }, i: number) => (
            <div
              className={`slide ${i === index ? "active" : ""}`}
              key={`conspectus-${i}`}
            >
              <Heading level={2} text={title} />
              <p>{desc}</p>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="next"
        onClick={scrollNext}
        disabled={index === content?.length - 1}
      >
        <img src={Arrow} alt="Next" />
      </button>
    </section>
  );
}

export default Conspectuses;
