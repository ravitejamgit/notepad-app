    import React from "react";

    function NoteInput({noteData, handleClear, handleSave}) {

        return (
            <div className="note-input">
                    <input
                        type = "text"
                        placeholder="Title..."
                        value={ noteData.noteTitle }
                        onChange={(e) => noteData.setNoteTitle(e.target.value)}
                    />
                    <textarea
                    value={ noteData.noteContent }
                    onChange={(e) => noteData.setNoteContent(e.target.value)} 
                    placeholder="start typing here.."
                />
                <div>
                    <button className = "save" onClick={handleSave }>Save</button>
                    <button className = "clear" onClick={handleClear }>Clear</button>
                </div>
            </div>
        );
    }

    export default NoteInput;