import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FaceLandmarksDetector, faceLandmarksDetection } from '@tensorflow-models/face-landmarks-detection';
import { useNavigation } from '@react-navigation/native';


export default function App() {

  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: 'mediapipe', // or 'tfjs'
    solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
  }
  // const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
  // const faces = await detector.estimateFaces(image);

  const detector =  faceLandmarksDetection.createDetector(model, detectorConfig);
  const faces =  detector.estimateFaces(image);

  return (
    <View style={styles.container}>
      <Text>{faces}</Text>
      <StatusBar style="auto" />
      <Button onPress={ () => navigation.navigate("camera")}>back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
