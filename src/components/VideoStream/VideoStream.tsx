import { GridLayout, ParticipantTile, useTracks } from '@livekit/components-react';
import { ParticipantList } from '../ParticipantList/ParticipantList';
import { Track } from 'livekit-client';

export const VideoStream = () => {
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );

    return (
        <div>
            <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
                <>
                    <ParticipantTile />
                    <ParticipantList />
                </>
            </GridLayout>
        </div>
    )
}