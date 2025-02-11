import styles from './ShowcaseProjects.module.css'
import { Link } from "react-router-dom"
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import studentPortalImage from '../../assets/images/student-portal.png'
import EventSoftwareImage from '../../assets/images/event-software.jpg'
import resourcesHubImage from '../../assets/images/simply-work.webp'

function ProjectCard({ title, description, tech, image, github }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.projectImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.techItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShowcaseProjects() {
  const projects = [
    {
      title: "Student Portal",
      description: "A comprehensive portal for managing student academic records and resources.",
      tech: ["React", "Node.js", "MongoDB"],
      image: studentPortalImage,
      github: "https://github.com/mucosa/student-portal",
    },
    {
      title: "Event Management System",
      description: "Digital platform for organizing and managing MUCOSA community events.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image: EventSoftwareImage,
      github: "https://github.com/mucosa/event-system",
    },
    {
      title: "Learning Resources Hub",
      description: "Centralized platform for sharing educational resources and tutorials.",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
      image: resourcesHubImage,
      github: "https://github.com/mucosa/learning-hub",
    }
  ]

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Showcase</h2>
          <p className={styles.subtitle}>
            Discover innovative projects built by our community members
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="#">
              <PrimaryButton>
                Submit Your Project
              </PrimaryButton>
          </Link>
          <Link to="/projects">
              <SecondaryButton>
                View All Projects
              </SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseProjects 