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
  background: rgba(99, 255, 186, 0.4);
  background: linear-gradient(
    90deg,
    rgba(99, 255, 186, 0.6) 0%,
    rgba(155, 255, 153, 0.6) 33%,
    rgba(198, 255, 127, 0.6) 66%,
    rgba(246, 255, 99, 0.6) 100%
  );
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
  width: 25%;
  text-align: center;
  margin: 0 auto;
  animation: ${(props) =>
    props.showLoginAnimation
      ? css`
          ${modalFadeInAnimation} 0.7s
        `
      : css`
          ${modalFadeOutAnimation} 0.4s
        `};

  header {
    display: flex;
    padding: 1rem;
    justify-content: space-between;

    .close {
      cursor: pointer;
    }
  }
  button {
    width: 100%;
  }
`;
