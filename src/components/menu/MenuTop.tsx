import { NavLink, useLocation } from "react-router-dom";
import "./MenuTop.scss";

interface Props {
  styleMenu?: React.CSSProperties | undefined;
  styleNav?: React.CSSProperties | undefined;
}
export const MenuTop = ({ styleMenu, styleNav }: Props) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="menuTop" style={styleMenu}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={`text-black ${isActive("/") ? "active" : ""}`}
            style={styleNav}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registro"
            className={`text-black ${isActive("/registro") ? "active" : ""}`}
            style={styleNav}
          >
            Registro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ponentes"
            className={`text-black ${isActive("/ponentes") ? "active" : ""}`}
            style={styleNav}
          >
            Ponentes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agenda"
            className={`text-black ${isActive("/agenda") ? "active" : ""}`}
            style={styleNav}
          >
            Agenda
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
