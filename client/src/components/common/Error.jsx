import { Link } from 'react-router-dom';
import styles from './Error.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Page Not Found</h1>
          <p className={styles.pageDescription}>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/" className={styles.homeLink}>
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;