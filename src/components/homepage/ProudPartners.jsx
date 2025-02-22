import styles from './ProudPartners.module.css';
import PrimaryButton from '../Buttons/PrimaryButton';
import MicrosoftImage from '../../assets/icons/microsoft-logo.png';
import GoogleImage from '../../assets/icons/google-g.png';
import GitHubImage from '../../assets/icons/github.png';
import chatGPT from '../../assets/icons/chat-gpt.png';
import ZoomImage from '../../assets/icons/zoom.png';
import { Link } from "react-router-dom"

function PartnerLogo({ name, logo, website }) {
  return (
    <a 
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.partnerLogo}
    >
      <div 
        className={styles.logo}
        style={{ backgroundImage: `url(${logo})` }}
        title={name}
      />
    </a>
  );
}

function ProudPartners() {
  const partners = [
    {
      name: "Microsoft",
      logo: MicrosoftImage,
      website: "https://microsoft.com"
    },
    {
      name: "Google Developer Groups",
      logo: GoogleImage,
      website: "https://developers.google.com/community/gdg"
    },
    {
      name: "GitHub Education",
      logo: GitHubImage,
      website: "https://education.github.com"
    },
    {
      name: "Chat GPT",
      logo: chatGPT,
      website: "https://chatbot.com"
    },
    {
      name: "Zoom",
      logo: ZoomImage,
      website: "https://zoom.us"
    }
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Proud Partners</h2>
          <p className={styles.subtitle}>
            Working together with industry leaders to empower the next generation of tech innovators
          </p>
        </div>

        <div className={styles.logosGrid}>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Interested in partnering with MUCOSA?
          </p>
          <Link to="/become-a-partner">
              <PrimaryButton>
                Become a Partner
              </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProudPartners;