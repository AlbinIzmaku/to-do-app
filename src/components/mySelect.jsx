"use client";

import BottomArrow from "@/svg/bottomArrow";
import styles from "@/styles/mySelect.module.css";
import { useState } from "react";
import UpperArrow from "@/svg/upperArrow";

export default function MySelect() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div}>
        <div className={styles.all}>
          <input type="text" className={styles.input} />
          <span
            style={{ width: "1px", height: "20px", backgroundColor: "#f7f7f7" }}
          />
        </div>
        {isOpen ? (
          <UpperArrow handleClick={handleClick} />
        ) : (
          <BottomArrow handleClick={handleClick} />
        )}
      </div>
      {isOpen && (
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>All</li>
            <li>Complete</li>
            <li>Incomplete</li>
          </ul>
        </div>
      )}
    </div>
  );
}
