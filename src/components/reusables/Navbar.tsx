import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "@/constants";
import Sigil from "./Sigil";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <Sigil />
      </Link>
      <nav>
        <ul>
          {NAV_LINKS.map(({ name, path }) => (
            <li key={`navLink-${name}`}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
