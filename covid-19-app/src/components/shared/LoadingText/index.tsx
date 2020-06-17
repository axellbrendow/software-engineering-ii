import React, { useState, useEffect } from "react";

import * as S from "./styles";

const states = ["LOADING", "LOADING.", "LOADING..", "LOADING..."];

export default function LoadingText() {
  const [stateIndex, setStateIndex] = useState(0);
  const [text, setText] = useState(states[stateIndex]);

  useEffect(() => {
    const handle = setTimeout(() => {
      const newState = (stateIndex + 1) % states.length;
      setStateIndex(newState);
      setText(states[newState]);
    }, 50);

    return () => {
      clearTimeout(handle);
    };
  }, [stateIndex]);

  return (
    <S.AppLoading>
      <S.LoadingText>{text}</S.LoadingText>
    </S.AppLoading>
  );
}
