    import React from "react";

    function NoteInput({note, setNote, handleClear, handleSave}) {

        return (
            <div>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)} 
                    placeholder="start typing here.."
                />
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </div>
        );
    }

    export default NoteInput;