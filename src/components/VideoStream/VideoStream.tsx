import { GridLayout, ParticipantTile, useTracks } from '@livekit/components-react';
import { ParticipantList } from '../ParticipantList/ParticipantList';
import { Track } from 'livekit-client';

export const VideoStream = () => {
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
            { source: Track.Source.Microphone, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );

    return (
        <div>
            <GridLayout tracks={tracks}>
                <div>
                    <ParticipantTile />
                </div>
            </GridLayout>
            <ParticipantList />
        </div>
    )
}