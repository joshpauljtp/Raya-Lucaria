import AcademySealImg from "@/assets/images/Admission/AcademySeal.png";
import "./styles.scss";

function AcademySeal() {
  return (
    <section id="academySeal">
      <img src={AcademySealImg} alt="" />
      <p>
        *Note: Gates may be shut during times of war, or the shattering of the
        Elden Ring
      </p>
    </section>
  );
}

export default AcademySeal;
