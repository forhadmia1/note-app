import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import BookCard from '../../components/books/BookCard';
import { fetchBooks } from './booksSlice';

const BooksView = () => {
    const { isLoading, books } = useSelector(state => state.books)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch])

    if (isLoading) {
        return <div className='flex justify-center items-center w-full h-[calc(100vh-70px)]'>
            <ScaleLoader color="#0D0D0D" />
        </div>
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 h-[calc(100vh-65px)] overflow-y-scroll'>
            {
                books.map(book => <BookCard
                    key={book.isbn13}
                    book={book}
                />)
            }
        </div>
    );
};

export default BooksView;