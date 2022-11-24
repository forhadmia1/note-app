import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const res = await fetch('https://api.itbook.store/1.0/search/mongodb')
    const data = await res.json()
    return data.books;
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