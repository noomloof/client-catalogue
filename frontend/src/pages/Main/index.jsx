import { useEffect } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { useCookies } from 'react-cookie';

const Main = () => {
  const [clients, setClients] = [];
  const [cookies, setCookies] = useCookies('token');

  useEffect(() => {
    api.get('/clients/list').then((response) => console.log(response));
    console.log(document.cookie);
    // console.log(cookies.get('token'));
    console.log(cookies);
  });

  return <Container></Container>;
};

export default Main;
