import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Notes from './components/allNotes/Notes';
import AddNotes from './components/addNotes/AddNotes';
import { createContext, useState } from 'react';
import EditNote from './components/editNote/EditNote';
export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState([])
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Notes />} />
          <Route path='notes' element={<Notes />} />
          <Route path='notes/:id' element={<EditNote />} />
          <Route path='add-notes' element={<AddNotes />} />
        </Route>
      </Routes>
    </NotesContext.Provider>
  );
}

export default App;
