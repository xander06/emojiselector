import styles from  '../emojipicker/emojiPicker.module.scss';

 function EmojiSearch({ onSearch }) {
  return <input className={styles.search} onChange={onSearch} />;
}
export default EmojiSearch