import styles from  '../emojipicker.module.scss';

function EmojiList({ children }) {
  return <div className={styles.emojisList}>{children}</div>;
}

export default EmojiList