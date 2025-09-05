import React from "react";

function ShowSelectedNote({ selectedNote , onclose, handleNoteDelete, handleNoteUpdate}) {

    if(!selectedNote) return null;

    return (
        selectedNote && 
        <div className="selected-note-overlay">
            <div className="selected-note-card">
                <button className="close-btn" onClick={onclose}>X</button>
                <h2>{selectedNote.name}</h2>
                <p>{selectedNote.content}</p>
                <div className="button-area">
                     <button className = "editButton" onClick={() => handleNoteUpdate(selectedNote.id)}>Edit</button>
                    <button className = "deleteButton" onClick={() => handleNoteDelete(selectedNote.id)}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ShowSelectedNote;