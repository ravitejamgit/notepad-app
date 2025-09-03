import React from "react";

function ShowSelectedNote({selectedNote}) {
    return (
        selectedNote && 
        <div>
            <h3>{selectedNote.id}</h3>
            <h2>{selectedNote.name}</h2>
            <p>{selectedNote.content}</p>
        </div>

    )
}

export default ShowSelectedNote;