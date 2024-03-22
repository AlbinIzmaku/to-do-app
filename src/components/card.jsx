import styles from "@/styles/card.module.css";
import { useState } from "react";
export default function Card({ handleClick, handleAdd, isDarkMode }) {
  const [input, setInput] = useState("");
  return (
    <div className={`${styles.card} ${isDarkMode ? styles.darkCard : ""}`}>
      {/* <h2 className={styles.h2}>NEW NOTE</h2> */}
      <h2 className={`${styles.h2} ${isDarkMode ? styles.darkText : ""}`}>
        New NOTE
      </h2>
      <div className={styles.secondDiv}>
        <input
          placeholder="New note..."
          className={styles.input}
          autoFocus
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className={styles.buttons}>
          <button className={styles.cancle} onClick={handleClick}>
            CANCEL
          </button>
          <button className={styles.apply} onClick={() => handleAdd(input)}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
