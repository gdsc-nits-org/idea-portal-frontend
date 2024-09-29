import styles from "./Footer.module.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaReddit } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.png";
import kofi from "../../public/ko-fi.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerTLText}>
              <h2>Questions?</h2>
              <ul>Contact us through our social media accounts.</ul>
            </div>
            <div className={styles.footerLinks}>
              <a
                href="https://www.linkedin.com/company/gdscnits/mycompany/"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialLinks}
                title="LinkedIn"
              >
                <AiFillLinkedin className={styles.footerBtn1} size={24} />
              </a>
              <a
                href="https://www.facebook.com/gdscnits/"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialLinks}
                title="Facebook"
              >
                <ImFacebook className={styles.footerBtn2} size={24} />
              </a>
              <a
                href="https://www.instagram.com/gdsc_nits/"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialLinks}
                title="Instagram"
              >
                <FiInstagram className={styles.footerBtn3} size={24} />
              </a>
              <a
                href="http://twitter.com/gdscnits"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialLinks}
                title="Twitter"
              >
                <FaTwitter className={styles.footerBtn4} size={24} />
              </a>
              <a
                href="https://www.reddit.com/r/gdscnits/"
                target="_blank"
                rel="noreferrer"
                className={styles.footerSocialLinks}
                title="Reddit"
              >
                <FaReddit className={styles.footerBtn5} size={24} />
              </a>
            </div>
            <div className={styles.footerMail}>
              <ul>or e-mail us at </ul>
              <a href="mailto:gdsc@nits.ac.in">gdsc@nits.ac.in</a>
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <div className={styles.joinChapter}>
              <div className={styles.supportUs}>
                {/* <h3>Support Us</h3> */}
                <a
                  href="https://ko-fi.com/T6T3IAFKX"
                  target="_blank"
                  rel="noreferrer"
                  title="Ko-fi"
                >
                  <Image src={kofi} alt="support us" />
                </a>
              </div>
              <a
                href="https://gdsc.community.dev/national-institute-of-technology-nit-silchar/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Join our chapter</h2>
              </a>
              <ul>to stay updated with our events</ul>
            </div>
          </div>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.footerMiddleMob1}>
            <div className={styles.footerMidAbout}>
              <ul>About</ul>
              <ul className={styles.footerLineY}></ul>
              <Link href="/#introHome" className={styles.footerAbout}>
                Vision
              </Link>
              <Link href="/#timeLine" className={styles.footerAbout}>
                Types of Events
              </Link>
              <Link href="/#ui-ux" className={styles.footerAbout}>
                Google Technologies
              </Link>
            </div>
            <div className={styles.footerMidEvents}>
              <ul>Events</ul>
              <div className={styles.footerLineG}></div>
              <Link href="/events/#upcoming" className={styles.footerEvents}>
                Upcoming Events
              </Link>
              <Link href="/events/#previous" className={styles.footerEvents}>
                Previous Events
              </Link>
            </div>
          </div>
          <div className={styles.footerMiddleMob1}>
            <div className={styles.footerMidProject}>
              <ul>Projects</ul>
              <div className={styles.footerLineB}></div>
              <Link href="/projects/1" className={styles.footerProject}>
                Attendo
              </Link>
              <Link href="/projects/0" className={styles.footerProject}>
                Sellr
              </Link>
              <Link href="/projects/6" className={styles.footerProject}>
                Efficacy
              </Link>
            </div>
            <div className={styles.footerMidTeam}>
              <ul>Team</ul>
              <div className={styles.footerLineR}></div>
              <Link href="/team/#core" className={styles.footerTeam}>
                Core Members
              </Link>
              <Link href="/team/#members" className={styles.footerTeam}>
                Members
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerEnd}>
          <div className={styles.footerEndLeft}>
            <Image src={logo} alt="GDSC NITS" style={{ width: "20%" }} />
            <ul>Google Developer Student Club NIT Silchar</ul>
          </div>

          <div className={styles.footerEndRight}>
            <ul>Google Developer Student Club, NITS. All Rights Reserved</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
