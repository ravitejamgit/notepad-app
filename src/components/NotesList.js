import React from "react";

function NotesList({notes, setSelectedNote, handleNoteDelete, handleNoteUpdate}) {
    return (
        <div className="notes-list">
            <h2>Saved Notes</h2>
            <ul>
                {notes.map((n) => (
                    <li key = {n.id}>
                        <span onClick={() => setSelectedNote(n)}>{n.name}</span>   
                        <button onClick={() => handleNoteUpdate(n.id)}>Edit</button>
                        <button onClick={() => handleNoteDelete(n.id)}>Delete</button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}

export default NotesList;