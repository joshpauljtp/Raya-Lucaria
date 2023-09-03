import Heading from "@/components/reusables/Heading";
import "./styles.scss";

function Welcome() {
  return (
    <section id="welcome">
      <Heading level={2} text="Welcome" />
      <p>
        Long ago, an astrologer looked up to the sky, and glimpsed the Primeval
        Current in the sky above. Then miraculously, what they saw in the cosmos
        manifested in reality, and the very amber of the stars rained down on
        the Lands Between. This Glinstone of the cosmos would go on to inspire
        those that studied it - but there was also a darkness between the stars,
        and what some saw, would break their minds, and inspire a fate worse
        than death. And so, atop and amidst the enormous quantities of
        Glintstone in the lakes of Liurnia, a place of learning that
        institutionalized the practice of Glintstone sorcery was built - the
        Academy of Raya Lucaria.
      </p>
    </section>
  );
}

export default Welcome;
