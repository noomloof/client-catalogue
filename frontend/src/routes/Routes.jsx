import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Register from '../pages/Register';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
      >
        <Landing />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/catalogue'>
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
