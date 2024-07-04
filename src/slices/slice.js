import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedBooks : [],
    search : "",
    sortBy : "",
    filterText : "",
}

export const bookSlice = createSlice({
    name:"bookSlice",
    initialState,
    reducers : {
        addBook:(state,action) => {
            state.addedBooks.push(action.payload)
            alert("Book addedd successfully!");
        },
        removeBook:(state,action) => {
           state.addedBooks = state.addedBooks.filter((book) => {
                if(book.cover_id){
                    return book.cover_id != action.payload.cover_id;
                }
                else{
                    return book.cover_i != action.payload.cover_i;
                }
            })
        },
        addSearch : (state,action) => {
            state.search = action.payload;
            console.log(state.search);
        },
        addSortBy:(state,action) => {
            state.sortBy = action.payload;
            console.log(state.sortBy);
        },
        addFilterText:(state,action) => {
            state.filterText = action.payload;
            console.log(state.filterText);
        }
    }
})

export const {addBook,addSearch,addSortBy,addFilterText,removeBook} = bookSlice.actions;

export default bookSlice.reducer;