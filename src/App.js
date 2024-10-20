import './App.css';
import { useSelector } from 'react-redux';
import { JoinRoom, RecordingControl, VideoStream } from './components';
import { LiveKitRoom } from '@livekit/components-react';
import '@livekit/components-styles';
import { AccessToken } from 'livekit-server-sdk';
import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_LK_API_KEY;
const apiSecret = process.env.REACT_APP_LK_SECRET_KEY;
const livekitHost = process.env.REACT_APP_LK_SERVER_URL;

function App() {
  const { hasJoinedRoom, name, roomName } = useSelector(state => state.video)
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generateToken = async () => {
    try {
      const token = new AccessToken(apiKey, apiSecret, {
        identity: name,  // Unique identity for each participant
      });

      token.addGrant({
        roomJoin: true,
        room: roomName,
      });

      const jwtToken = await token.toJwt();  // Get the generated token
      setToken(jwtToken);
    } catch (error) {
      setErrorMessage('Error generating token: ' + error.message);
    }
  };

  useEffect(() => {
    if (hasJoinedRoom && name) generateToken()
  }, [hasJoinedRoom, name])

  return (
    <div>
      {hasJoinedRoom ? (
        <LiveKitRoom
          video={true}
          audio={true}
          token={token}
          serverUrl={livekitHost}
          connect={true}
        >
          <VideoStream />
          <RecordingControl />
        </LiveKitRoom>
      ) :
        <JoinRoom />
      }
      {errorMessage}
    </div >
  );
}

export default App;
