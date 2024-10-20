import { useDispatch } from "react-redux"
import { joinRoom } from "store/features/videoSlice"
import "./joinRoom.css"
import { useState, ChangeEvent, FormEvent } from "react"

export const JoinRoom = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(joinRoom(name))
    }

    return (
        <form className="join-room" onSubmit={handleSubmit}>
            <div>
                <input
                    value={name}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={!name}>Join Room</button>
        </form>
    )
}
