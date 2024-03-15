"use client";

import { useState } from "react";
import Link from "next/link";
import BottomArrow from "@/svg/bottomArrow";
import UpperArrow from "@/svg/upperArrow";
import styles from "@/styles/mySelect.module.css";

export default function MySelect() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input type="text" className={styles.input} />
        <span />
        {isOpen ? (
          <UpperArrow handleClick={handleClick} />
        ) : (
          <BottomArrow handleClick={handleClick} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.list}>
          <li>
            <Link href="">All</Link>
          </li>
          <li>
            <Link href="">Complete</Link>
          </li>
          <li>
            <Link href="">Incomplete</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
