import {useState, useRef, useEffect} from "react";

function ShowSelectedNote({ selectedNote , onclose, handleNoteDelete, handleNoteUpdate, startRect }) {
    const cardRef = useRef(null);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (selectedNote && startRect && cardRef.current) {
        const card = cardRef.current;

        // Set initial position from clicked element
        card.style.left = `${startRect.left}px`;
        card.style.top = `${startRect.top}px`;
        card.style.width = `${startRect.width}px`;
        card.style.height = `${startRect.height}px`;
        card.style.transform = "translate(0, 0)";

        card.getBoundingClientRect();

        // Animate to center
        requestAnimationFrame(() => {
            card.style.left = "50%";
            card.style.top = "50%";
            card.style.width = "30%";
            card.style.height = "auto";
            card.style.transform = "translate(-50%, -50%)";
        });
        }
    }, [selectedNote, startRect]);

    const handleClose = () => {
        if (!cardRef.current || !startRect) return;

        const card = cardRef.current;
        setClosing(true);

        // Animate back to original position
        card.style.left = `${startRect.left}px`;
        card.style.top = `${startRect.top}px`;
        card.style.width = `${startRect.width}px`;
        card.style.height = `${startRect.height}px`;
        card.style.transform = "translate(0,0)";

        // Wait for transition to finish, then unmount
        setTimeout(() => {
        setClosing(false);
        onclose();
        }, 150); // match transition duration
    };                            

    if (!selectedNote) return null;

    return (
        selectedNote && 
        <div className="selected-note-overlay">
            <div ref = { cardRef } className="selected-note-card">
                <div className="card-close-btn">
                    <button className="close-btn" onClick={handleClose}>X</button>
                </div>
                <div className="note-date">
                    <small>{new Date(selectedNote.id).toLocaleDateString()}</small>
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