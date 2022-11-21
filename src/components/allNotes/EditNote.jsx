import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NotesContext } from '../../App';
import Button from '../common/Button';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';

const EditNote = () => {
    const { id } = useParams()
    const { notes, setNotes } = useContext(NotesContext)
    const [note, setNote] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const note = notes.find(note => note.id === id)
        setNote(note)
    }, [id, notes])

    const inputhandler = (e) => {
        const name = e.target.name;
        const value = e.target.value
        const update = { ...note };
        update[name] = value;
        setNote(update)
    }

    const formhandler = (e) => {
        e.preventDefault()
        const rest = notes.filter(note => note.id !== id)
        setNotes([...rest, note])
        navigate('/')
    }

    return (
        <div className='p-4'>
            <h1 className='text-xl font-semibold'>Input your Note here:</h1>
            <div className='max-w-md mt-10'>
                <form onSubmit={formhandler}>
                    <div>
                        <InputField
                            label='Name'
                            name='name'
                            type='text'
                            required={true}
                            value={note.name}
                            onChange={inputhandler}
                        />
                    </div>
                    <div className='mt-5'>
                        <InputField
                            label='Date'
                            name='date'
                            type='date'
                            required={true}
                            value={note.date}
                            onChange={inputhandler}
                        />
                    </div>
                    <div className='mt-5'>
                        <TextArea
                            label='Description'
                            name='description'
                            type='description'
                            required={true}
                            value={note.description}
                            onChange={inputhandler}
                        />
                    </div>
                    <div className='flex justify-end mt-5'>
                        <Button
                            type='submit'
                        >Add Note</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNote;