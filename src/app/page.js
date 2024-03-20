"use client";

import Search from "@/svg/search";
import MySelect from "@/components/mySelect";
import styles from "@/app/page.module.css";
import Moon from "@/svg/moon";
import { useEffect, useState } from "react";
import Light from "@/svg/light";
import MyButton from "@/components/myButton";
import List from "@/components/list";
import Aa from "./aa";
import True from "@/svg/true";

let nextId = 4;
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [click, setClick] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Read recommended book",
    },
    {
      id: 1,
      text: "Vacation planning",
    },
    {
      id: 2,
      text: "Cook dinner",
    },
    {
      id: 3,
      text: "Sign up for training",
    },
  ]);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  function handleClick() {
    setClick(!click);
  }

  function handleAdd(note) {
    if (note !== "") {
      setNotes([
        ...notes,
        {
          id: nextId++,
          text: note,
        },
      ]);
    }

    setClick(!click);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className={`${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      <h1 className={styles.h1}>TODO LIST</h1>
      <section className={styles.mainSection}>
        <div className={styles.searchContainer}>
          <input
            className={styles.search}
            placeholder="Search note..."
            autoFocus
          />
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
      <MyButton
        click={click}
        handleClick={handleClick}
        handleAdd={handleAdd}
        notes={notes}
      />
      <section>
        <List notes={notes} setNotes={setNotes} />
      </section>
    </main>
  );
}
