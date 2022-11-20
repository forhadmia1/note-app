import React from 'react';
import { MdDeleteOutline } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const SingleNote = ({ note, deleteNote }) => {
    const navigate = useNavigate()
    const editNote = (id) => {
        navigate(`/notes/${id}`)
    }

    return (
        <div class=" bg-gray-50 relative overflow-hidden p-5 cursor-pointer">
            <div class="max-w-7xl mx-auto">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-start justify-start ">
                        <svg class="w-8 h-8 text-purple-600 mt-1" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                        </svg>
                        <div class="ml-2 flex justify-between w-full items-start gap-2">
                            <div>
                                <h2 class="text-slate-800 text-xl font-semibold">{note.name}</h2>
                                <p class="text-slate-800">{note.description}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className="text-sm text-gray-500 flex justify-center">
                                    <button onClick={() => editNote(note.id)} className='bg-red-600 p-1 rounded text-white text-lg'><BiEdit /></button>
                                </div>
                                <div className="text-sm text-gray-500 flex justify-center">
                                    <button onClick={() => deleteNote(note.id)} className='bg-red-600 p-1 rounded text-white text-lg'><MdDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNote;