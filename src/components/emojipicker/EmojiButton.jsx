import styles from "./EmojiPicker.module.scss";

export default function EmojiButton({ emoji, onClick }) {
  function handleOnClick() {
    onClick(emoji);
  }

  return (
    <button onClick={handleOnClick} className={styles.emojiButton}>
      {emoji.symbol}
    </button>
  );
}