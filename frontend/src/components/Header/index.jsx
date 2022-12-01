import {
  Container,
  List,
  ListItem,
  LogoContainer,
  MenuContainer,
} from './styles';
import logo from '../../assets/transparentlogo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ShowLoginContext } from '../../providers/showLogin';
import { ShowLoginAnimationContext } from '../../providers/showLoginAnimation';

const Header = () => {
  const { setShowLogin } = useContext(ShowLoginContext);
  const { setShowLoginAnimation } = useContext(ShowLoginAnimationContext);

  const history = useHistory();

  const pushRegister = () => {
    history.push('/register');
  };

  return (
    <Container>
      <LogoContainer>
        {' '}
        <img
          src={logo}
          alt='logo'
        />
      </LogoContainer>
      <MenuContainer>
        <List>
          <ListItem>About</ListItem>
          <ListItem onClick={() => pushRegister()}>Register</ListItem>
          <ListItem
            onClick={() => {
              setShowLoginAnimation(true);
              setShowLogin(true);
            }}
          >
            Login
          </ListItem>
        </List>
      </MenuContainer>
    </Container>
  );
};

export default Header;
