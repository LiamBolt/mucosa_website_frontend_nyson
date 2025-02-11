import { useState, useEffect, useRef } from 'react'
import styles from './AboutPage.module.css'
import ActiveMembers from '../../src/assets/icons/active-members.png'
import EventsOrganised from '../../src/assets/icons/events.png'
import Projects from '../../src/assets/icons/projects.png'
import Partners from '../../src/assets/icons/partners.png'
import victorImage from '../../src/assets/images/victorImage.jpg'
import simonImage from '../../src/assets/images/simonImage.jpg'
import haveryImage from '../../src/assets/images/haveryImage.jpg'
import moureenImage from '../../src/assets/images/moureenImage.jpg'
import prossyImage from '../../src/assets/images/prossyImage.jpg'
import sarahImage from '../../src/assets/images/sarahImage.jpg'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import PrimaryButton from  '../../src/components/Buttons/PrimaryButton'

function VisionMission() {
  return (
    <section className={styles.visionMission}>
      <div className={styles.visionSection}>
        <h2>Our Vision</h2>
        <p>
          To be the leading student community that empowers and connects computing
          students, fostering innovation and excellence in technology education.
        </p>
      </div>
      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To create a vibrant community that enhances learning, promotes
          collaboration, and prepares students for successful careers in technology
          through practical experiences, mentorship, and industry connections.
        </p>
      </div>
    </section>
  )
}

function AnimatedNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const elementRef = useRef(null)
  const startValue = parseInt(value.replace('+', ''))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const start = 0
    const end = startValue
    const stepTime = Math.abs(Math.floor(duration / end))
    
    if (countRef.current) return
    
    countRef.current = setInterval(() => {
      setCount(prev => {
        const next = prev + 1
        if (next === end) {
          clearInterval(countRef.current)
          return end
        }
        return next
      })
    }, stepTime)

    return () => {
      if (countRef.current) {
        clearInterval(countRef.current)
      }
    }
  }, [startValue, duration, isVisible])

  return (
    <span ref={elementRef}>
      {count}+
    </span>
  )
}

function ImpactMetric({ number, label, icon }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricContent}>
        <div className={styles.metricIcon}>
          <img src={icon} alt={label} />
        </div>
        <div className={styles.metricNumber}>
          <AnimatedNumber value={number} />
        </div>
        <div className={styles.metricLabel}>{label}</div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
          rows={5}
        />
      </div>
      <PrimaryButton 
        type="submit" 
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </PrimaryButton >
      {status === 'success' && (
        <p className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
    </form>
  )
}

function TeamMember({ name, role, image, bio, socials }) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
        <p className={styles.memberBio}>{bio}</p>
        <div className={styles.socialLinks}>
          {socials.map((social, index) => {
            let IconComponent;
            switch (social.platform.toLowerCase()) {
              case 'linkedin':
                IconComponent = FaLinkedin;
                break;
              case 'twitter':
                IconComponent = FaTwitter;
                break;
              case 'github':
                IconComponent = FaGithub;
                break;
              default:
                IconComponent = null;
            }
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {IconComponent && <IconComponent className={styles.socialIcon} />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Nakimuli",
      role: "President",
      image: prossyImage,
      bio: "Final year Computer Science student with a passion for AI and community building. Leading MUCOSA's initiatives to create an inclusive tech community.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    },
    {
      name: "David Okello",
      role: "Vice President",
      image: victorImage,
      bio: "Software Engineering student specializing in web development. Passionate about mentoring and organizing tech workshops for students.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    },
    {
      name: "Patricia Zawedde",
      role: "Events Coordinator",
      image: moureenImage,
      bio: "Information Technology student with excellent organizational skills. Coordinates MUCOSA's hackathons, workshops, and networking events.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    },
    {
      name: "Emmanuel Mugisha",
      role: "Technical Lead",
      image: simonImage,
      bio: "Computer Engineering student focused on IoT and embedded systems. Leads technical projects and coding bootcamps within MUCOSA.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    },
    {
      name: "Grace Atuhaire",
      role: "Communications Director",
      image: sarahImage,
      bio: "Information Systems student with a flair for digital marketing. Manages MUCOSA's social media presence and community engagement.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    },
    {
      name: "Brian Tumusiime",
      role: "Treasurer",
      image: haveryImage,
      bio: "Computer Science student with strong analytical skills. Manages MUCOSA's resources and coordinates sponsorship programs.",
      socials: [
        { platform: "LinkedIn", link: "https://linkedin.com/in/david-okello" },
        { platform: "GitHub", link: "https://github.com/davidokello" },
        { platform: "Twitter", link: "https://twitter.com/sarahnakimuli" },
      ]
    }
  ]

  const impactMetrics = [
    {
      number: "500",
      label: "Active Members",
      icon: ActiveMembers
    },
    {
      number: "50",
      label: "Events Organized",
      icon: EventsOrganised
    },
    {
      number: "30",
      label: "Industry Partners",
      icon: Partners
    },
    {
      number: "200",
      label: "Project Collaborations",
      icon: Projects
    }
  ]

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>About MUCOSA</h1>
          <p className={styles.pageDescription}>
            Learn about our community, mission, and the people behind MUCOSA
          </p>
        </header>

        <VisionMission />

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <section className={styles.impactSection}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.metricsGrid}>
            {impactMetrics.map((metric, index) => (
              <ImpactMetric key={index} {...metric} />
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <p>Have questions or want to get involved? Reach out to us!</p>
              <div className={styles.contactDetails}>
                <p>
                  <strong>Email:</strong> info@mucosa.org
                </p>
                <p>
                  <strong>Location:</strong> Faculty of Computing and Informatics,
                  Mbarara University of Science and Technology
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage 