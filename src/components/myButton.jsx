import styles from "@/styles/newButton.module.css";
import { useEffect, useRef, useState } from "react";
import Card from "./card";

export default function MyButton({ click, handleClick, handleAdd, isDarkMode}) {
  const [input, setInput] = useState("");

  return (
    <div>
      <button className={styles.newNote} onClick={handleClick}>
        NEW NOTE +
      </button>
      {click && (
        <Card click={click} handleClick={handleClick} handleAdd={handleAdd} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}
