import { configureStore } from '@reduxjs/toolkit'
import { videoReducer } from "./features"

export default configureStore({
    reducer: {
        video: videoReducer
    },
})