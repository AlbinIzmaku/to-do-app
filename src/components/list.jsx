import Delete from "@/svg/delete";
import Edit from "@/svg/edit";
import styles from "@/styles/list.module.css";
import { useState } from "react";

export default function List() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Read recommended book",
    },
    {
      id: 2,
      text: "Vacation planning",
    },
    {
      id: 3,
      text: "Cook dinner",
    },
    {
      id: 4,
      text: "Sign up for training",
    },
  ]);

  return (
    <ul className={styles.list}>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <li className={styles.items}>
              <div className={styles.square} />
              <h3 className={styles.h3}>{note.text}</h3>
              <div className={styles.update}>
                <Edit />
                <Delete />
              </div>
            </li>
            <div className={styles.hr} />
          </div>
        );
      })}
    </ul>
  );
}
