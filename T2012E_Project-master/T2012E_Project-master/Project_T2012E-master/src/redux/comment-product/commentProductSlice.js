import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: null,
// }

export const commentProductSlice = createSlice({
     name: 'comment',
     initialState: {
          values:[
              {
                  rate: 0,
                  comment: '',
                  username: '',
                  dateTime: '',
              }
           ]
      },
      reducers:{
          createComment: (state, action) => {
              state.values = [...state.values, action.payload]
          },
      }
})

// Action creators are generated for each case reducer function
export const { createComment } = commentProductSlice.actions

export default commentProductSlice.reducer