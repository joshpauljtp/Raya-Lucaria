import VisitMap from "@assets/images/VisitMap.png";

function Visit() {
  return (
    <section id="visit">
      <div className="textContainer">
        <h2>Visit</h2>
        <p>
          Seek the Academy of Raya Lucaria in the central floodplains of Liurnia
          of the Lakes, between the gales of Limgrave’s Stormveil Castle and the
          golden pastures of the Altus Plateau.
        </p>
        <p>
          Unfamiliar with Liurnia and the lay of her lands? Visit the Habitat
          (link/temp name) page to acquire more details.
        </p>
      </div>
      <div className="imgContainer">
        <img src={VisitMap} alt="" />
      </div>
    </section>
  );
}

export default Visit;
