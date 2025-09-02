import React from "react";

function NotesList({ notes }) {
    return (
        <div>
            <h2>Saved Notes</h2>
            <ul>
                {notes.map((n, index) => (
                    <li key = {index}>{n}</li>
                ))}
            </ul>
        </div>
    );
}

export default NotesList;