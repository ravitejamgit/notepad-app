import React from "react";

function truncateText(text, limit) {
    if(text.length <= limit) 
        return text;
    return text.slice(0, limit) + "...";
}

function NotesList({notes, setSelectedNote, handleNoteDelete, handleNoteUpdate, handleNoteClick}) {
    if(notes.length === 0) {
        return (
            <div className="notes-list">
                <h2>Saved Notes</h2>
                <span className="empty-list">No saved notes...</span>
            </div>
        )
    }
    else return (
        <div className="notes-list">
            <h2>Saved Notes</h2>
            
            <ul>
                {notes.map((n) => (
                    <li key = {n.id}>
                        <span onClick={(e) => handleNoteClick(e, n)}>{truncateText(n.name, 13)}</span>   
                        <div className="button-area">
                            <button onClick={() => handleNoteUpdate(n.id)}>Edit</button>
                            <button onClick={() => handleNoteDelete(n.id)}>Delete</button>
                        </div>
                    </li>
                ))}
                
            </ul>
            
        </div>
    );
}

export default NotesList;