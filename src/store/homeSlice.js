import { createSlice } from "@reduxjs/toolkit";
export const homeSlice =createSlice({
    name:"home",
    initialState:{
        url: {Name:"willl rock it"},
        genres:{},
        

    },
    reducers:{
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    }
})


export const {getApiConfiguration,getGenres}=homeSlice.actions;
export default homeSlice.reducer