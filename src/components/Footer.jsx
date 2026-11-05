import { Link } from "react-router-dom";

import profile from "../data/profile";
import socials from "../data/socials";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <Link className="site-footer__name" to="/">
            {profile.name}
          </Link>
          <p>{profile.title}</p>
        </div>

        <nav className="site-footer__links" aria-label="Social links">
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socials.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
