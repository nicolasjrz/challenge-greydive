import React from "react";
import styled from "styled-components";
import { XMarkIcon } from "./Icons/XMarkIcon";
export const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <Overlay>
          <ContainerModal>
            <HeaderModal>
              <ButtonClose onClick={() => setModal(!modal)}>
                <XMarkIcon />
              </ButtonClose>
            </HeaderModal>
            <BodyModal>{children}</BodyModal>
          </ContainerModal>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerModal = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  border-radius: 5px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const ButtonClose = styled.button`
  position: absolute;
  background-color: black;
  top: 5px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;

  &:hover {
    background: #e0c5e0;
  }
`;

const BodyModal = styled.div`
  text-align: center;
`;
