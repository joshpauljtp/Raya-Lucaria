import Heading from "@/components/reusables/Heading";
import "./styles.scss";
import CarianKnightImg from "@/assets/images/Campus/Carian Knight.png";

function Defence() {
  return (
    <section id="defence">
      <img src={CarianKnightImg} alt="" />
      <div>
        <Heading level={3} text="Protection & Defence" />
        <p>
          Liurnia and her lands have seen many a battle, with it hosting two
          great wars that will leave it battle-scarred for the rest of history.
        </p>
        <p>
          Raya Lucaria has been its bastion of hope ever since, providing a
          deadly blow to any faction vying for power over Liurnia. The Cuckoo
          Knights are among the ranks of the Academy’s army, along with the
          Lunar Queen’s anointed Carian Knights.{" "}
        </p>
        <p>
          If you would also wish to join them in battle, be it for learning or
          for Liurnia, seek the Lazuli conspectus.
        </p>
      </div>
    </section>
  );
}

export default Defence;
