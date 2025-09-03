    import React from "react";

    function NoteInput({noteData, handleClear, handleSave}) {

        return (
            <div>
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
                    <button onClick={handleSave }>Save</button>
                    <button onClick={handleClear }>Clear</button>
                </div>
            </div>
        );
    }

    export default NoteInput;