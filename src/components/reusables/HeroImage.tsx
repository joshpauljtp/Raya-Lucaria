import { useState } from "react";
import Heading from "./Heading";

function HeroImage({
  imgSrc = "",
  title = "",
}: {
  imgSrc: string;
  title: string;
}) {
  const [imgLoading, setImgLoading] = useState<boolean>(true);

  return (
    <section className="heroImage">
      <img
        className={imgLoading ? "loading" : ""}
        src={imgSrc}
        alt={`Hero image depicting ${title}`}
        onLoad={() => {
          setImgLoading(false);
        }}
      />
      <Heading level={3} text={title} />
    </section>
  );
}

export default HeroImage;
