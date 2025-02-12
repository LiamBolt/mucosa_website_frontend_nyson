import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsPage.module.css';
import { fetchNews } from '../services/newsService';
import PrimaryButton from '../components/Buttons/PrimaryButton';

// Filter Component
function NewsFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className={styles.filterSection}>
      <button
        className={`${styles.filterButton} ${!activeCategory ? styles.active : ''}`}
        onClick={() => onCategoryChange(null)}
        aria-label="Show all news categories"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
          aria-label={`Filter by ${category}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// News Card Component
function NewsCard({ id, image, category, title, excerpt, date, author }) {
  return (
    <article className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`News: ${title}`} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <div className={styles.author}>
            <img src={author.avatar} alt={author.name} className={styles.avatar} />
            <span>{author.name}</span>
          </div>
          <span className={styles.date}>{date}</span>
        </div>
        <Link to={`/news/${id}`} className={styles.readMoreLink}>
          <button className={styles.readMore} aria-label={`Read more about ${title}`}>
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
}

// News Page Component
function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Technology', 'Community', 'Events', 'Education', 'Career', 'Business', 'Entertainment'];

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const params = {};
        if (activeCategory) params.category = activeCategory;
        if (searchQuery) params.search = searchQuery;
        
        const newsData = await fetchNews(params);
        
        // Validate that we received an array
        if (!Array.isArray(newsData)) {
          throw new Error('Invalid data format received from server');
        }
        
        setNews(newsData);
      } catch (err) {
        console.error('Error loading news:', err);
        setError(
          err.response?.data?.message || 
          'Failed to load news articles. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [activeCategory, searchQuery]);

  // Render loading state
  if (loading) {
    return (
      <div className={styles.newsPage}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading news articles...</div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className={styles.newsPage}>
        <div className={styles.container}>
          <div className={styles.error}>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className={styles.retryButton}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Latest News</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest news, announcements, and stories from the MUCOSA community.
          </p>
        </header>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
            aria-label="Search for news articles"
          />
        </div>

        <NewsFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className={styles.newsGrid}>
          {news.length > 0 ? (
            news.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                {...newsItem}
                // Handle potentially nested category
                category={
                  typeof newsItem.category === 'object' 
                    ? newsItem.category.name 
                    : newsItem.category
                }
              />
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No news articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {news.length > 0 && (
          <div className={styles.loadMore}>
            <PrimaryButton>Load More Articles</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
