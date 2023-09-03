import RennalaImage from "@assets/images/Landing/Rennala.png";
import "./styles.scss";

function RennalaMessage() {
  return (
    <section id="rennalaMessage">
      <div className="imgContainer">
        <img src={RennalaImage} alt="" />
        <h2>
          "Thy Fate Lieth Under <br />
          Mine Moon"
        </h2>
      </div>
      <p>
        “Fledgling culver, is it thy wish to be born anew? Perhaps as a means to
        embolden thy knowledge of the Primeval Current that surrounds us, or to
        forge a new conspectus of sorcery at our academy? Should thou stay true
        to the path of our teachings and sorceries, you too may attain thy
        dreams of grandeur. Prithee, seek our grand academy to find thy place in
        the night sky.”
        <br />
        <br />- Rennala of the Full Moon, last Queen of Caria and head of the
        Academy of Raya Lucaria
      </p>
    </section>
  );
}

export default RennalaMessage;
