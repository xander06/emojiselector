import { useRef } from "react";
import styles from  '../emojipicker.module.scss';
import EmojiPicket from "./EmojiPicker";

function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div className={styles.inputContainer}>
      <input ref={inputRef} />
      <EmojiPicket ref={inputRef} />
      
    </div>
  );
}
export default EmojiPickerInput