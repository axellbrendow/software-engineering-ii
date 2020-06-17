import React, { useEffect } from "react";
import { View, Text } from "react-native";

import ScreenContainer from "components/core/ScreenContainer";
import Camera from "components/core/Camera";

export default function RecordVideo({
  videoURI,
  setVideoURI,
  isVideoRecording,
  setIsVideoRecording,
  navigation,
  route,
  ...rest
}: any) {
  // useEffect(() => {
  //   navigation.navigate("Denounce");
  // });

  return (
    <ScreenContainer>
      <Camera
        videoURI={videoURI}
        setVideoURI={setVideoURI}
        isVideoRecording={isVideoRecording}
        setIsVideoRecording={setIsVideoRecording}
        navigation={navigation}
      />
      {/* <MyText>RecordVideo</MyText>
      <MyText>{JSON.stringify(props)}</MyText> */}
    </ScreenContainer>
  );
}
