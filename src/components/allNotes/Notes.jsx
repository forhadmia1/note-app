import React, { useContext } from 'react';
import { NotesContext } from '../../App';
import SingleNote from './SingleNote';

const Notes = () => {
    const { notes, setNotes } = useContext(NotesContext)

    const deleteNote = (id) => {
        const rest = notes.filter(note => note.id !== id)
        setNotes(rest)
    }

    return (
        notes.length > 0 ?
            <div>
                {
                    notes.map(note => <SingleNote
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                    />)
                }
            </div>
            : <div className='flex justify-center items-center h-[calc(100vh-64px)]'>
                <p className='text-lg font-semibold text-red-600'>No notes available!</p>
            </div >
    );
};

export default Notes;