import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {

      console.log(action.payload)
      let index = state.favorites.findIndex(item => item.id === action.payload.id);
      if(index === -1){
        state.favorites.push(action.payload);
      } else {
        state.favorites?.splice(index, 1)}
      }
    },
  //   removeFromFavorites: (state, action) => {
  //     state.favorites.splice(state.favorites.findIndex(item => item.id === action.payload), 1)}
  // },
})

export const { addToFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer