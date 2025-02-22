import styles from './PrimaryButton.module.css';

function PrimaryButton({ children, onClick, className, overrideStyles, disabled }) {
  return (
    <button
      className={`${overrideStyles || styles.primaryButton} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
