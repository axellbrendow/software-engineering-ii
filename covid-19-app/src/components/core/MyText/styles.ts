import styled from "styled-components/native";

export interface MyTextProps {
  color?: string;
  fontSize?: string;
  paddingTop?: string;
  marginLeft?: string;
}

export const MyText = styled.Text<MyTextProps>`
  color: ${({ color }) => color || "black"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-family: sans-serif;
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop};` : "")};
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : "")};

  /* font-family: "Nunito_400Regular", "Nunito_400Bold", "Segoe UI", Tahoma, Geneva,
    Verdana, sans-serif; */
`;
