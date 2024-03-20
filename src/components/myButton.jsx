import styles from "@/styles/newButton.module.css";
import { useEffect, useRef, useState } from "react";

export default function MyButton({ click, handleClick, handleAdd }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <button className={styles.newNote} onClick={handleClick}>
        NEW NOTE +
      </button>
      {click && (
        <div className={styles.card}>
          <h2 className={styles.h2}>NEW NOTE</h2>
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
              <button className={styles.cancle} onClick={handleClick}>CANCEL</button>
              <button className={styles.apply} onClick={() => handleAdd(input)}>
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
