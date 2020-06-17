import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function App({
  videoURI,
  setVideoURI,
  isVideoRecording,
  setIsVideoRecording,
  navigation,
}: any) {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const startRecording = () => {
    if (cameraRef && !isVideoRecording && !videoURI) {
      (async () => {
        try {
          const permission = await Camera.requestPermissionsAsync();
          if (!permission.granted) return;
          setIsVideoRecording(true);
          const video = await cameraRef.recordAsync({
            quality: Camera.Constants.VideoQuality["4:3"],
          });
          setVideoURI(video.uri);
          setIsVideoRecording(false);
        } catch (error) {
          console.error(error);
          setIsVideoRecording(false);
        }
      })();
    }
  };

  const stopRecording = async () => {
    try {
      if (cameraRef) {
        cameraRef.stopRecording();
      }
    } catch (error) {
      setVideoURI(null);
      console.error(error);
    }
    setIsVideoRecording(false);
    navigation.navigate("Denounce");
  };

  useEffect(() => {
    (async () => {
      const status = await Camera.requestPermissionsAsync();
      setHasPermission(status.granted);
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Camera style={{ flex: 1 }} type={type} ref={setCameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={isVideoRecording ? stopRecording : startRecording}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: 1,
                borderColor: "white",
                height: 70,
                width: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 1,
                  borderColor: "white",
                  height: 60,
                  width: 60,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{isVideoRecording ? "Stop" : "Record"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
