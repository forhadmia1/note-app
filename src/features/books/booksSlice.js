import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data;
})
export const deleteBook = createAsyncThunk('books/deleteBook', async () => {
    const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    return res.data;
})

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        isLoading: false,
        books: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = action.payload
            state.error = null
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false
            state.books = []
            state.error = action.error.message
        })
    }
})

export default booksSlice.reducer;