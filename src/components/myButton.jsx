import styles from "@/styles/newButton.module.css";
import { useState } from "react";

export default function MyButton() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <button className={styles.newNote}>NEW NOTE +</button>
      <div className={styles.card}>
        <h2 className={styles.h2}>NEW NOTE</h2>
        <div className={styles.secondDiv}>
          <input placeholder="New note..." className={styles.input} />
          <div className={styles.buttons}>
            <button className={styles.cancle}>CANCEL</button>
            <button className={styles.apply}>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
}
