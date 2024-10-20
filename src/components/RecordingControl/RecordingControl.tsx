import { DisconnectButton, ControlBar } from "@livekit/components-react";
import { useDispatch } from "react-redux";
import { leaveRoom } from "store/features/videoSlice";

export const RecordingControl = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <ControlBar variation="minimal" controls={{ leave: false }} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <DisconnectButton onClick={() => dispatch(leaveRoom())}>Leave Room</DisconnectButton>
            </div>
        </div>
    )
}