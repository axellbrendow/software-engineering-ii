import styled from "styled-components/native";
import { ScrollView, FlatList } from "react-native";

import MyText from "components/core/MyText";

import { colors } from "utils/colors";

export const Icons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.View`
  background-color: ${colors.secondary};
  min-width: 173px;
  min-height: 155px;
  padding: 10px;
  align-items: center;
`;

export const Cards = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 5px;
`;

export const IdentifierText = styled(MyText)`
  height: 48px;
`;
