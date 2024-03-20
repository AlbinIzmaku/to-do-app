// list.jsx
import Delete from "@/svg/delete";
import Edit from "@/svg/edit";
import styles from "@/styles/list.module.css";
import { useState } from "react";
import True from "@/svg/true";
import X from "@/svg/x";

export default function List({ notes, setNotes }) {
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedNotes, setEditedNotes] = useState({});
  const [logos, setLogos] = useState(true);

  function handleEdit(noteId) {
    setEditingNoteId(noteId);
    setLogos(false);
  }

  function handleInputChange(event, noteId) {
    setEditedNotes({
      ...editedNotes,
      [noteId]: event.target.value,
    });
  }

  function handleSaveChanges() {
    const updatedNotes = notes.map((note) => {
      if (editedNotes[note.id] !== undefined) {
        return {
          ...note,
          text: editedNotes[note.id],
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditingNoteId(null);
    setLogos(true);
  }

  function handleDiscardChanges() {
    setEditedNotes({});
    setEditingNoteId(null);
    setLogos(true);
  }

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <div key={note.id}>
          <li className={styles.items}>
            <div className={styles.square} />
            {editingNoteId === note.id ? (
              <input
                className={styles.h3}
                value={
                  editedNotes[note.id] !== undefined
                    ? editedNotes[note.id]
                    : note.text
                }
                onChange={(event) => handleInputChange(event, note.id)}
                onBlur={() => setEditingNoteId(null)}
                autoFocus
              />
            ) : (
              <h3 className={styles.h3}>{note.text}</h3>
            )}

            {logos ? (
              <div className={styles.update}>
                <Edit onClick={() => handleEdit(note.id)} />
                <Delete
                  onClick={() =>
                    setNotes(notes.filter((n) => n.id !== note.id))
                  }
                />
              </div>
            ) : (
              <div className={styles.update}>
                <True onClick={handleSaveChanges} />
                <X onClick={handleDiscardChanges} />
              </div>
            )}
          </li>
          <div className={styles.hr} />
        </div>
      ))}
    </ul>
  );
}
