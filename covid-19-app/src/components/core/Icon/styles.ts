import styled from "styled-components/native";

export interface IconProps {
  width: string;
  height: string;
  marginLeft?: string;
}

export const Icon = styled.Image<IconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ marginLeft }) => `margin-left: ${marginLeft}` || ""};
`;
