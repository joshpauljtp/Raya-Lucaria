import { Link } from "react-router-dom";
import { FOOTER_SOURCES, NAV_LINKS } from "@/constants";
import Sigil from "./Sigil";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="logoContainer">
          <Sigil />
          <h6 className="text-center">Copyright Blah Blah Blah 2023</h6>
        </div>
        <div className="textContainer">
          <ul>
            {[NAV_LINKS[0], NAV_LINKS[1], NAV_LINKS[3], NAV_LINKS[2]]?.map(
              ({ name, path }) => (
                <li key={`footerLinks-${name}`}>
                  <Link className="pageLinks" to={path}>
                    {name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <p>
            Sources, in no particular order:{" "}
            {FOOTER_SOURCES.map(({ name, link }) => (
              <React.Fragment key={`footerSource-${name}`}>
                <a
                  href={link}
                  rel="noreferrer noopener"
                  className="text-underline"
                >
                  {name}
                </a>
                ,&nbsp;
              </React.Fragment>
            ))}
            and any others who I might have forgotten.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
