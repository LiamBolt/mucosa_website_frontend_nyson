import { useState } from 'react';
import styles from './ProjectsPage.module.css';
import ProjectImage1 from '../../src/assets/images/student-portal.png';
import ProjectImage2 from '../../src/assets/images/event-software.jpg';
import ProjectImage3 from '../../src/assets/images/simply-work.webp';

function ProjectCard({ title, description, image, link, tech}) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.projectImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Github
            </a>
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
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'web', 'mobile', 'AI', 'open-source'];

  const projects = [
    {
      title: "Mucosa Music Player",
      description: "A web-based music streaming application for the Mucosa community.",
      image: ProjectImage1,
      category: "web",
      link: "https://mucosa-music.com",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Music Analyzer",
      description: "A tool that analyzes music trends using AI and machine learning.",
      image: ProjectImage2,
      category: "AI",
      link: "https://ai-music-analyzer.com",
      tech: ["Python", "TensorFlow", "Flask"]
    },
    {
      title: "Open-Source Collaboration Platform",
      description: "A platform for developers to collaborate on open-source music tech projects.",
      image: ProjectImage3,
      category: "open-source",
      link: "https://opensource-music.dev",
      tech: ["Next.js", "GraphQL", "PostgreSQL"]
    },
    {
      title: "Mucosa Music Player",
      description: "A web-based music streaming application for the Mucosa community.",
      image: ProjectImage1,
      category: "web",
      link: "https://mucosa-music.com",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Music Analyzer",
      description: "A tool that analyzes music trends using AI and machine learning.",
      image: ProjectImage2,
      category: "AI",
      link: "https://ai-music-analyzer.com",
      tech: ["Python", "TensorFlow", "Flask"]
    },
    {
      title: "Open-Source Collaboration Platform",
      description: "A platform for developers to collaborate on open-source music tech projects.",
      image: ProjectImage3,
      category: "open-source",
      link: "https://opensource-music.dev",
      tech: ["Next.js", "GraphQL", "PostgreSQL"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Community Projects</h1>
          <p className={styles.pageDescription}>Explore projects created by members of the Mucosa community.</p>
        </header>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.categoryFilters}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}