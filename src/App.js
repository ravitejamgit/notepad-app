import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import ShowSelectedNote from './components/ShowSelectedNote';
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const[noteTitle, setNoteTitle] = useState("");    // Note Title
  const [noteContent, setNoteContent] = useState("");   // Note Content
  
  // notes is an array of objects. Each object is contains {name : "", text : ""}. 
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  }); 

  // selectedNote contains which note is selected from a list.
  const [selectedNote, setSelectedNote] = useState(null);

  const [editNoteId, setEditNoteId] = useState(null);

  const [startRect, setStartRect] = useState(null);

  const handleNoteClick = (e, note) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setStartRect(rect);
    setSelectedNote(note);
  };
  

  // UseEffect for updating local storage when "notes" state changed.
  useEffect(() => {

    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes]);

  // Handles Save button click
  const handleSave = () => {
    if(noteTitle.trim() === "" || noteContent.trim() === "") return;

    if(editNoteId) {
      setNotes(
        notes.map((note) => note.id === editNoteId ? {...note, name: noteTitle, content: noteContent} : note)
      );
    }
    else {
      const newNote = {
      id : Date.now(),
      name : noteTitle,
      content : noteContent
      };

      setNotes([...notes, newNote]);
    }

    
    setNoteTitle("");
    setNoteContent("");
    setSelectedNote(null);
  };

  const refresh = () => {
    window.location.reload(false);
  }

  const handleNoteUpdate = (id) => {
    if(selectedNote)
      setSelectedNote(null);
    const note = notes.find((n) => n.id === id);
    if(note) {
      setNoteTitle(note.name);
      setNoteContent(note.content);
      setEditNoteId(note.id);
    }
  };

  const handleNoteDelete = (id) => {
    if(selectedNote)
      setSelectedNote(null);
    setNotes(notes.filter((note) =>  note.id !== id )); // Creating a new array with the items that the condition is true(if note.id and arg.id matches, it ignores.)
    if(selectedNote && selectedNote.id === id) {
      setSelectedNote(null);
    }
    handleClear()
  };

  // Handles Clear button click
  const handleClear = () => {
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <div>
      <Header refresh = { refresh }/>
      <div className="main">
        <NoteInput 
          noteData =  {{noteTitle : noteTitle, noteContent : noteContent, setNoteContent : setNoteContent, setNoteTitle : setNoteTitle}}
          handleClear = {handleClear}
          handleSave = {handleSave}
        />
        <NotesList notes = {notes} setSelectedNote = {setSelectedNote} handleNoteDelete={handleNoteDelete} handleNoteUpdate={handleNoteUpdate} 
          handleNoteClick = { handleNoteClick }/>
        <ShowSelectedNote 
          selectedNote = {selectedNote}
          onclose = {() => setSelectedNote(null)}
          handleNoteDelete={handleNoteDelete} 
          handleNoteUpdate={handleNoteUpdate}
          startRect = {startRect}
        />
      </div>
    </div>
  );
}

export default App;
