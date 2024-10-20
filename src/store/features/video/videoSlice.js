import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    joinRoom: false,
    participants: []
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    toggleJoinRoom: (state) => {
      state.joinRoom = !state.joinRoom
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleJoinRoom } = videoSlice.actions

export default videoSlice.reducer