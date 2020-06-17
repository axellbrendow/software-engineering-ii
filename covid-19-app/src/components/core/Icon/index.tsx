import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export default function Icon(props: ImageProps & S.IconProps) {
  return <S.Icon {...props} />;
}
