import Sigil from "@/components/reusables/Sigil";
import AcademyRobe from "@/assets/images/Campus/AcademyRobe.png";
import "./styles.scss";

function Attire() {
  return (
    <section id="attire">
      <div className="imgContainer">
        <Sigil />
        <img src={AcademyRobe} alt="Academy Robe" />
      </div>
      <p>
        Those who dedicate themselves to the study of glintstones formed from
        starry amber receive this modest yet elegant deep blue garb along with
        their vows of virtue and austerity.
      </p>
      <p>
        For those enrolled in a particular conspectus, the stone crown provided
        by the conspectus magistrate is also a required part of the academy
        uniform.
      </p>
      <p>
        The academy also provides foundational scrolls and the academy’s own
        Glintstone staff to all new sorcerers to aid in the study and research
        of Glintstone, be it under the guidance of a conspectus or on thine own
        accord.
      </p>
    </section>
  );
}

export default Attire;
