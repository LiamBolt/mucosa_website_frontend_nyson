import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './NewsDetailPage.module.css';
import { fetchNewsDetail } from '../services/newsService';

function NewsDetailPage() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNewsDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchNewsDetail(newsId);
        setNews(data);
        setError(null);
      } catch (err) {
        setError('Failed to load article. Please try again later.');
        if (err.response?.status === 404) {
          navigate('/news', { replace: true });
        }
      } finally {
        setLoading(false);
      }
    };

    loadNewsDetail();
  }, [newsId, navigate]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!news) return null;

  // Helper function to render content based on its type
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ));
    }
    return <p className={styles.paragraph}>{content}</p>;
  };

  return (
    <div className={styles.newsDetailPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          {news.category && <div className={styles.category}>{news.category}</div>}
          <h1 className={styles.title}>{news.title}</h1>
          
          <div className={styles.meta}>
            <div className={styles.timeAndAuthor}>
              <time className={styles.time}>{news.date}</time>
              <div className={styles.authorInfo}>
                <img src={news.author.avatar} alt={news.author.name} className={styles.avatar} />
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{news.author.name}</span>
                  {news.author.role && <span className={styles.authorRole}>{news.author.role}</span>}
                </div>
              </div>
            </div>
          </div>
        </header>

        <figure className={styles.imageContainer}>
          <img src={news.image} alt={news.title} className={styles.image} />
          {news.imageCaption && (
            <figcaption className={styles.imageCaption}>
              {news.imageCaption}
              {news.imageCredit && <span className={styles.imageCredit}>{news.imageCredit}</span>}
            </figcaption>
          )}
        </figure>

        <article className={styles.content}>
          {news.excerpt && <div className={styles.excerpt}>{news.excerpt}</div>}
          {news.content && renderContent(news.content)}
        </article>

        {news.relatedArticles && news.relatedArticles.length > 0 && (
          <section className={styles.relatedArticles}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {news.relatedArticles.map((article, index) => (
                <div key={index} className={styles.relatedArticle}>
                  {article.image && <img src={article.image} alt={article.title} className={styles.relatedImage} />}
                  <h3 className={styles.relatedArticleTitle}>{article.title}</h3>
                  <span className={styles.relatedCategory}>{article.category}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default NewsDetailPage;
