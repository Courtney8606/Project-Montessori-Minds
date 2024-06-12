import { Helmet } from "react-helmet-async";
import "./Footer.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";
import { logoutservice } from "../../services/authentification";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    logoutservice();
    navigate("/login");
  };

  const excludedPaths = ["/signup", "/login", "/addstaffmember"];

  const showNavbar =
    !excludedPaths.includes(location.pathname) &&
    !location.pathname.startsWith("/amendstaffmember");

  if (!showNavbar) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>

      <footer className="footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-3"></div>

            <div className="col-6 socials">
              <a
                className="social-icon"
                href="https://instagram.com/montessori_minds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a
                className="social-icon"
                href="https://facebook.com/montessorimindsromford"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a
                className="social-icon"
                href="https://youtube.com/@montessoriminds2797"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </a>

              <a
                className="social-icon"
                href="https://twitter.com/mmdaynursery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <p>62-64 Eastern Rd, Romford, Essex, RM1 3QA</p>
              <p>01708 935695</p>
              <a className="contact" href="mailto:montessori.minds@gmx.com">
                montessori.minds@gmx.com
              </a>
            </div>

            <div className="col-3 employee-feature-list">
              <ul className="employee-features">
                <li>
                  <NavLink to="login">
                    <MainButton
                      text="Employee Portal"
                      style={{
                        backgroundColor: "transparent",
                        border: "None",
                        color: "#00215e",
                        textDecoration: "underline",
                      }}
                    />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#">
                    <MainButton
                      onClick={logout}
                      text="Log out"
                      style={{
                        backgroundColor: "transparent",
                        border: "None",
                        color: "#00215e",
                        textDecoration: "underline",
                      }}
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
