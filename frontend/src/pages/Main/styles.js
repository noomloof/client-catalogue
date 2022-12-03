import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-image: linear-gradient(135deg, #889eea 0%, #986ba2 100%); ;
`;

export const TitleAddContainer = styled.div`
  display: flex;
  padding: 2% 20%;
  width: 100%;
  justify-content: space-between;
`;

export const TitleSection = styled.section`
  font-size: 22px;
`;

export const AddSection = styled.section``;

export const AddButton = styled.button`
  font-size: 24px;
  padding: 8px 24px;
  border-radius: 15px;
  position: relative;
  color: black;
  background: rgba(99, 255, 186, 0.9);
  transition: 500ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:hover {
    transition: 500ms;
    box-shadow: rgba(99, 255, 186, 0.4) 5px 14px 21px -3px,
      rgba(99, 255, 186, 0.2) 5px 4px 6px -2px;
    transform: scale(1.04);
  }

  svg {
    transform: translateY(4px);
  }
`;

export const ClientContainer = styled.div`
  background: rgba(192, 192, 192, 0.2);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  width: 87%;
  height: 72vh;
  padding: 4% 4%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin: 0 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2.5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const EmptyClientList = styled.div``;

export const PopulatedClientList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  align-items: baseline;
  justify-content: left;
  padding-left: 5%;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  padding-top: 150px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const modalFadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-300px)
  }

  to {
    opacity: 1;
    transform: translateY(0px) ;
  }
`;

const modalFadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(-300px)
  }
  `;

export const ModalBox = styled.div`
  z-index: 3;
  position: relative;
  width: 35%;
  text-align: center;
  margin: 0 auto;
  animation: ${(props) =>
    props.showClientRegisterAnimation
      ? css`
          ${modalFadeInAnimation} 0.7s
        `
      : css`
          ${modalFadeOutAnimation} 0.5s
        `};
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(135deg, #333eea, #531ba2) 2 2 2 2;
  background: linear-gradient(
    135deg,
    rgba(103, 131, 227, 1) 0%,
    rgba(171, 85, 190, 1) 100%
  );

  header {
    display: flex;
    padding: 0.75rem;
    justify-content: space-between;

    .close {
      cursor: pointer;
    }

    svg {
      font-size: 15px;
      transform: translateY(2px);
    }
  }
`;

export const ModalForm = styled.div``;

export const InputContainer = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    outline: none;
    text-align: left;
    border: 1px solid black;
    border-radius: 5px;

    width: 54%;

    padding: 11px;

    background: transparent;
    transition: 0.3s;

    color: black;

    &:hover {
    }

    &:focus {
      border: 1px solid black;
      transition: 0.3s;
      color: black;
    }

    :-webkit-autofill,
    :-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
  }

  input[data-autocompleted] {
    background-color: transparent !important;
  }

  label {
    position: absolute;
    top: 35px;
    left: 8.125rem;
    color: black;
    transition: 0.3s;
    font-size: 0.875rem;
    pointer-events: none;
    background: transparent;
  }

  input:focus ~ label,
  input:not([value='']) ~ label {
    top: 5px;
    left: 7.625rem;
    color: black;
    font-size: 0.7rem;
    padding-left: 3px;
    padding-right: 3px;
    transition: 0.4s;
  }

  input:not(:focus):valid ~ label {
    color: black;
  }

  section {
    text-align: left;
    height: 16px;
    font-size: 14px;
    color: #ffa500;
    text-shadow: 0 0 1px #ffa500, 0 0 3px #de0d0d;
    letter-spacing: 0.64px;
  }
`;

export const ModalButton = styled.button`
  font-size: 16px;
  padding: 14px 42px;
  border-radius: 15px;
  width: 36%;
  color: #9a9a9a;
  position: relative;

  &::after {
    content: 'Register';
    text-shadow: 0 0 5px #f3f3f3, 0 0 8px #fff;
    padding: 14px 42px;
    color: black;
    border-radius: 15px;
    position: absolute;
    inset: 0;
    opacity: 0;
    background: rgb(99, 255, 186);
    background: linear-gradient(
      90deg,
      rgba(99, 255, 186, 0.8) 0%,
      rgba(155, 255, 153, 0.8) 33%,
      rgba(198, 255, 127, 0.8) 66%,
      rgba(246, 255, 99, 0.8) 100%
    );
    transition: 500ms;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    background: rgb(99, 255, 186);
    background: linear-gradient(
      90deg,
      rgba(99, 255, 186, 1) 0%,
      rgba(155, 255, 153, 1) 33%,
      rgba(198, 255, 127, 1) 66%,
      rgba(246, 255, 99, 1) 100%
    );
  }
