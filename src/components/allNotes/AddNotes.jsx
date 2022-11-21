import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../../App';
import Button from '../common/Button';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';
import { v4 as uuidv4 } from 'uuid';

const AddNotes = () => {
    const { notes, setNotes } = useContext(NotesContext)
    const [formData, setFormData] = useState({ id: uuidv4(), name: '', date: '', description: '' })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = { ...formData }
        data[name] = value;
        setFormData(data)
    }

    const handleForm = (e) => {
        e.preventDefault()
        setNotes([...notes, formData])
        navigate('/')
    }

    return (
        <div className='p-4'>
            <h1 className='text-xl font-semibold'>Input your Note here:</h1>
            <div className='max-w-md mt-10'>
                <form onSubmit={handleForm}>
                    <div>
                        <InputField
                            label='Name'
                            name='name'
                            type='text'
                            required={true}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mt-5'>
                        <InputField
                            label='Date'
                            name='date'
                            type='date'
                            required={true}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mt-5'>
                        <TextArea
                            label='Description'
                            name='description'
                            type='description'
                            required={true}
                            onChange={handleChange}
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

export default AddNotes;