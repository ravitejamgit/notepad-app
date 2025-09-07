import {useRef, useEffect} from "react";

function ShowSelectedNote({ selectedNote , onclose, handleNoteDelete, handleNoteUpdate, startRect }) {
    const cardRef = useRef(null);
    useEffect(() => {
        if (selectedNote && startRect && cardRef.current) {
        // set initial position
        const card = cardRef.current;
        card.style.left = `${startRect.left}px`;
        card.style.top = `${startRect.top}px`;
        card.style.width = `${startRect.width}px`;
        card.style.height = `${startRect.height}px`;

        // animate to center
        requestAnimationFrame(() => {
            card.style.left = "50%";
            card.style.top = "50%";
            card.style.width = "400px";
            card.style.height = "250px";
            card.style.transform = "translate(-50%, -50%)";
        });
        }
    }, [selectedNote, startRect]);

    if(!selectedNote) return null;

    return (
        selectedNote && 
        <div className="selected-note-overlay">
            <div ref = { cardRef } className="selected-note-card">
                <div className="card-close-btn">
                    <button className="close-btn" onClick={onclose}>X</button>
                </div>
                <div className="card-header">
                    <h2><span className="title">{selectedNote.name}</span></h2>
                </div>
                <div className="card-content">
                    <p><span className="content">{selectedNote.content}</span></p>
                </div>
                <div className="card-button-area">
                     <button className = "editButton" onClick={() => handleNoteUpdate(selectedNote.id)}>Edit</button>
                    <button className = "deleteButton" onClick={() => handleNoteDelete(selectedNote.id)}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ShowSelectedNote;