import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-image: linear-gradient(135deg, #889eea 0%, #986ba2 100%); ;
`;

export const Content = styled.div`
  margin-top: 7.5%;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Punchline = styled.div`
  width: 36%;
  margin-left: 20%;

  h1 {
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 26px;
    margin-top: 2.5%;
  }

  #horrible {
    font-size: 56px;
  }
`;

export const FirstImage = styled.div`
  padding-right: 4%;

  img {
    width: 25%;
    margin-right: 2%;
  }

  img + img {
    margin-left: 2%;
  }
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 8.4%;
  margin-left: 17.5%;
  justify-content: left;
  align-items: center;
`;

export const TextArea = styled.div`
  width: 40%;
  margin-left: 14%;
  font-size: 22px;

  p {
    text-align: left;
  }
`;

export const ButtonArea = styled.div`
  width: 30%;
`;

export const Button = styled.button`
  font-size: 24px;
  padding: 14px 42px;
  border-radius: 15px;
  position: relative;
  color: #9a9a9a;
  text-shadow: 0 0 1px #f3f3f3, 0 0 3px #fff;
  /* background: rgba(99, 255, 186, 0.4);
  background: linear-gradient(
    90deg,
    rgba(99, 255, 186, 0.6) 0%,
    rgba(155, 255, 153, 0.6) 33%,
    rgba(198, 255, 127, 0.6) 66%,
    rgba(246, 255, 99, 0.6) 100%
  ); */
  transition: 500ms;

  &::after {
    content: 'Get registering!';
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
    props.showLoginAnimation
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

export const ModalForm = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;

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
    content: 'Login';
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
