import "./styles.scss";
import HighlightsImg from "@assets/images/Campus/Academy.jpg";

function Highlights() {
  return (
    <section id="highlights">
      <img src={HighlightsImg} alt="" />
      <div>
        <p>
          As a sorcerer of Raya Lucaria, you can enjoy the various facilities
          and amenities of the academy.{" "}
        </p>
        <ul>
          <li>
            The Grand Library offers all of Raya Lucaria’s findings and research
            on sorceries, from its inception.{" "}
          </li>
          <li>
            Find yourself at the Debate Parlor to witness or be a part of the
            parley of new and old sorceries and other subjects.
          </li>
          <li>
            The academy grounds provide a perfect environment to relax or
            ruminate.
          </li>
          <li>
            The best students are offered a spot at the graveyard inside the
            academy, to be buried among the great sorcerers who preceded them.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Highlights;
