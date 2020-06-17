import "react-native-gesture-handler";

import * as React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";

import RecordVideo from "./Screens/RecordVideo";

import camera from "assets/icons/camera.png";
import list from "assets/icons/list.png";
import speaker from "assets/icons/speaker.png";
import Denounce from "./Screens/Denounce";
import Historic from "./Screens/Historic";

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  const [videoURI, setVideoURI] = React.useState<string | null>(null);
  const [isVideoRecording, setIsVideoRecording] = React.useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Denounce"
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#F8F8F8",
        style: {
          backgroundColor: "#A52F2C",
        },
        labelStyle: {
          textAlign: "center",
        },
        indicatorStyle: {
          borderBottomColor: "#F0DB60",
          borderBottomWidth: 5,
        },
        showLabel: true,
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Record Video"
        options={{
          tabBarLabel: "Record Video",
          tabBarIcon: () => <Icon source={camera} />,
        }}
      >
        {props => (
          <RecordVideo
            videoURI={videoURI}
            setVideoURI={setVideoURI}
            isVideoRecording={isVideoRecording}
            setIsVideoRecording={setIsVideoRecording}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Denounce"
        options={{
          tabBarLabel: "Denounce",
          tabBarIcon: () => <Icon source={speaker} />,
        }}
      >
        {props => (
          <Denounce
            videoURI={videoURI}
            setVideoURI={setVideoURI}
            isVideoRecording={isVideoRecording}
            setIsVideoRecording={setIsVideoRecording}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Historic"
        component={Historic}
        options={{
          tabBarLabel: "Historic",
          tabBarIcon: () => <Icon source={list} />,
        }}
      />
    </Tab.Navigator>
  );
}
