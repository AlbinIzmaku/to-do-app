import Delete from "@/svg/delete";
import Edit from "@/svg/edit";
import styles from "@/styles/list.module.css";
import { useState } from "react";
import True from "@/svg/true";
import X from "@/svg/x";

export default function List({ notes, setNotes, values, isDarkMode }) {
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedNotes, setEditedNotes] = useState({});
  const [logos, setLogos] = useState(true);

  function handleEdit(noteId) {
    setEditingNoteId(noteId);
    setLogos(false);
  }

  function handleInputChange(event, noteId) {
    const { target } = event;
    const { checked, value } = target;

    if (target.type === "checkbox") {
      setNotes(
        notes.map((note) => {
          if (note.id === noteId) {
            return { ...note, checked: checked };
          }
          return note;
        })
      );
    } else {
      setEditedNotes({
        ...editedNotes,
        [noteId]: value,
      });
    }
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

  if (values === "Complete") {
    return (
      <ul className={styles.list}>
        {notes
          .filter((note) => note.checked)
          .map((note) => (
            <div key={note.id}>
              <li className={styles.items}>
                <input
                  type="checkbox"
                  className={styles.square}
                  checked={note.checked}
                  onChange={(event) => handleInputChange(event, note.id)}
                />
                {editingNoteId === note.id ? (
                  <input
                    className={`${styles.h3} ${
                      isDarkMode ? styles.darkText : ""
                    }`}
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
                  <h3
                    className={`${styles.h3} ${
                      isDarkMode ? styles.darkText : ""
                    }`}
                  >
                    {note.text}
                  </h3>
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
  if (values === "Incomplete") {
    return (
      <ul className={styles.list}>
        {notes
          .filter((note) => !note.checked)
          .map((note) => (
            <div key={note.id}>
              <li className={styles.items}>
                <input
                  type="checkbox"
                  className={styles.square}
                  checked={note.checked}
                  onChange={(event) => handleInputChange(event, note.id)}
                />
                {editingNoteId === note.id ? (
                  <input
                    className={`${styles.h3} ${
                      isDarkMode ? styles.darkText : ""
                    }`}
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
                  <h3
                    className={`${styles.h3} ${
                      isDarkMode ? styles.darkText : ""
                    }`}
                  >
                    {note.text}
                  </h3>
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
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <div key={note.id}>
          <li className={styles.items}>
            <input
              type="checkbox"
              className={styles.square}
              checked={note.checked}
              onChange={(event) => handleInputChange(event, note.id)}
            />
            {editingNoteId === note.id ? (
              <input
                className={`${styles.h3} ${isDarkMode ? styles.darkText : ""}`}
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
              <h3
                className={`${styles.h3} ${isDarkMode ? styles.darkText : ""}`}
              >
                {note.text}
              </h3>
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
