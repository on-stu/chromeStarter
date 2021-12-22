import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
}

const Modal: FC<Props> = ({ visible, children }) => {
  return <>{visible && <ModalContainer>{children}</ModalContainer>}</>;
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;
