import "./styles.scss";
import AcademicsImg from "@assets/images/Landing/Explore-Academics.png";
import CampusImg from "@assets/images/Landing/Explore-Campus.png";
import LocaleImg from "@assets/images/Landing/Explore-Locale.png";
import AdmissionImg from "@assets/images/Landing/Explore-Admission.png";
import Heading from "@/components/reusables/Heading";
import { useRef } from "react";

function Explore() {
  const sectionRef = useRef(null);

  const cardsData = [
    {
      img: AcademicsImg,
      title: "Academics",
    },
    {
      img: CampusImg,
      title: "Campus",
    },
    {
      img: LocaleImg,
      title: "Locale",
    },
    {
      img: AdmissionImg,
      title: "Admission",
    },
  ];

  return (
    <section id="exploreRayaLucaria" ref={sectionRef}>
      <Heading level={2} text="Explore Raya Lucaria" />
      <ul>
        {cardsData.map(({ img, title }) => (
          <li className="card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Explore;
