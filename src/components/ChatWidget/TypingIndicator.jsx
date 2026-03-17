import styles from './ChatWidget.module.css';

function TypingIndicator() {
  return (
    <div className={`${styles.messageBubbleWrap} ${styles.messageBubbleWrapAssistant}`}>
      <div className={`${styles.messageBubble} ${styles.messageBubbleAssistant} ${styles.typingBubble}`}>
        <span className={styles.typingDots}>
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
        </span>
      </div>
    </div>
  );
}

export default TypingIndicator;
