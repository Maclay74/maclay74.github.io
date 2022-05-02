import { contacts, title, content, link } from "./styles.module.scss";

import VkIcon from "./icons/vk.inline.svg";
import EmailIcon from "./icons/email.inline.svg";
import TelegramIcon from "./icons/telegram.inline.svg";
import LinkedInIcon from "./icons/linkedin.inline.svg";

const Contacts = () => {
  const data = [
    { icon: <VkIcon />, url: "https://vk.com/mikefinch74", label: "vk.com" },
    {
      icon: <EmailIcon />,
      url: "mailto:mishakozlov74@gmail.com",
      label: "email",
    },
    {
      icon: <TelegramIcon />,
      url: "https://t.me/mikefinch",
      label: "Telegram",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/mike-kozlov-78b7b318a/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className={contacts} id={"contacts"}>
      <div className={"container"}>
        <div className={content}>
          <h2 className={title}>Contacts</h2>

          {data.map(({ icon, url }) => (
            <a
              className={link}
              href={url}
              key={url}
              target={"_blank"}
              aria-label="Twitter"
              rel={"noreferrer"}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
