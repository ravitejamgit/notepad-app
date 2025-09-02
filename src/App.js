import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import { useState } from 'react';
import './App.css';

function App() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSave = () => {
    if(note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const handleClear = () => {
    setNote("");
  };

  return (
    <div>
      <Header />
      <NoteInput 
        note = {note}
        setNote = {setNote}
        handleClear = {handleClear}
        handleSave = {handleSave}
      />
      <NotesList notes = {notes}/>
    </div>
  );
}

export default App;
