import styles from  './emojiPicker.module.scss';

function EmojiButton({ emoji, onClick }) {
  function handleOnClick() {
    onClick(emoji);
  }

  return (
    <button onClick={handleOnClick} className={styles.emojiButton}>
      {emoji.symbol}
    </button>
  );
}
export default EmojiButton