import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hasJoinedRoom: false,
    participants: [],
    name: "",
    roomName: "my-room"
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        joinRoom: (state, action) => {
            state.hasJoinedRoom = true
            state.name = action.payload
        },
        leaveRoom: (state) => {
            state.hasJoinedRoom = false
            state.name = ""
        },
    },
})

export const { joinRoom, leaveRoom } = videoSlice.actions

export default videoSlice.reducer