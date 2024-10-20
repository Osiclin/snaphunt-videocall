import { GridLayout, useTracks } from '@livekit/components-react';
import { Track } from 'livekit-client';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement
}
export const VideoStream = ({ children }: Props) => {
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
                {children}
            </GridLayout>
        </div>
    )
}