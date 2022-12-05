import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  overflow-y: auto;
  background: linear-gradient(
    0deg,
    rgba(136, 158, 234, 0.8) 0%,
    rgba(152, 107, 162, 0.8) 100%
  );
`;

export const FillerSection = styled.div`
  /* display: flex; */
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  justify-content: left;
  padding-left: 7%;

  width: 35%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(103, 131, 227, 1) 0%,
    rgba(171, 85, 190, 1) 100%
  );

  img {
    margin-top: 12%;
    margin-bottom: 8%;
    width: 50%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 10%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }

  .instructions {
    margin-bottom: 2%;
  }
`;

export const FormSection = styled.div`
  width: 65%;
  height: 100vh;
  padding-top: 7%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  padding-left: 25%;
  position: relative;
  height: 100px;
  display: flex;
  justify-content: left;
  flex-direction: column;

  input {
    outline: none;
    text-align: left;
    border: 1px solid black;
    border-radius: 5px;

    width: 48%;

    padding: 12.5px;

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
    top: 13px;
    left: 16.375rem;
    color: black;
    transition: 0.3s;
    font-size: 0.85rem;
    pointer-events: none;
    background: transparent;
  }

  input:focus ~ label,
  input:not([value='']) ~ label {
    top: -1.2rem;
    left: 16rem;
    color: black;
    font-size: 0.775rem;
    padding-left: 3px;
    padding-right: 3px;
    transition: 0.4s;
  }

  input:not(:focus):valid ~ label {
    color: black;
  }

  section {
    text-align: left;
    font-size: 14px;
    color: #de0d0d;
  }
`;

export const DetailSection = styled.section`
  padding-left: 30%;
  text-align: left;
  font-size: 11px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 14px 42px;
  border-radius: 15px;
  width: 30%;
  position: relative;

  &::after {
    content: 'Create account';
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
