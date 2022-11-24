import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Notes from './components/allNotes/Notes';
import AddNotes from './components/allNotes/AddNotes';
import { createContext, useEffect, useState } from 'react';
import EditNote from './components/allNotes/EditNote';
import BooksView from './features/books/BooksView';
export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState([])


  //load data from local storage
  useEffect(() => {
    const getNotes = localStorage.getItem('notes')
    setNotes(JSON.parse(getNotes))
  }, [])

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Notes />} />
          <Route path='notes/:id' element={<EditNote />} />
          <Route path='add-notes' element={<AddNotes />} />
          <Route path='books' element={<BooksView />} />
        </Route>
      </Routes>
    </NotesContext.Provider>
  );
}

export default App;
