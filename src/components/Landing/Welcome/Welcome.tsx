import Heading from "@/components/reusables/Heading";
import "./styles.scss";

function Welcome() {
  return (
    <section id="welcome">
      <div className="textContainer">
        <Heading level={2} text="Welcome" />
        <p>
          Welcome to the Academy of Raya Lucaria, the institutional pinnacle of
          research and practice of Glintstone and its sorceries. This website
          offers a glimpse of the activities and ventures of the academy for thy
          perusal.
        </p>
      </div>
      <div className="image"></div>
      {/* <img src={WelcomeImg} alt="" /> */}
    </section>
  );
}

export default Welcome;
