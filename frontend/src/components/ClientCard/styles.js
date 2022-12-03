import styled from 'styled-components';

export const Container = styled.div`
  width: 32%;
  padding: 3%;
  display: flex;
  flex-direction: row;
  background: rgba(192, 192, 192, 0.4);
  margin-right: 3px;
  margin-bottom: 3px;
  border-radius: 2px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const EditIconContainer = styled.div`
  margin-bottom: 10px;
  border-radius: 5px;

  svg {
    transform: translateY(2px);
    transition: 300ms;
  }

  &:hover {
    svg {
      color: lightgreen;
      transform: scale(1.1) translateY(2px);
      transition: 300ms;
      cursor: pointer;
    }
  }
`;

export const DeleteIconContainer = styled.div`
  border-radius: 5px;

  svg {
    transform: translateY(2px);
    transition: 300ms;
  }

  &:hover {
    svg {
      color: #de0d0d;
      transform: scale(1.1) translateY(2px);
      transition: 300ms;
      cursor: pointer;
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const EmailsContainer = styled.div`
  margin-bottom: 3px;
`;

export const EmailDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin-bottom: 1.75px;
`;

export const PhonesContainer = styled.div``;

export const PhoneDiv = styled.div`
  text-align: left;
`;
