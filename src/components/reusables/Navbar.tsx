import { NAV_LINKS } from "@/constants";
import { useLayoutEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sigil from "./Sigil";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < 800);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const links = useMemo(() => {
    if (isMobile) {
      return [
        { name: "Home", path: "/", state: { noIntro: true } },
        ...NAV_LINKS,
      ];
    } else return NAV_LINKS;
  }, [isMobile]);

  const onLinkClick = () => [setIsMobileNavOpen(false)];

  return (
    <header className="headerActive" data-isMobile={isMobile}>
      {isMobile ? (
        <Sigil
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          style={{ flexShrink: 0 }}
        />
      ) : (
        <Link to="/" state={{ noIntro: true }}>
          <Sigil />
        </Link>
      )}
      <nav className={`${isMobileNavOpen ? "open" : "closed"}`}>
        <ul>
          {links.map(({ name, path, ...rest }) => (
            <li key={`navLink-${name}`}>
              <NavLink
                to={path}
                onClick={onLinkClick}
                state={(rest as any)?.state ?? {}}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
