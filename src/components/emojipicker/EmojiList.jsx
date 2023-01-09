import styles from  './emojiPicker.module.scss';

function EmojiList({ children }) {
  return <div className={styles.emojisList}>{children}</div>;
}

export default EmojiList