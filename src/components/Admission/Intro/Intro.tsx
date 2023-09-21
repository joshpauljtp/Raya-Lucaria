import Heading from "@/components/reusables/Heading";
import Astrologer from "@/assets/images/Admission/Astrologer.png";
import "./styles.scss";

function Intro() {
  return (
    <section id="admissionIntro">
      <Heading level={2} text="Admission" />
      <div>
        <img src={Astrologer} alt="" />
        <p>
          Raya Lucaria expresses its gratitude for expressing your interest in
          seeking admission. The academy invites all worthy minds to apply, be
          you a curious Astrologer from the Mountaintops of the Giants, or an
          intellectual nobleman from Limgrave, and beyond.
          <br />
          <br />
          Provided below are the foundational steps on attaining an opportunity
          to be a part of the academy.
        </p>
      </div>
    </section>
  );
}

export default Intro;
