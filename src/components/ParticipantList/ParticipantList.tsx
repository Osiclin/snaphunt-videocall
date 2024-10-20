import { ParticipantLoop, ParticipantName, useParticipants } from "@livekit/components-react";

export function ParticipantList() {
    const participants = useParticipants();

    return (
        <div>
            <ParticipantLoop participants={participants}>
                <ParticipantName />
            </ParticipantLoop>
        </div>

    )
}