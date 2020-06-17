import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import * as S from "./styles";

export default function MyText(props: TextProps & S.MyTextProps) {
  return <S.MyText {...props} />;
}
