"use client";

import MySelect from "@/components/mySelect";
import Moon from "@/svg/moon";
import { useEffect, useState } from "react";
import Light from "@/svg/light";
import MyButton from "@/components/myButton";
import List from "@/components/list";
import styles from "@/app/page.module.css";
import H1 from "@/components/h1";
import SearchIcon from "@/svg/search";
import LightIcon from "@/svg/light";
import MoonIcon from "@/svg/moon";

let nextId = 4;
const initialNotes = [
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
];
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [click, setClick] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState("All");

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

  function handleOptions(value) {
    setOptions(value);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filtredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={`${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      <H1 isDarkMode={isDarkMode}>TODO LIST</H1>
      <section className={styles.mainSection}>
        <div className={styles.searchContainer}>
          <input
            className={styles.search}
            placeholder="Search note..."
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.selectContainer}>
          <MySelect options={options} handleOptions={handleOptions} />
          {isDarkMode ? (
            <LightIcon toggleTheme={toggleTheme} />
          ) : (
            <MoonIcon toggleTheme={toggleTheme} />
          )}
        </div>
      </section>
      <MyButton
        click={click}
        handleClick={handleClick}
        handleAdd={handleAdd}
        notes={notes}
        isDarkMode={isDarkMode}
      />
      <section>
        <List
          notes={filtredNotes}
          setNotes={setNotes}
          options={options}
          isDarkMode={isDarkMode}
        />
      </section>
    </main>
  );
}
