"use client";

import Search from "@/svg/search";
import MySelect from "@/components/mySelect";
import styles from "@/app/page.module.css";
import Moon from "@/svg/moon";
import { useState } from "react";
import Light from "@/svg/light";
import MyButton from "@/components/myButton";
import Edit from "@/svg/edit";
import Delete from "@/svg/delete";
import List from "@/components/list";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <main className={`${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      <h1 className={styles.h1}>TODO LIST</h1>
      <section className={styles.mainSection}>
        <div className={styles.searchContainer}>
          <input className={styles.search} placeholder="Search note..." autoFocus />
          <Search className={styles.searchIcon} />
        </div>
        <div className={styles.selectContainer}>
          <MySelect />
          {isDarkMode ? (
            <Light toggleTheme={toggleTheme} />
          ) : (
            <Moon toggleTheme={toggleTheme} />
          )}
        </div>
      </section>
      <MyButton />
      <section>
        <List />
      </section>
    </main>
  );
}
