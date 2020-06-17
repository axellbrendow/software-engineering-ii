import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import * as Location from "expo-location";

import MyText from "components/core/MyText";
import ScreenContainer from "components/core/ScreenContainer";
import Icon from "components/core/Icon";

import { addEvent } from "store";

import speaker from "assets/icons/speaker.png";
import camera from "assets/icons/camera_black.png";
import microphone from "assets/icons/microphone_black.png";

import * as S from "./styles";

let recording = new Audio.Recording();

export default function Denounce({
  videoURI,
  setVideoURI,
  isVideoRecording,
  setIsVideoRecording,
  navigation,
  route,
  ...rest
}: any) {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<Location.LocationData | null>(null);
  const [eventIdentifier, setEventIdentifier] = useState("");

  const [isAudioRecording, setIsAudioRecording] = useState(false);
  const [audioURI, setAudioURI] = useState<string | null>(null);
  const [audioRecordingTime, setAudioRecordingTime] = useState(0);

  useEffect(() => {
    (async () => {
      const status = await Location.requestPermissionsAsync();
      if (!status.granted) return;

      const location = await Location.getCurrentPositionAsync({});
      // console.log(location);
      setLocation(location);
    })();
  }, []);

  const startRecording = () => {
    (async () => {
      try {
        const permission = await Audio.requestPermissionsAsync();
        if (!permission.granted) return;
        await recording.prepareToRecordAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        await recording.startAsync();

        setAudioURI(recording.getURI());
        setAudioRecordingTime(0);

        setIsAudioRecording(true);
      } catch (error) {
        console.error(error);
        setIsAudioRecording(false);
      }
    })();
  };

  const stopRecording = () => {
    (async () => {
      try {
        const status = await recording.stopAndUnloadAsync();
        setAudioRecordingTime(status.durationMillis);
      } catch (error) {
        console.error(error);
      }
      // setAudioRecordingTime(0);
      setIsAudioRecording(false);
      recording = new Audio.Recording();
    })();
  };

  return (
    <ScreenContainer>
      <>
        <MyText fontSize="32px" paddingTop="30px">
          Do your denounce!
        </MyText>
        <TextInput
          style={{
            width: "90%",
            marginTop: 20,
            height: 100,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
          }}
          multiline
          placeholder="identify this event"
          onChangeText={setEventIdentifier}
          value={eventIdentifier}
        />
        <S.Icons>
          <MyText>{(audioRecordingTime / 1000).toFixed(1)}s</MyText>
          <TouchableOpacity
            onPress={isAudioRecording ? stopRecording : startRecording}
            style={{ borderWidth: isAudioRecording ? 1 : 0 }}
          >
            <Icon source={microphone} width="40px" height="40px" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Record Video");
            }}
          >
            <Icon
              source={camera}
              width="40px"
              height="40px"
              marginLeft="20px"
            />
          </TouchableOpacity>
          <MyText marginLeft="10px">{videoURI ? "OK" : null}</MyText>
        </S.Icons>
        <S.Button
          onPress={() => {
            dispatch({
              type: addEvent.type,
              payload: {
                event: {
                  eventIdentifier: eventIdentifier,
                  date: new Date().toISOString(),
                  location,
                  audioURI,
                  videoURI,
                },
              },
            });

            setAudioRecordingTime(0);
            setIsAudioRecording(false);
            setAudioURI(null);

            setIsVideoRecording(false);
            setVideoURI(null);

            setEventIdentifier("");
            navigation.navigate("Historic");
          }}
        >
          <S.Text>DENOUNCE!</S.Text>
          <Icon source={speaker} width="25px" height="25px" marginLeft="10px" />
        </S.Button>
      </>
    </ScreenContainer>
  );
}
