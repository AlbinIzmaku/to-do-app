"use client";

import { useState } from "react";
import Link from "next/link";
import BottomArrow from "@/svg/bottomArrow";
import UpperArrow from "@/svg/upperArrow";
import styles from "@/styles/mySelect.module.css";

export default function MySelect({ options, handleOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input type="text" defaultValue={options} className={styles.input} />
        <span />
        {isOpen ? (
          <UpperArrow handleClick={handleClick} />
        ) : (
          <BottomArrow handleClick={handleClick} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.list}>
          <li
            onClick={() => {
              handleOptions("All");
              setIsOpen(!isOpen);
            }}
          >
            <Link href="">All</Link>
          </li>
          <li
            onClick={() => {
              handleOptions("Complete");
              setIsOpen(!isOpen);
            }}
          >
            <Link href="">Complete</Link>
          </li>
          <li
            onClick={() => {
              handleOptions("Incomplete");
              setIsOpen(!isOpen);
            }}
          >
            <Link href="">Incomplete</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
