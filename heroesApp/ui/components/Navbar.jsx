import { NavLink, useNavigate } from "react-router-dom";
import "./stylesNavbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("logout");
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="navbar-dark bg-dark miclase">
        <div className="contenedorIzq">
          <div className="navbar-collapse d-flex justify-content-end miclase2">
            <div className="navbar-nav align-items-center">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link " ${isActive ? "active" : ""} />'}`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse d-flex justify-content-end miclase2">
            <div className="navbar-nav align-items-center">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link " ${isActive ? "active" : ""} />'}`
                }
                to="/dc"
              >
                DC
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse d-flex justify-content-end miclase2">
            <div className="navbar-nav align-items-center">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link " ${isActive ? "active" : ""} />'}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse d-flex justify-content-end">
            <div className="navbar-nav align-items-center">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link " ${isActive ? "active" : ""} />'}`
                }
                to="/hero"
              >
                Hero
              </NavLink>
            </div>
          </div>
        </div>

        <div className="contenedorDerecha">
          <div className="navbar-collapse d-flex justify-content-end">
            <div className="navbar-nav align-items-center">
              <button onClick={onLogout}> LogOut</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
