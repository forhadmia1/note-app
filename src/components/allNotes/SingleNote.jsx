import React from 'react';
import { MdDeleteOutline } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { Td, Tr } from 'react-super-responsive-table';

const SingleNote = ({ note, deleteNote }) => {
    const navigate = useNavigate()
    const editNote = (id) => {
        navigate(`/notes/${id}`)
    }

    return (
        <Tr>
            <Td><p className='text-center'>{note.name}</p></Td>
            <Td><p className='text-center'>{note.description}</p></Td>
            <Td><p className='text-center'>{note.date}</p></Td>
            <Td><p className='text-center'>{note.status}</p></Td>
            <Td>
                <div className='flex gap-5 justify-center'>
                    <button onClick={() => editNote(note.id)} className='bg-red-600 p-1 rounded text-white text-lg'><BiEdit /></button>
                    <button onClick={() => deleteNote(note.id)} className='bg-red-600 p-1 rounded text-white text-lg'><MdDeleteOutline /></button>
                </div>
            </Td>
        </Tr>
    );
};

export default SingleNote;