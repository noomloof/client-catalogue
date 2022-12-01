import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-image: linear-gradient(135deg, #333eea 0%, #531ba2 100%);
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  display: flex;
  padding: 0 13.5%;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  /* background-image: linear-gradient(135deg, #333eea 0%, #531ba2 100%); */
`;

export const MenuContainer = styled.div`
  width: 20%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;

export const ListItem = styled.li`
  color: #767473;
  transition: 400ms;

  &:hover {
    color: #f0f0f0;
    text-shadow: 0 0 3px #f3f3f3, 0 0 10px #fff;
    transition: 300ms;
    cursor: pointer;
  }
`;
