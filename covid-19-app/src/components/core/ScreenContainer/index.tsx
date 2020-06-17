import React from "react";

import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function ScreenContainer({ children }: Props) {
  return <S.ScreenContainer children={children} />;
}
