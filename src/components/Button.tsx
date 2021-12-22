import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onClick: any;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: whitesmoke;
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
`;
