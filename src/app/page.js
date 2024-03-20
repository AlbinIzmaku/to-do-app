"use client";

import Search from "@/svg/search";
import MySelect from "@/components/mySelect";
import styles from "@/app/page.module.css";
import Moon from "@/svg/moon";
import { useEffect, useState } from "react";
import Light from "@/svg/light";
import MyButton from "@/components/myButton";
import List from "@/components/list";

let nextId = 4;
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [click, setClick] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Read recommended book",
      checked: false,
    },
    {
      id: 1,
      text: "Vacation planning",
      checked: false,
    },
    {
      id: 2,
      text: "Cook dinner",
      checked: false,
    },
    {
      id: 3,
      text: "Sign up for training",
      checked: false,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [values, setValues] = useState("All");

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

  function handleValues(value) {
    setValues(value);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filtredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={`${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      <h1 className={`${styles.h1} ${isDarkMode ? styles.darkText : ""}`}>
        TODO LIST
      </h1>
      <section className={styles.mainSection}>
        <div className={styles.searchContainer}>
          <input
            className={styles.search}
            placeholder="Search note..."
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className={styles.searchIcon} />
        </div>
        <div className={styles.selectContainer}>
          <MySelect values={values} handleValues={handleValues} />
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
        {values === "All" && (
          <List
            notes={filtredNotes}
            setNotes={setNotes}
            values={values}
            isDarkMode={isDarkMode}
          />
        )}
        {values === "Complete" && (
          <List
            notes={filtredNotes}
            setNotes={setNotes}
            values={values}
            isDarkMode={isDarkMode}
          />
        )}
        {values === "Incomplete" && (
          <List
            notes={filtredNotes}
            setNotes={setNotes}
            values={values}
            isDarkMode={isDarkMode}
          />
        )}
      </section>
    </main>
  );
}
