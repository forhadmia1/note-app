import React from 'react';
import bookstyle from '../../styles/Book.module.css'

const BookCard = ({ book }) => {
    return (
        <div className=" flex justify-center items-center">
            <div className={`flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer relative ${bookstyle.bookContainer}`}>
                <div className='absolute top-0 left-0 w-full h-full overflow-hidden rounded'>
                    <img className='w-full h-full scale-150' src={book?.image} alt="" />
                </div>
                <div className="flex  ml-4 mt-3 pr-8 z-[1]">
                    <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-sm rounded">{book?.price}</div>
                </div>
                <div className={`bg-red-600 overflow-hidden shadow-md rounded-r-xl flex flex-col mr-4 mb-8 z-[1] ${bookstyle.bookInfo}`}>
                    <h3 className="text-xl font-bold pb-2 text-white">{book?.title}</h3>
                    <p className="truncate text-slate-800 text-sm">{book?.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;