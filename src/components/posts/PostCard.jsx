import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PostCard = ({ post }) => {
    const handleDelete = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
                if (res.status === 200) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }

            }
        })

    }
    return (
        <div className='w-full hover:scale-105 duration-300'>
            <div className="w-full max-w-xl px-8 py-12 mx-auto bg-white border rounded-lg shadow-lg h-full relative mb-5">
                <h2 className="space-y-1 text-2xl font-bold leading-none text-gray-900">
                    <span className="block text-sm text-blue-700">Project #{post.id} </span>
                    <span className="block">{post.title}</span>
                </h2>
                <p className='mt-2 text-slate-600'>
                    {post.body.slice(0, 150)}
                </p>
                <div className='absolute bottom-5 left-0 px-8 mt-5 flex justify-between w-full'>
                    <Link className='bg-yellow-500 text-white font-semibold py-1 px-4 rounded' to={`/posts/${post.id}`}>Edit Post</Link>
                    <button onClick={handleDelete} className='bg-red-600 py-1 px-4 rounded text-white font-semibold'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;