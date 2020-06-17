import styled from "styled-components/native";
import Constants from "expo-constants";

import MyText from "../MyText";

import { colors } from "utils/colors";

export const Header = styled.View`
  background-color: ${colors.primary};
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled(MyText)`
  color: ${colors.secondary};
  font-size: 48px;
  font-weight: bold;
`;
