import VideoRecorder from 'react-native-beautiful-video-recorder';
import { useNavigation } from '@react-navigation/native';

function Camera(){
  // const App = () => {
  const cameraRef = useRef(null);
  const videoRecord = async () => {
    if( cameraRef && cameraRef.current ) {
      cameraRef.current.open({ maxLength: 30 },(data) => {
        console.log('captured data', data); // data.uri is the file path
      });
    }
  }
  return (
    <View>
      <VideoRecorder ref={cameraRef} />
      <Button onPress={ () => videoRecord() }>Open Recorder</Button>
      <Button onPress={ () => navigation.navigate("Result")}>next</Button>
    </View>
  );
}