import styles from './SecondaryButton.module.css';

function SecondaryButton({ children, onClick }) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default SecondaryButton;