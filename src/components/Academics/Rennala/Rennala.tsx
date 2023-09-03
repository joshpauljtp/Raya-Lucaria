import RennalaImg from "@assets/images/Academics/Rennala.png";
import FullMoonScroll from "@assets/images/Academics/FullMoonScroll.png";
import "./styles.scss";

function Rennala() {
  return (
    <section id="academicsRennala">
      <img src={RennalaImg} alt="" className="rennalaImg" />
      <h1>Rennala, Queen of the Full Moon</h1>

      <div>
        <img src={FullMoonScroll} alt="" />
        <p>
          The young astrologer gazed at the night sky as she walked. She had
          always chased the stars every step of her journey. Then she met the
          full moon — and, in time, the astrologer became a queen.
        </p>
      </div>
      <p>
        Bewitched by the majesty of the night sky she could conjure, Rennala
        quickly arose from a humble pilgrim astrologer to the master of the
        academy. She also led the Glintstone Knights and established the house
        of Caria as royalty. With this, the academy’s future was safeguarded by
        the Carian royals for years to come.
      </p>
      <p>
        Rennala was also a key figure in the Second Liurnian War, which saw the
        armie of the Golden Order from Leyndell face-off against the academy and
        the Carians. No victory for the golden, nor for the moon was won.
        However, peace did emerge. Radagon. the champion of the Golden Order,
        cleansed himself with celestial dew, repented his territorial
        aggressions, and swore his love to Rennala. The Order of the Erdtree and
        the fate of the moon were conjoined, and all the wounds of war forgiven.
      </p>
    </section>
  );
}

export default Rennala;
