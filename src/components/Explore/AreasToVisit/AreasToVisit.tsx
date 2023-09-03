import Visit1 from "@assets/images/Explore/Visit1.png";
import Visit2 from "@assets/images/Explore/Visit2.png";
import Visit3 from "@assets/images/Explore/Visit3.png";
import "./styles.scss";

function AreasToVisit() {
  const content = [
    {
      title: "Academy Crystal Caves",
      desc: "Below the architecture of the academy lies one of many sources of Glintstone, primarily used for fueling research. Here you may find the ever-working miners of the tunnels, tasked with harvesting crystals from deep beneath, along with fledgling sorcerers from the academy conducting research under the guidance of the seniors from the Twinsage and Haima conspectuses.",
      img: Visit1,
    },
    {
      title: "Caria Manor",
      desc: "A large estate situated far to the north of Liurnia. Heavily guarded by all manner of creatures as well as its eternal warden, the spectral Royal Knight Loretta. Here lies the bastion of the Carian royals, where our head, Rennala of the Full Moon, comes from. Top sorcerers of the Lazuli Conspectus can find a place among the venerable Carian Knights, annointed by the Lunar Quuen herself.",
      img: Visit2,
    },
    {
      title: "Village of the Albinaurics",
      desc: "The peaceful sanctuary of the Albinaurics can be found to the south of Liurnia, under the grounds of the Cathedral of Manus Celes. Albinaurics are lifeforms made by human hands. Thus, many believe them to live impure lives, untouched by the Erdtree's grace. However, Raya Lucaria sees potential in the population and have granted many an occupation in the academy.",
      img: Visit3,
    },
  ];

  return (
    <section id="areasToVisit">
      <ul>
        {content.map(({ title, desc, img }) => (
          <li key={`visit-${title}`}>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AreasToVisit;
