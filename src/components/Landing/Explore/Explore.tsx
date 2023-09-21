import "./styles.scss";
import AcademicsImg from "@assets/images/Landing/Explore-Academics.png";
import CampusImg from "@assets/images/Landing/Explore-Campus.png";
import LocaleImg from "@assets/images/Landing/Explore-Locale.png";
import AdmissionImg from "@assets/images/Landing/Explore-Admission.png";
import Heading from "@/components/reusables/Heading";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Explore() {
  const sectionRef = useRef(null);

  const cardsData = [
    {
      img: AcademicsImg,
      title: "Academics",
      link: "/academics",
    },
    {
      img: CampusImg,
      title: "Campus",
      link: "/campus",
    },
    {
      img: LocaleImg,
      title: "Locale",
      link: "/explore-liurnia",
    },
    {
      img: AdmissionImg,
      title: "Admission",
      link: "/admission",
    },
  ];

  return (
    <section id="exploreRayaLucaria" ref={sectionRef}>
      <Heading level={2} text="Explore Raya Lucaria" />
      <ul>
        {cardsData.map(({ img, title, link }) => (
          <li className="card" key={`exploreCard-${title}`}>
            <Link to={link}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Explore;
