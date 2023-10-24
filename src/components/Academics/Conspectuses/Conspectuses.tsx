import useEmblaCarousel from "embla-carousel-react";
import "./styles.scss";
import { useCallback } from "react";
import Arrow from "@assets/images/Academics/CarouselArrow.svg";
import Heading from "../../reusables/Heading";
import { CONSPECTUS_DATA } from "./constants";

function Conspectuses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <section id="conspectuses">
      <button className="prev" onClick={scrollPrev}>
        <img src={Arrow} alt="Prev" />
      </button>
      <div className="emblaViewport" ref={emblaRef}>
        <div className="emblaContainer">
          {CONSPECTUS_DATA?.map(({ title, desc, img }, i: number) => (
            <div className={`slide`} key={`conspectus-${i}`}>
              <Heading level={2} text={title} />
              <p>{desc}</p>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={scrollNext}>
        <img src={Arrow} alt="Next" />
      </button>
    </section>
  );
}

export default Conspectuses;
