import React, { useContext } from 'react';
import { NotesContext } from '../../App';
import SingleNote from './SingleNote';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Notes = () => {
    const { notes, setNotes } = useContext(NotesContext)

    const deleteNote = (id) => {
        const rest = notes.filter(note => note.id !== id)
        setNotes(rest)
        localStorage.setItem('notes', JSON.stringify(rest))
    }

    return (
        notes.length > 0 ?
            <div className='p-4'>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Date</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            notes.map(note => <SingleNote
                                key={note.id}
                                note={note}
                                deleteNote={deleteNote}
                            />)
                        }
                    </Tbody>
                </Table>
            </div>
            : <div className='flex justify-center items-center h-[calc(100vh-64px)]'>
                <p className='text-lg font-semibold text-red-600'>No notes available!</p>
            </div >
    );
};

export default Notes;