import { useState } from 'react'
import styles from './CareerPage.module.css'
import frontendImage from '../assets/icons/frontend.png'
import BackendImage from '../assets/icons/backend-icon.png'
import FullStackImage from '../assets/icons/full-stack.png'
import MobileAppImage from '../assets/icons/mobile-app.png'
import DevOps from '../assets/icons/dev-ops.png'
import DataAnalyst from '../assets/icons/data-analyst.png'
import MachineLearnig from '../assets/icons/machine-learning.png'
import DataEngImage from '../assets/icons/data-eng.png'
import CyberAnalyst from '../assets/icons/cyber.png'
import HackerIcon from '../assets/icons/HackerIcon.png'
import JsIcon from '../assets/icons/javascript.png'

function RoadmapSection({ title, items }) {
  return (
    <div className={styles.roadmapSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.roadmapGrid}>
        {items.map((item, index) => (
          <div key={index} className={styles.roadmapItem}>
            <div className={styles.roadmapIcon}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
            {item.skills && (
              <div className={styles.skillsList}>
                {item.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function JobCard({ title, company, location, type, description, requirements, link }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>{title}</h3>
        <div className={styles.jobMeta}>
          <span className={styles.company}>{company}</span>
          <span className={styles.location}>{location}</span>
          <span className={styles.jobType}>{type}</span>
        </div>
      </div>
      <p className={styles.jobDescription}>
        {isExpanded ? description : `${description.slice(0, 150)}...`}
      </p>
      {!isExpanded && (
        <button 
          className={styles.expandButton}
          onClick={() => setIsExpanded(true)}
        >
          Read More
        </button>
      )}
      {isExpanded && (
        <>
          <div className={styles.requirements}>
            <h4>Requirements:</h4>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.applyButton}
          >
            Apply Now
          </a>
        </>
      )}
    </div>
  )
}

function ResourceCard({ title, description, link, icon }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceCard}
    >
      <div className={styles.resourceIcon}>
        <img src={icon} alt={title} />
      </div>
      <h3 className={styles.resourceTitle}>{title}</h3>
      <p className={styles.resourceDescription}>{description}</p>
    </a>
  )
}

function CareerPage() {
  const [activeTab, setActiveTab] = useState('roadmap')

  const roadmapData = {
    'Software Development': [
      {
        title: "Frontend Developer",
        description: "Build user interfaces and interactive web applications",
        icon: frontendImage,
        skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"]
      },
      {
        title: "Backend Developer",
        description: "Develop server-side logic and databases",
        icon: BackendImage,
        skills: ["Node.js", "Python", "Java", "SQL", "APIs"]
      },
      {
        title: "Full Stack Developer",
        description: "Handle both frontend and backend development",
        icon: FullStackImage,
        skills: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs"]
      },
      {
        title: "Mobile App Developer",
        description: "Develop mobile applications for Android and iOS",
        icon: MobileAppImage,
        skills: ["React Native", "Flutter", "Swift", "Kotlin"]
      },
      {
        title: "DevOps Engineer",
        description: "Manage infrastructure, CI/CD pipelines, and deployments",
        icon: DevOps,
        skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux"]
      }
    ],
    'Data Science': [
      {
        title: "Data Analyst",
        description: "Analyze data and create insights",
        icon: DataAnalyst,
        skills: ["Python", "SQL", "Statistics", "Data Visualization"]
      },
      {
        title: "Machine Learning Engineer",
        description: "Develop AI models and machine learning algorithms",
        icon: MachineLearnig,
        skills: ["TensorFlow", "PyTorch", "Deep Learning", "Big Data"]
      },
      {
        title: "Data Engineer",
        description: "Build data pipelines and manage databases",
        icon: DataEngImage,
        skills: ["SQL", "ETL", "BigQuery", "Spark", "Kafka"]
      }
    ],
    'Cybersecurity': [
      {
        title: "Cybersecurity Analyst",
        description: "Protect systems and networks from cyber threats",
        icon: CyberAnalyst,
        skills: ["Network Security", "Ethical Hacking", "Penetration Testing"]
      },
      {
        title: "Ethical Hacker",
        description: "Test security systems by simulating cyber attacks",
        icon: HackerIcon,
        skills: ["Penetration Testing", "Kali Linux", "Python", "Metasploit"]
      }
    ]
  };  

  const jobs = [
    {
      title: "Junior Software Developer",
      company: "Tech Corp Uganda",
      location: "Kampala, Uganda",
      type: "Full-time",
      description: "We are seeking a motivated junior software developer to join our growing team...",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Knowledge of JavaScript and React",
        "Strong problem-solving skills"
      ],
      link: "https://example.com/apply"
    },
    {
      title: "Frontend Developer",
      company: "InnovateX Solutions",
      location: "Remote",
      type: "Contract",
      description: "We need a skilled frontend developer to create responsive web applications.",
      requirements: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React.js or Vue.js",
        "Strong UI/UX understanding"
      ],
      link: "https://example.com/apply"
    },
    {
      title: "Data Analyst",
      company: "Data Insights Ltd.",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Analyze business data and provide key insights to drive decision-making.",
      requirements: [
        "Experience in SQL and Python",
        "Strong data visualization skills",
        "Knowledge of statistical analysis"
      ],
      link: "https://example.com/apply"
    },
    {
      title: "Mobile App Developer",
      company: "StartUp App Hub",
      location: "Kampala, Uganda",
      type: "Part-time",
      description: "Looking for an experienced mobile app developer to work on our Android and iOS apps.",
      requirements: [
        "Experience in React Native or Flutter",
        "Knowledge of Firebase and REST APIs",
        "Previous experience in mobile app development"
      ],
      link: "https://example.com/apply"
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Nexus",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure and CI/CD pipelines for our global team.",
      requirements: [
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of automation and scripting",
        "Proficiency in Linux systems"
      ],
      link: "https://example.com/apply"
    }
  ];  

  const resources = [
    {
      title: "Free Coding Bootcamp",
      description: "Learn to code with our comprehensive online curriculum",
      icon: DevOps,
      link: "https://example.com/bootcamp"
    },
    {
      title: "JavaScript Mastery Course",
      description: "Advanced JavaScript concepts for web developers",
      icon: JsIcon,
      link: "https://example.com/js-course"
    },
    {
      title: "Full-Stack Developer Roadmap",
      description: "Step-by-step guide to becoming a full-stack developer",
      icon: FullStackImage,
      link: "https://example.com/fullstack-roadmap"
    },
    {
      title: "Machine Learning for Beginners",
      description: "Understand the basics of AI and machine learning",
      icon: MachineLearnig,
      link: "https://example.com/ml-course"
    },
    {
      title: "Cybersecurity Essentials",
      description: "Learn how to protect networks and data from cyber threats",
      icon: HackerIcon,
      link: "https://example.com/cybersecurity"
    }
  ];  

  return (
    <div className={styles.careerPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Career Development</h1>
          <p className={styles.pageDescription}>
            Explore career paths, find opportunities, and access resources to help you succeed
          </p>
        </header>

        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'roadmap' ? styles.active : ''}`}
            onClick={() => setActiveTab('roadmap')}
          >
            Career Roadmap
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'jobs' ? styles.active : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Opportunities
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'roadmap' && (
            <div className={styles.roadmapContent}>
              {Object.entries(roadmapData).map(([category, items]) => (
                <RoadmapSection key={category} title={category} items={items} />
              ))}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className={styles.jobsContent}>
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className={styles.resourcesContent}>
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CareerPage 