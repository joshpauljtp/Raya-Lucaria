import Heading from "./Heading";

function HeroImage({
  imgSrc = "",
  title = "",
}: {
  imgSrc: string;
  title: string;
}) {
  return (
    <section className="heroImage">
      <img src={imgSrc} alt="" />
      <Heading level={3} text={title} />
    </section>
  );
}

export default HeroImage;
