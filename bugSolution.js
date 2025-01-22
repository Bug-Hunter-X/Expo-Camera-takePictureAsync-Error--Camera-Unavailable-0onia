The solution involves using the `Camera.getStatusAsync` method to check the camera status before attempting to take a picture.  Here's how you should modify your code:
```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraReady, setCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    if (!cameraReady) {
      console.warn('Camera not ready yet!');
      return;
    }
    if (hasPermission) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo', photo);
    }
  };

  const cameraRef = React.useRef(null);

  const handleCameraReady = async () => {
    const status = await cameraRef.current.getStatusAsync();
    setCameraReady(status.isRecording === false);
  };

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
        onCameraReady={handleCameraReady}
      >
      <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <Button title="Take Picture" onPress={handleTakePicture} />
      </View> 
      </Camera>
    </View>
  );
}
```