`;

export const EditModalBox = styled.div`
  z-index: 3;
  position: relative;
  width: 35%;
  text-align: center;
  margin: 0 auto;
  animation: ${(props) =>
    props.showClientEditAnimation
      ? css`
          ${modalFadeInAnimation} 0.7s
        `
      : css`
          ${modalFadeOutAnimation} 0.5s
        `};
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(135deg, #333eea, #531ba2) 2 2 2 2;
  background: linear-gradient(
    135deg,
    rgba(103, 131, 227, 1) 0%,
    rgba(171, 85, 190, 1) 100%
  );

  header {
    display: flex;
    padding: 0.75rem;
    justify-content: space-between;

    .close {
      cursor: pointer;
    }

    svg {
      font-size: 15px;
      transform: translateY(2px);
    }
  }
`;

export const EditModalButton = styled.button`
  font-size: 16px;
  padding: 14px 42px;
  border-radius: 15px;
  width: 36%;
  color: #9a9a9a;
  position: relative;

  &::after {
    content: 'Edit';
    text-shadow: 0 0 5px #f3f3f3, 0 0 8px #fff;
    padding: 14px 42px;
    color: black;
    border-radius: 15px;
    position: absolute;
    inset: 0;
    opacity: 0;
    background: rgb(99, 255, 186);
    background: linear-gradient(
      90deg,
      rgba(99, 255, 186, 0.8) 0%,
      rgba(155, 255, 153, 0.8) 33%,
      rgba(198, 255, 127, 0.8) 66%,
      rgba(246, 255, 99, 0.8) 100%
    );
    transition: 500ms;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    background: rgb(99, 255, 186);
    background: linear-gradient(
      90deg,
      rgba(99, 255, 186, 1) 0%,
      rgba(155, 255, 153, 1) 33%,
      rgba(198, 255, 127, 1) 66%,
      rgba(246, 255, 99, 1) 100%
    );
  }
`;

export const DeleteModalBox = styled.div`
  z-index: 3;
  position: relative;
  width: 35%;
  text-align: center;
  margin: 0 auto;
  animation: ${(props) =>
    props.showClientDeleteAnimation
      ? css`
          ${modalFadeInAnimation} 0.7s
        `
      : css`
          ${modalFadeOutAnimation} 0.5s
        `};
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(135deg, #333eea, #531ba2) 2 2 2 2;
  background: linear-gradient(
    135deg,
    rgba(103, 131, 227, 1) 0%,
    rgba(171, 85, 190, 1) 100%
  );
  padding-bottom: 2%;
  h3 {
    margin-bottom: 12%;
  }

  header {
    display: flex;
    padding: 0.75rem;
    justify-content: space-between;

    .close {
      cursor: pointer;
    }

    svg {
      font-size: 15px;
      transform: translateY(2px);
    }
  }
`;

export const DeleteButtonsContainer = styled.div`
  display: flex;
  padding: 0 5%;
  justify-content: space-evenly;
`;

export const CancelButton = styled.button`
  font-size: 16px;
  padding: 14px 42px;
  border-radius: 15px;
  width: 36%;
  color: #9a9a9a;
  position: relative;
  transition: 500ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:hover {
    background: rgba(99, 255, 186, 0.9);
    color: white;
    transition: 500ms;
    box-shadow: rgba(99, 255, 186, 0.4) 5px 14px 21px -3px,
      rgba(99, 255, 186, 0.2) 5px 4px 6px -2px;
  }
`;

export const ConfirmButton = styled.button`
  font-size: 16px;
  padding: 14px 42px;
  border-radius: 15px;
  width: 36%;
  color: #9a9a9a;
  position: relative;

  &::after {
    content: 'Confirm';
    text-shadow: 0 0 5px #f3f3f3, 0 0 8px #fff;
    padding: 14px 42px;
    color: black;
    border-radius: 15px;
    position: absolute;
    inset: 0;
    opacity: 0;
    background: #de0d0d;
    transition: 500ms;
  }

  &:hover::after {
    opacity: 1;
    box-shadow: rgba(222, 13, 13, 0.4) 5px 14px 21px -3px,
      rgba(222, 13, 13, 0.2) 5px 4px 6px -2px;
  }

  &:active {
    background: rgb(99, 255, 186);
    background: linear-gradient(
      90deg,
      rgba(99, 255, 186, 1) 0%,
      rgba(155, 255, 153, 1) 33%,
      rgba(198, 255, 127, 1) 66%,
      rgba(246, 255, 99, 1) 100%
    );
  }
`;
