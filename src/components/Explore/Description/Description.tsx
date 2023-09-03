import "./styles.scss";
import DescriptionImage1 from "@assets/images/Explore/Description1.png";
import DescriptionImage2 from "@assets/images/Explore/Description2.png";

function Description() {
  return (
    <section id="exploreLiurniaDescription">
      <img src={DescriptionImage1} alt="" id="descriptionImage1" />
      <p>
        Liurnia is one of the few remaining sanctuaries free from the rule of
        the Golden Order, due to the might of the Academy of Raya Lucaria. The
        land has been an unwilling host of many battles between the forces of
        gold and its inhabitants. In an attempt to make peace, the lunar queen,
        Rennala was betrothed to Radagon, a champion of the Golden Order. With
        this, the house of the Moon and the Erdtree were one, and currently live
        in harmony.
        <br />
        <br />
        The majority of Liurnia, known for its vast forests and ever-present
        fog, is sinking into a lake. The eastern coast is home to a highroad,
        connecting the Erdtree capital, Leyndell in the Altus Plateau, with the
        southern landmass of Limgrave. Despite the erosion it faces, Liurnia
        still captivates with its acute deposits of Glintstone across the
        region.
      </p>

      <img src={DescriptionImage2} alt="" id="descriptionImage2" />
    </section>
  );
}

export default Description;
