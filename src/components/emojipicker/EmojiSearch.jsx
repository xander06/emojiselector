import styles from  './emojipicker.module.scss';

 function EmojiSearch({ onSearch }) {
  return <input className={styles.search} onChange={onSearch} />;
}
export default EmojiSearch