import {
  Container,
  List,
  ListItem,
  LogoContainer,
  MenuContainer,
} from './styles';
import logo from '../../assets/transparentlogo.svg';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ShowLoginContext } from '../../providers/showLogin';
import { ShowLoginAnimationContext } from '../../providers/showLoginAnimation';
import api from '../../services/api';

const Header = (props) => {
  const { setShowLogin } = useContext(ShowLoginContext);
  const { setShowLoginAnimation } = useContext(ShowLoginAnimationContext);

  const history = useHistory();

  const pushRegister = () => {
    history.push('/register');
  };

  const handleLogout = () => {
    api
      .get('/login')
      .then((response) => {
        history.push('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      {props.isMain ? (
        <>
          {' '}
          <LogoContainer>
            {' '}
            <img
              src={logo}
              alt='logo'
            />
          </LogoContainer>
          <MenuContainer>
            <List>
              <ListItem
                className='logout'
                onClick={() => handleLogout()}
              >
                Logout
              </ListItem>
            </List>
          </MenuContainer>{' '}
        </>
      ) : (
        <>
          {' '}
          <LogoContainer>
            {' '}
            <img
              src={logo}
              alt='logo'
            />
          </LogoContainer>
          <MenuContainer>
            <List>
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
          </MenuContainer>{' '}
        </>
      )}
    </Container>
  );
};

export default Header;
