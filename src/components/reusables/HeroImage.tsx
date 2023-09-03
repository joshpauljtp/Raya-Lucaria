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
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <Heading level={3} text={title} />
    </section>
  );
}

export default HeroImage;
