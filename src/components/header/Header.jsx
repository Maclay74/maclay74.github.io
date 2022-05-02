import {
  header,
  about,
  profilePhoto,
  name,
  description,
  menu,
  email,
  content,
} from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const onLinkClick = (event) => {
  event.preventDefault();
  const element = document.querySelector(event.target.getAttribute("href"));
  element.scrollIntoView({ block: "start", behavior: "smooth" });
};

const Header = () => {
  const emailLink = "mishakozlov74@gmail.com";

  const links = ["Solutions", "Examples", "Contacts"];

  return (
    <div className={header}>
      <div className="container">
        <div className={content}>
          <div className={about}>
            <StaticImage
              src={"../../images/photo.jpg"}
              alt={"Maclay74"}
              className={profilePhoto}
            />
            <div className={name}>Maclay74</div>
            <div className={description}>Developer</div>
          </div>

          <div className={menu}>
            {links.map((link) => (
              <a
                key={link}
                href={"#" + link.toLowerCase()}
                rel={"noreferrer"}
                onClick={onLinkClick}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            className={email}
            target={"_blank"}
            rel={"noreferrer"}
            href={"mailto:" + emailLink}
          >
            {emailLink}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
