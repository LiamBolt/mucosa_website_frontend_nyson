import styles from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import musocaLogo from '../../assets/icons/mucosa-logo.png'
import { Link } from "react-router-dom"

function Footer() {
  const quickLinks = [
    { name: 'About Us', to: '/about' },
    { name: 'Events', to: '/events' },
    { name: 'News', to: '/news' },
    { name: 'Careers', to: '/career' },
    { name: 'Projects', to: '/projects' }
  ]

  const resources = [
    { name: 'Learning Hub', to: '/career' },
    { name: 'Code Repository', to: '/career' },
    { name: 'Documentation', to: '/career' },
    { name: 'Community Guidelines', to: '/career' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <img src={musocaLogo} alt="MUCOSA Logo" className={styles.logoImage} />
              <span className={styles.logoText}>MUCOSA</span>
            </div>
            <p className={styles.description}>
              Empowering computing students through community, innovation, and practical learning.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@mucosa.org</span>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+(256) 123-456-789</span>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Mbarara University of Science and Technology</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://twitter.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>Resources</h3>
              <ul>
                {resources.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <Link to="https://www.must.ac.ug/university_unit/faculty-of-computing-and-informatics/">Faculty of Computing and Informatics</Link>
                </li>
                <li>
                  <Link to="https://www.must.ac.ug/">Mbarara University of Science and Technology</Link>
                </li>
                <li>
                  <Link to="/about">Email: info@mucosa.org</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} MUCOSA. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 