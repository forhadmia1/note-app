import { configureStore } from '@reduxjs/toolkit'
import booksreducer from '../features/books/booksSlice';

const store = configureStore({
    reducer: {
        books: booksreducer
    },
})

export default store;