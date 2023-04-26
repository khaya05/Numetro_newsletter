import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
} from 'react-icons/bs';

import "./Footer.scss"

function Footer() {
  return (
    <footer>
      <p>We’re more than movies, we’re an Experience!</p>
      <ul className="socials">
        <li>
          <a
            href="https://web.facebook.com/numetro"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/numetro"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/numetro/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/numetro"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B27861246362&amp;text&amp;type=phone_number&amp;app_ absent=0]"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
