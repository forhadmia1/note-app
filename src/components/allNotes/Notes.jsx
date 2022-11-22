import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../App';
import SingleNote from './SingleNote';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Notes = () => {
    const { notes, setNotes } = useContext(NotesContext)
    const [data, setData] = useState(notes)
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (status === '') {
            setData(notes);
        } else {
            const filtered = notes.filter(note => note.status === status)
            setData(filtered);
        }
    }, [status, notes])

    const deleteNote = (id) => {
        const rest = notes.filter(note => note.id !== id)
        setNotes(rest)
        //set data to the local storage
        localStorage.setItem('notes', JSON.stringify(rest))
    }

    return (
        notes.length > 0 ?
            <div className='p-4'>
                <div className='flex justify-end'>
                    <div className='pb-5'>
                        <label className='font-semibold' htmlFor="">
                            Filters Notes:
                            <select onChange={(e) => setStatus(e.target.value)} className='border-2 border-blue-700 rounded px-2 py-1 focus:outline-none ml-2 cursor-pointer'>
                                <option value=''>All</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                    </div>
                </div>
                <Table>
                    <Thead>
                        <Tr className='bg-slate-600 text-white'>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Date</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map(note => <SingleNote
                                key={note.id}
                                note={note}
                                deleteNote={deleteNote}
                            />)
                        }
                    </Tbody>
                </Table>
            </div >
            : <div className='flex justify-center items-center h-[calc(100vh-64px)]'>
                <p className='text-lg font-semibold text-red-600'>No notes available!</p>
            </div >
    );
};

export default Notes;