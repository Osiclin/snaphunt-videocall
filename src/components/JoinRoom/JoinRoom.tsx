import { useDispatch } from "react-redux"
import { toggleJoinRoom } from "store/features/video/videoSlice"

export const JoinRoom = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(toggleJoinRoom())}>join room</button>
        </div>
    )
}