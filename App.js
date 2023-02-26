import { SafeAreaView, Button, View } from 'react-native';


import { FaceLandmarksDetector, faceLandmarksDetection } from '@tensorflow-models/face-landmarks-detection';
import VideoRecorder from 'react-native-beautiful-video-recorder';
 
export default function App() {
  const cameraRef = useRef(null);
  const videoRecord = async () => {
    if( cameraRef && cameraRef.current ) {
      cameraRef.current.open({ maxLength: 30 },(data) => {
        console.log('captured data', data); // data.uri is the file path
      });
    }
  }
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: 'mediapipe', // or 'tfjs'
    solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
  }

  const detector =  faceLandmarksDetection.createDetector(model, detectorConfig);
  const faces =  detector.estimateFaces(image);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <VideoRecorder ref={cameraRef} />
          <Button onPress={ () => videoRecord() }>Open Recorder</Button>
        <Button onPress={ () => videoRecord() } title="Open Recorder" />

        <Text>{faces}</Text>
      </View>
    </SafeAreaView>
  );
}

