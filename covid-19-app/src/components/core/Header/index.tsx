import React from "react";

import Icon from "../Icon";

import corona from "assets/icons/corona.png";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Content>
        <S.Title>COVID-19</S.Title>
        <Icon source={corona} width="40px" height="40px" marginLeft="20px" />
      </S.Content>
    </S.Header>
  );
}
