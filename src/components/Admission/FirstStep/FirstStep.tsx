import "./styles.scss";
import FirstStepImg from "@/assets/images/Admission/Pebble.png";

function FirstStep() {
  return (
    <section id="firstStep">
      <img src={FirstStepImg} alt="" />
      <p>
        The first step to beginning your journey into gaining true knowledge of
        sorcery is by mastering the fundamental spell - Glinstone Pebble. This
        most basic spell will test to see if you are of sufficient to further
        pursue Glintstone sorcery, and a place at Raya Lucaria.
      </p>
      <p>
        Once you have mastered the art of the Glinstone Pebble, claim for
        yourself an Academy scroll. Give the scroll to a learned sorcerer to
        learn Great Glintstone Shard and Swift Glintstone Shard.
      </p>
      <p>
        Those unfit for the stone crown typically end their journies at these
        steps. However, should you succeed and find yourself intellectually
        robust and talented in the art of Glinstone sorceries, you will be
        granted admission into the academy
      </p>
    </section>
  );
}

export default FirstStep;
