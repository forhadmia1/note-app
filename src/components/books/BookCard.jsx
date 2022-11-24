import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div class=" flex justify-center items-center">
            <div class={`flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer relative`}>
                <div className='absolute top-0 left-0 w-full h-full overflow-hidden rounded'>
                    <img className='w-full h-full scale-150' src={book?.image} alt="" />
                </div>
                <div class="flex  ml-4 mt-3 pr-8 z-[1]">
                    <div class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-sm rounded">{book?.price}</div>
                </div>
                <div class="bg-[#E21717]  shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8 z-[1]">
                    <h3 class="text-xl font-bold pb-2 text-white">{book?.title}</h3>
                    <p class="truncate text-slate-800 text-sm">{book?.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;