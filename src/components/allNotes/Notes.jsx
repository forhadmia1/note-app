import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../App';
import SingleNote from './SingleNote';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { BsSearch } from 'react-icons/bs'


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

    const handleSearch = (e) => {
        setStatus('')
        const value = e.target.value.toLowerCase();
        const filterd = notes.filter(note => note.name.toLowerCase().includes(value))
        setData(filterd);
    }

    const deleteNote = (id) => {
        const rest = notes.filter(note => note.id !== id)
        setNotes(rest)
        //set data to the local storage
        localStorage.setItem('notes', JSON.stringify(rest))
    }

    return (
        notes.length > 0 ?
            <div className='p-4'>
                <div className='flex justify-end pb-2'>
                    <div className="flex items-center w-full sm:w-auto bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-1 bg-gray-100 p-4 w-full  rounded-lg">
                            <BsSearch className='opacity-30' />
                            <input onChange={handleSearch} className="bg-gray-100 outline-none w-full" type="text" placeholder="Notes name..." />
                        </div>
                        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                            <select onChange={(e) => setStatus(e.target.value)} className='border-2 border-black rounded px-2 py-1 focus:outline-none ml-2 cursor-pointer' value={status}>
                                <option value=''>All</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="complete">Complete</option>
                            </select>
                        </div>
                    </div>
                </div>
                {data.length > 0 ?
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
                    </Table> :
                    <div className='flex justify-center items-center h-[calc(100vh-170px)]'>
                        <p className='font-semibold text-red-500'>No result found!</p>
                    </div>
                }
            </div >
            : <div className='flex justify-center items-center h-[calc(100vh-64px)]'>
                <p className='text-lg font-semibold text-red-600'>No notes available!</p>
            </div >
    );
};

export default Notes;