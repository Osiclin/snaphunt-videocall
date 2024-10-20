import './App.css';
import { useSelector } from 'react-redux';
import { JoinRoom, VideoStream } from './components';
import { LiveKitRoom } from '@livekit/components-react';
import '@livekit/components-styles';
import { AccessToken } from 'livekit-server-sdk';
import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_LK_API_KEY;
const apiSecret = process.env.REACT_APP_LK_SECRET_KEY;
const livekitHost = process.env.REACT_APP_LK_SERVER_URL;

function App() {
  const { joinRoom } = useSelector(state => state.video)
  const [token, setToken] = useState('');
  const [roomName, setRoomName] = useState('my-room'); // Room name for testing
  const [identity, setIdentity] = useState('user-identity'); // Unique user identity for testing
  const [errorMessage, setErrorMessage] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const generateToken = async () => {
    try {
      const token = new AccessToken(apiKey, apiSecret, {
        identity: identity,  // Unique identity for each participant
      });

      token.addGrant({
        roomJoin: true,   // Allow joining the room
        room: roomName,   // Name of the room
      });

      const jwtToken = await token.toJwt();  // Get the generated token
      console.log(jwtToken)
      setToken(jwtToken);  // Store the generated token
    } catch (error) {
      setErrorMessage('Error generating token: ' + error.message);
    }
  };

  useEffect(() => {
    if (joinRoom) generateToken()
  }, [joinRoom])

  return (
    <div className="App">
      {joinRoom ? (
        <LiveKitRoom
          video={true}
          audio={true}
          token={token}
          serverUrl={livekitHost}
          connect={true}
        // data-lk-theme="default"
        // style={{ height: '100vh' }}
        >
          <VideoStream />
        </LiveKitRoom>
      ) :
        <JoinRoom />
      }
    </div >
  );
}

export default App;
