import Heading from "@/components/reusables/Heading";
import AcademicsImg from "@assets/images/Landing/Explore-Academics.png";
import AdmissionImg from "@assets/images/Landing/Explore-Admission.png";
import CampusImg from "@assets/images/Landing/Explore-Campus.png";
import LocaleImg from "@assets/images/Landing/Explore-Locale.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Explore() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState<boolean>(false);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    if (entries?.[0]?.isIntersecting) {
      setActive(true);
    }
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3,
  });

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
      title: "Explore Liurnia",
      link: "/explore-liurnia",
    },
    {
      img: AdmissionImg,
      title: "Admission",
      link: "/admission",
    },
  ];

  useEffect(() => {
    sectionRef.current && observer.observe(sectionRef.current);
    function updateSize() {
      setActive(window.innerWidth < 800);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [sectionRef]);

  return (
    <section
      id="exploreRayaLucaria"
      ref={sectionRef}
      className={active ? "active" : ""}
    >
      <Heading level={2} text="Explore Raya Lucaria" />
      <ul>
        {cardsData.map(({ img, title, link }) => (
          <li className="card" key={`exploreCard-${title}`}>
            <Link to={link}>
              <img src={img} alt={title} />
              <h4>{title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Explore;
