import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    comments: [],
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {  
      state.comments.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.comments.splice(state.comments.findIndex(item => item.id === action.payload.id), 1)
    }
  },
})

export const { addComment, deleteComment } = commentSlice.actions

export default commentSlice.reducer