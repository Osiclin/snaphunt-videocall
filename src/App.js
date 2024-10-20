import './App.css';
import { useSelector } from 'react-redux';
import { JoinRoom, ParticipantList, VideoStream } from './components';
import { LiveKitRoom, ParticipantTile } from '@livekit/components-react';
import '@livekit/components-styles';

function App() {
  const { joinRoom } = useSelector(state => state.video)

  return (
    <div className="App">
      {joinRoom ? (
        <LiveKitRoom
          video={true}
          audio={true}
          token={process.env.REACT_APP_LK_TOKEN}
          serverUrl={process.env.REACT_APP_LK_SERVER_URL}
          connect={true}
        // data-lk-theme="default"
        // style={{ height: '100vh' }}
        >
          <VideoStream>
            <ParticipantTile />
            <ParticipantList />
          </VideoStream>
        </LiveKitRoom>
      ) :
        <JoinRoom />
      }
    </div >
  );
}

export default App;
