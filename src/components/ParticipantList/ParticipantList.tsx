import { ParticipantLoop, ParticipantName, useParticipants } from "@livekit/components-react";

export function ParticipantList() {
    // Render a list of all participants in the room.
    const participants = useParticipants();
    console.log(participants)
    return (
        <div>
            <ParticipantLoop participants={participants}>
                <ParticipantName />
            </ParticipantLoop>
        </div>

    )
}