import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../common/Button';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';

const EditPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    const inputhandler = (e) => {
        const name = e.target.name;
        const value = e.target.value
        const update = { ...post };
        update[name] = value;
        setPost(update)
    }

    //update post 
    const formHandler = async (e) => {
        e.preventDefault()
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Your post update successfully!',
                showConfirmButton: false,
                timer: 1000
            })
        }
        navigate('/posts')
    }

    return (
        <div className='p-4'>
            <h1 className='text-xl font-semibold'>Update your post here:</h1>
            <div className='max-w-md mt-10'>
                <form onSubmit={formHandler}>
                    <div>
                        <InputField
                            label='Title'
                            name='title'
                            type='text'
                            required={true}
                            value={post?.title}
                            onChange={inputhandler}
                        />
                    </div>
                    <div className='mt-5'>
                        <TextArea
                            label='Description'
                            name='body'
                            required={true}
                            value={post?.body}
                            onChange={inputhandler}
                        />
                    </div>
                    <div className='flex justify-end mt-5'>
                        <Button
                            type='submit'
                        >Update Post</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPost;