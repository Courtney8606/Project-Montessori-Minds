import { Helmet } from "react-helmet-async";
import "./Footer.css";

export const Footer = () => {

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
      <footer>
        <div className="footer col-12">
          <a className="social-icon" href="https://instagram.com/montessori_minds" target="blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a className="social-icon" href="https://facebook.com/montessorimindsromford" target="blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a className="social-icon" href="https://youtube.com/@montessoriminds2797" target="blank">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>

          <a className="social-icon" href="https://twitter.com/mmdaynursery" target="blank">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <p>62-64 Eastern Rd, Romford, Essex, RM1 3QA</p>
			  <p>01708 935695</p>
			  <a className="contact" href="mailto:montessori.minds@gmx.com">
				montessori.minds@gmx.com
		      </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
