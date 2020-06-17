import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors } from "utils/colors";

export const Icons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${colors.primary};
  padding: 10px;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: white;
`;
