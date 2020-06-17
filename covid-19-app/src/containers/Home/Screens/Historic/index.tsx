import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { Audio, Video } from "expo-av";

import MyText from "components/core/MyText";
import ScreenContainer from "components/core/ScreenContainer";
import Icon from "components/core/Icon";

import camera from "assets/icons/camera_black.png";
import microphone from "assets/icons/microphone_black.png";

import * as S from "./styles";

const renderLocation = location => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyText>latitude: </MyText>
      <MyText color="blue" marginLeft="10px">
        {location.coords.latitude}
      </MyText>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyText>longitude: </MyText>
      <MyText color="blue" marginLeft="10px">
        {location.coords.longitude}
      </MyText>
    </View>
  </View>
);

export default function Historic(props: any) {
  const events = useSelector(state => state.data);
  const [videoURI, setVideoURI] = useState("");

  return (
    <ScreenContainer>
      {videoURI ? (
        <Video
          source={{ uri: videoURI }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping={false}
          style={{ width: "100%", height: "50%", alignSelf: "center" }}
        />
      ) : null}
      <S.Cards
        contentContainerStyle={{ alignItems: "center" }}
        data={events}
        keyExtractor={(event, index) => `${event.date}${index}`}
        numColumns={2}
        renderItem={({ item: event }) => (
          <S.Card>
            <S.IdentifierText>{event.eventIdentifier}</S.IdentifierText>
            <MyText>{event.date}</MyText>
            {renderLocation(event.location)}
            <S.Icons>
              <TouchableOpacity
                onPress={async () => {
                  const soundObject = new Audio.Sound();
                  try {
                    await soundObject.loadAsync({ uri: event.audioURI });
                    await soundObject.playAsync();
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                <Icon
                  source={microphone}
                  width="30px"
                  height="30px"
                  marginLeft="20px"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVideoURI(event.videoURI);
                }}
              >
                <Icon
                  source={camera}
                  width="30px"
                  height="30px"
                  marginLeft="20px"
                />
              </TouchableOpacity>
            </S.Icons>
          </S.Card>
        )}
      ></S.Cards>
    </ScreenContainer>
  );
}
